package DAO;

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

public interface CustomerDAO {

	/**
	 * Insert customer to the table Customer
	 * 
	 * @param customer
	 *            Customer customer to create
	 * @throws CustomerNameExistsException
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Customer
	 */

	public void createCustomer(Customer customer)
			throws CustomerNameExistsException, SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Delete customer from the table Customer and delete all of the coupons of
	 * this customer from the table Customer_Coupon
	 * 
	 * @param customer
	 *            Customer customer to remove
	 * @throws CustomerNotFoundException
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Customer
	 */

	public void removeCustomer(Customer customer)
			throws CustomerNotFoundException, SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Update customer in the table Customer
	 * 
	 * @param customer
	 *            Customer customer to update
	 * @throws CustomerNotFoundException
	 * @throws CustomerNameChangedException
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Customer
	 */

	public void updateCustomer(Customer customer) throws CustomerNotFoundException, CustomerNameChangedException,
			SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Get customer from the table Customer and the coupons of this customer
	 * from the tables Customer_Coupon, Coupon
	 * 
	 * @param id
	 *            long id of the customer
	 * @return Customer customer of this id
	 * @throws CustomerNotFoundException
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Customer
	 */

	public Customer getCustomer(long id)
			throws CustomerNotFoundException, SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Get all customers from the table Customer and the coupons of any customer
	 * from the tables Customer_Coupon, Coupon
	 * 
	 * @return ArrayList of all customers
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Customer
	 */

	public ArrayList<Customer> getAllCustomers() throws SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Get the coupons of the current customer from the tables Customer_Coupon,
	 * Coupon
	 * 
	 * @return ArrayList of the coupons of the current customer
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 */

	public ArrayList<Coupon> getCoupons() throws SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Get the coupons by type of the current customer from the tables
	 * Customer_Coupon, Coupon
	 * 
	 * @param type
	 *            CouponType type of the coupon
	 * @return ArrayList of the coupons of the current customer by this type
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 * @see CouponType
	 */

	public ArrayList<Coupon> getCouponsByType(CouponType type)
			throws SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Get the coupons by price of the current customer from the tables
	 * Customer_Coupon, Coupon
	 * 
	 * @param price
	 *            float price of the coupon
	 * @return ArrayList of the coupons of the current customer by this price
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 */

	public ArrayList<Coupon> getCouponsByPrice(float price)
			throws SystemShutdownException, InterruptedException, SQLException;

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
	 * @throws SQLException
	 * @throws InterruptedException
	 */

	public boolean login(String custName, String password)
			throws SystemShutdownException, InterruptedException, SQLException;

}
