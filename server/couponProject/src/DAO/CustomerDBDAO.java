package DAO;

import java.io.Serializable;
import java.sql.SQLException;
import java.util.ArrayList;

import core.Coupon;
import core.Customer;
import general.CouponType;
import general.CustomerNameExistsException;
import general.CustomerNotFoundException;
import general.CustomerNameChangedException;
import general.SystemShutdownException;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CustomerDBDAO implements CustomerDAO, Serializable {
	private static final long serialVersionUID = 1L;

	private CustomerExecutor<Customer> customerExecutor;
	private CouponExecutor<Coupon> couponExecutor;

	private long idOfCustomerLoggedIn;

	/**
	 * Public constructor <br>
	 * Create an instance to CustomerExecutor <br>
	 * Create an instance to CouponExecutor
	 * 
	 * @param pool
	 *            ConnectionPool pool of connections
	 * @see ConnectionPool
	 * @see CustomerExecutor
	 * @see CouponExecutor
	 */

	public CustomerDBDAO(ConnectionPool pool) {
		customerExecutor = new CustomerExecutor<>(pool);
		couponExecutor = new CouponExecutor<>(pool);
	}

	/**
	 * Give the id of the customer logged in
	 * 
	 * @return long id of the current customer
	 */

	public long getIdOfCustomerLoggedIn() {
		return idOfCustomerLoggedIn;
	}

	/**
	 * Insert customer to the table Customer
	 * 
	 * @param customer
	 *            Customer customer to create
	 * @throws CustomerNameExistsException
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Customer
	 */

	@Override
	public void createCustomer(Customer customer)
			throws CustomerNameExistsException, SystemShutdownException, InterruptedException, SQLException {

		String query1 = CustomerSQLQueries.SELECT_CUSTOMER_BY_NANE;
		ArrayList<Parameter<?>> parameters1 = new ArrayList<>();
		parameters1.add(new Parameter<String>(customer.getCustName()));

		ArrayList<Customer> customers = customerExecutor.execute(SQLOperations.SELECT, query1, parameters1);

		// Check if customer with the same name exists
		if (customers.isEmpty()) {

			// NO - Create customer
			String query2 = CustomerSQLQueries.INSERT_NEW_CUSTOMER;
			ArrayList<Parameter<?>> parameters2 = new ArrayList<>();
			parameters2.add(new Parameter<String>(customer.getCustName()));
			parameters2.add(new Parameter<String>(customer.getPassword()));

			customerExecutor.execute(SQLOperations.INSERT, query2, parameters2);

			System.out.println(customer.getCustName() + " successfully created");
		} else {

			// YES - Throw CustomerNameExistsException
			throw new CustomerNameExistsException(customer.getCustName() + " already exists");
		}
	}

	/**
	 * Delete customer from the table Customer and delete all of the coupons of
	 * this customer from the table Customer_Coupon
	 * 
	 * @param customer
	 *            Customer customer to remove
	 * @throws CustomerNotFoundException
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Customer
	 */

	@Override
	public void removeCustomer(Customer customer)
			throws CustomerNotFoundException, SystemShutdownException, InterruptedException, SQLException {

		// Check if the customer exists
		if (customerExists(customer.getId())) {

			// YES - Remove customer
			ArrayList<Parameter<?>> parameters = new ArrayList<>();
			parameters.add(new Parameter<Long>(customer.getId()));

			String query1 = CustomerSQLQueries.DELETE_COUPONS;

			customerExecutor.execute(SQLOperations.DELETE, query1, parameters);

			String query2 = CustomerSQLQueries.DELETE_CUSTOMER;

			customerExecutor.execute(SQLOperations.DELETE, query2, parameters);

			System.out.println("Customer [" + customer.getId() + "] successfully removed");
		} else {

			// NO - Throw CustomerNotFoundException
			throw new CustomerNotFoundException("Customer [" + customer.getId() + "] not found");
		}
	}

	/**
	 * Update customer in the table Customer
	 * 
	 * @param customer
	 *            Customer customer to update
	 * @throws CustomerNotFoundException
	 * @throws CustomerNameChangedException
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Customer
	 */

	@Override
	public void updateCustomer(Customer customer) throws CustomerNotFoundException, CustomerNameChangedException,
			SystemShutdownException, InterruptedException, SQLException {

		// Check if the customer exists
		if (customerExists(customer.getId())) {

			// YES - Try to update customer
			String query1 = CustomerSQLQueries.SELECT_CUSTOMER_BY_ID_AND_NAME;
			ArrayList<Parameter<?>> parameters1 = new ArrayList<>();
			parameters1.add(new Parameter<Long>(customer.getId()));
			parameters1.add(new Parameter<String>(customer.getCustName()));

			ArrayList<Customer> customers = customerExecutor.execute(SQLOperations.SELECT, query1, parameters1);

			// Check if the customer name changed
			if (customers.isEmpty()) {

				// YES - Throw CustomerNameChangedException
				throw new CustomerNameChangedException("You can't change the Customer Name !");
			} else {

				// NO - Update customer
				String query2 = CustomerSQLQueries.UPDATE_CUSTOMER;
				ArrayList<Parameter<?>> parameters2 = new ArrayList<>();
				parameters2.add(new Parameter<String>(customer.getPassword()));
				parameters2.add(new Parameter<Long>(customer.getId()));

				customerExecutor.execute(SQLOperations.UPDATE, query2, parameters2);

				System.out.println(getCustomer(customer.getId()).getCustName() + " successfully updated");
			}
		} else {
			throw new CustomerNotFoundException("Customer [" + customer.getId() + "] not found");
		}
	}

	/**
	 * Get customer from the table Customer and the coupons of this customer
	 * from the tables Customer_Coupon, Coupon
	 * 
	 * @param id
	 *            long id of the customer
	 * @throws CustomerNotFoundException
	 * @return Customer customer of this id
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Customer
	 */

	@Override
	public Customer getCustomer(long id)
			throws CustomerNotFoundException, SystemShutdownException, InterruptedException, SQLException {

		// Check if the customer exists
		if (customerExists(id)) {

			// YES - Get customer
			String query = CustomerSQLQueries.SELECT_CUSTOMER_BY_ID;
			ArrayList<Parameter<?>> parameters = new ArrayList<>();
			parameters.add(new Parameter<Long>(id));

			return customerExecutor.execute(SQLOperations.SELECT, query, parameters).get(0);
		} else {

			// NO - Throw CustomerNotFoundException
			throw new CustomerNotFoundException("Customer [" + id + "] not found");
		}
	}

	/**
	 * Get all customers from the table Customer and the coupons of any customer
	 * from the tables Customer_Coupon, Coupon
	 * 
	 * @return ArrayList of all customers
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Customer
	 */

	@Override
	public ArrayList<Customer> getAllCustomers() throws SystemShutdownException, InterruptedException, SQLException {

		String query = CustomerSQLQueries.SELECT_ALL_CUSTOMERS;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();

		return customerExecutor.execute(SQLOperations.SELECT, query, parameters);
	}

	/**
	 * Get the coupons of the current customer from the tables Customer_Coupon,
	 * Coupon
	 * 
	 * @return ArrayList of the coupons of the current customer
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 */

	@Override
	public ArrayList<Coupon> getCoupons() throws SystemShutdownException, InterruptedException, SQLException {

		String query = CustomerSQLQueries.SELECT_COUPONS_BY_CUSTOMER_ID;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();
		parameters.add(new Parameter<Long>(idOfCustomerLoggedIn));

		return couponExecutor.execute(SQLOperations.SELECT, query, parameters);
	}

	/**
	 * Get the coupons by type of the current customer from the tables
	 * Customer_Coupon, Coupon
	 * 
	 * @param type
	 *            CouponType type of the coupon
	 * @return ArrayList of the coupons of the current customer by this type
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 * @see CouponType
	 */

	@Override
	public ArrayList<Coupon> getCouponsByType(CouponType type)
			throws SystemShutdownException, InterruptedException, SQLException {

		String query = CustomerSQLQueries.SELECT_COUPONS_BY_CUSTOMER_ID_AND_COUPON_TYPE;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();
		parameters.add(new Parameter<Long>(idOfCustomerLoggedIn));
		parameters.add(new Parameter<String>(type.name()));

		return couponExecutor.execute(SQLOperations.SELECT, query, parameters);
	}

	/**
	 * Get the coupons by price of the current customer from the tables
	 * Customer_Coupon, Coupon
	 * 
	 * @param price
	 *            float price of the coupon
	 * @return ArrayList of the coupons of the current customer by this price
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 */

	@Override
	public ArrayList<Coupon> getCouponsByPrice(float price)
			throws SystemShutdownException, InterruptedException, SQLException {

		String query = CustomerSQLQueries.SELECT_COUPONS_BY_CUSTOMER_ID_AND_COUPON_PRICE;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();
		parameters.add(new Parameter<Long>(idOfCustomerLoggedIn));
		parameters.add(new Parameter<Float>(price));

		return couponExecutor.execute(SQLOperations.SELECT, query, parameters);
	}

	/**
	 * Login to the system as a customer, search name and password in the table
	 * Customer
	 * 
	 * @param custName
	 *            String name of the customer
	 * @param password
	 *            String password of the customer
	 * @return boolean if the login is succeeded
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 */

	@Override
	public boolean login(String custName, String password)
			throws SystemShutdownException, InterruptedException, SQLException {

		String query = CustomerSQLQueries.SELECT_CUSTOMER_BY_NAME_AND_PASSWORD;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();
		parameters.add(new Parameter<String>(custName));
		parameters.add(new Parameter<String>(password));

		ArrayList<Customer> customers = customerExecutor.execute(SQLOperations.SELECT, query, parameters);

		// Try to Login
		if (customers.isEmpty()) {

			// Login failed
			return false;
		} else {

			// Login succeeded
			idOfCustomerLoggedIn = customers.get(0).getId();
			return true;
		}
	}

	private boolean customerExists(Long id) throws InterruptedException, SystemShutdownException, SQLException {
		String query = CustomerSQLQueries.SELECT_CUSTOMER_BY_ID;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();
		parameters.add(new Parameter<Long>(id));

		ArrayList<Customer> customers = customerExecutor.execute(SQLOperations.SELECT, query, parameters);

		return !customers.isEmpty();
	}
}
