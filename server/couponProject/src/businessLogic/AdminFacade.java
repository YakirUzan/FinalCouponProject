package businessLogic;

import java.io.Serializable;
import java.sql.SQLException;
import java.util.ArrayList;

import DAO.CompanyDBDAO;
import DAO.ConnectionPool;
import DAO.CouponDBDAO;
import DAO.CustomerDBDAO;
import core.Admin;
import core.Company;
import core.Coupon;
import core.Customer;
import general.ClientType;
import general.CompanyNameChangedException;
import general.CompanyNameExistsException;
import general.CompanyNotFoundException;
import general.CustomerNameExistsException;
import general.CustomerNotFoundException;
import general.CustomerNameChangedException;
import general.SystemShutdownException;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class AdminFacade implements CouponClientFacade, Serializable {
	private static final long serialVersionUID = 1L;

	private CompanyDBDAO companyDBDAO;
	private CustomerDBDAO customerDBDAO;
	private CouponDBDAO couponDBDAO;

	/**
	 * <h3>Default public constructor</h3> Create an instance to CompanyDBDAO
	 * <br>
	 * Create an instance to CustomerDBDAO
	 * 
	 * @throws SQLException
	 * @throws ClassNotFoundException
	 * 
	 * @see CompanyDBDAO
	 * @see CustomerDBDAO
	 */

	public AdminFacade() throws ClassNotFoundException, SQLException {
		companyDBDAO = new CompanyDBDAO(ConnectionPool.getInstance());
		customerDBDAO = new CustomerDBDAO(ConnectionPool.getInstance());
		couponDBDAO = new CouponDBDAO(ConnectionPool.getInstance());
	}

	/**
	 * <h3>Insert company to the table Company</h3> - Can't insert company if
	 * the name exists <br>
	 * - Can't insert company if the system shut down
	 * 
	 * @param company
	 *            Company company to create
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @throws CompanyNameExistsException
	 * @see Company
	 */

	public void createCompany(Company company)
			throws CompanyNameExistsException, SystemShutdownException, InterruptedException, SQLException {
		companyDBDAO.createCompany(company);
	}

	/**
	 * <h3>Delete company from the table Company and delete all of the valid
	 * coupons of this company from the tables Coupon, Company_Coupon and
	 * Customer_Coupon</h3> - Can't delete company if the company NOT found <br>
	 * - Can't delete company if the system shut down
	 * 
	 * @param company
	 *            Company company to remove
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @throws CompanyNotFoundException
	 * @see Company
	 */

	public void removeCompany(Company company)
			throws CompanyNotFoundException, SystemShutdownException, InterruptedException, SQLException {

		companyDBDAO.removeCompany(company);
	}

	/**
	 * <h3>Update company in the table Company</h3> - Can't update company if
	 * the company NOT found <br>
	 * - Can't update company if the name changed <br>
	 * - Can't update company if the system shut down
	 * 
	 * @param company
	 *            Company company to update
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @throws CompanyNameChangedException
	 * @throws CompanyNotFoundException
	 * @see Company
	 */

	public void updateCompany(Company company) throws CompanyNotFoundException, CompanyNameChangedException,
			SystemShutdownException, InterruptedException, SQLException {
		companyDBDAO.updateCompany(company);
	}

	/**
	 * <h3>Get company from the table Company and the valid coupons of this
	 * company from the tables Company_Coupon, Coupon</h3> - Can't get company
	 * if the company NOT found <br>
	 * - Can't get company if the system shut down
	 * 
	 * @param id
	 *            long id of the company
	 * @return Company company of this id
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @throws CompanyNotFoundException
	 * @see Company
	 */

	public Company getCompany(long id)
			throws CompanyNotFoundException, SystemShutdownException, InterruptedException, SQLException {
		return companyDBDAO.getCompany(id);
	}

	/**
	 * <h3>Get all companies from the table Company and the valid coupons of any
	 * company from the tables Company_Coupon, Coupon</h3> - Can't get all
	 * companies if the system shut down
	 * 
	 * @return ArrayList of all companies
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @see Company
	 */

	public ArrayList<Company> getAllCompnies() throws SystemShutdownException, InterruptedException, SQLException {
		return companyDBDAO.getAllCompanies();
	}

	/**
	 * <h3>Insert customer to the table Customer</h3> - Can't insert customer if
	 * the name exists <br>
	 * - Can't insert customer if the system shut down
	 * 
	 * @param customer
	 *            Customer customer to create
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @throws CustomerNameExistsException
	 * @see Customer
	 */

	public void createCustomer(Customer customer)
			throws CustomerNameExistsException, SystemShutdownException, InterruptedException, SQLException {
		customerDBDAO.createCustomer(customer);
	}

	/**
	 * <h3>Delete customer from the table Customer and delete all of the coupons
	 * of this customer from the table Customer_Coupon</h3> - Can't delete
	 * customer if the customer NOT found <br>
	 * - Can't delete customer if the system shut down
	 * 
	 * @param customer
	 *            Customer customer to remove
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @throws CustomerNotFoundException
	 * @see Customer
	 */

	public void removeCustomer(Customer customer)
			throws CustomerNotFoundException, SystemShutdownException, InterruptedException, SQLException {
		customerDBDAO.removeCustomer(customer);
	}

	/**
	 * <h3>Update customer in the table Customer</h3> - Can't update customer if
	 * the customer NOT found <br>
	 * - Can't update customer if the name changed <br>
	 * - Can't update customer if the system shut down
	 * 
	 * @param customer
	 *            Customer customer to update
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @throws CustomerNameChangedException
	 * @throws CustomerNotFoundException
	 * @see Customer
	 */

	public void updateCustomer(Customer customer) throws CustomerNotFoundException, CustomerNameChangedException,
			SystemShutdownException, InterruptedException, SQLException {
		customerDBDAO.updateCustomer(customer);
	}

	/**
	 * <h3>Get customer from the table Customer and the coupons of this customer
	 * from the tables Customer_Coupon, Coupon</h3> - Can't get customer if the
	 * customer NOT found <br>
	 * - Can't get customer if the system shut down
	 * 
	 * @param id
	 *            long id of the customer
	 * @return Customer customer of this id
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @throws CustomerNotFoundException
	 * @see Customer
	 */

	public Customer getCustomer(long id)
			throws CustomerNotFoundException, SystemShutdownException, InterruptedException, SQLException {
		return customerDBDAO.getCustomer(id);
	}

	/**
	 * <h3>Get all customers from the table Customer and the coupons of any
	 * customer from the tables Customer_Coupon, Coupon</h3> - Can't get all
	 * customers if the system shut down
	 * 
	 * @return ArrayList of all customers
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @see Customer
	 */

	public ArrayList<Customer> getAllCustomers() throws SystemShutdownException, InterruptedException, SQLException {
		return customerDBDAO.getAllCustomers();
	}

	/**
	 * <h3>Get all coupons from the table Coupon</h3> - Can't get all coupons if
	 * the system shut down
	 * 
	 * @return ArrayList of all coupons
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @see Coupon
	 */

	public ArrayList<Coupon> getAllCoupons() throws SystemShutdownException, InterruptedException, SQLException {
		return couponDBDAO.getAllCoupons();
	}

	/**
	 * <h3>Get valid coupons from the tables Coupon, Company_Coupon</h3> - Can't
	 * get valid coupons if the system shut down
	 * 
	 * @return ArrayList of all valid coupons
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @see Coupon
	 */

	public ArrayList<Coupon> getAllValidCoupons() throws SystemShutdownException, InterruptedException, SQLException {
		return couponDBDAO.getAllValidCoupons();
	}

	/**
	 * <h3>Login to the system as an admin, check the name and the password</h3>
	 * 
	 * @param name
	 *            String name of the admin
	 * @param password
	 *            String password of the admin
	 * @param clientType
	 *            ClientType type = ADMIN
	 * @return CouponClientFacade facade of the admin or null
	 * @see ClientType
	 * @see CouponClientFacade
	 */

	@Override
	public CouponClientFacade login(String name, String password, ClientType clientType) {

		// Try to login

		if (name.equals(Admin.NAME) && password.equals(Admin.PASSWORD)) {

			// Login succeeded

			System.out.println("Login succeeded");
			return this;
		}

		// Login failed

		System.out.println("Login failed");
		return null;
	}

}
