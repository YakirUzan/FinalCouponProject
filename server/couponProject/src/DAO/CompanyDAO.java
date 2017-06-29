package DAO;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;

import core.Company;
import core.Coupon;
import general.CompanyNameChangedException;
import general.CompanyNameExistsException;
import general.CompanyNotFoundException;
import general.CouponType;
import general.SystemShutdownException;

/**
 * 
 * @author Yakir Uzan
 *
 */

public interface CompanyDAO {

	/**
	 * Insert company to the table Company
	 * 
	 * @param company
	 *            Company company to create
	 * @throws CompanyNameExistsException
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Company
	 */

	public void createCompany(Company company)
			throws CompanyNameExistsException, SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Delete company from the table Company and delete all of the valid coupons
	 * of this company from the tables Coupon, Company_Coupon and
	 * Customer_Coupon
	 * 
	 * @param company
	 *            Company company to remove
	 * @throws CompanyNotFoundException
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Company
	 */

	public void removeCompany(Company company)
			throws CompanyNotFoundException, SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Update company in the table Company
	 * 
	 * @param company
	 *            Company company to update
	 * @throws CompanyNotFoundException
	 * @throws CompanyNameChangedException
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Company
	 */

	public void updateCompany(Company company) throws CompanyNotFoundException, CompanyNameChangedException,
			SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Get company from the table Company and the valid coupons of this company
	 * from the tables Company_Coupon, Coupon
	 * 
	 * @param id
	 *            long id of the company
	 * @return Company company of this id
	 * @throws CompanyNotFoundException
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Company
	 */

	public Company getCompany(long id)
			throws CompanyNotFoundException, SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Get all companies from the table Company and the valid coupons of any
	 * company from the tables Company_Coupon, Coupon
	 * 
	 * @return ArrayList of all companies
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Company
	 */

	public ArrayList<Company> getAllCompanies() throws SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Get the valid coupons of the current company from the tables
	 * Company_Coupon, Coupon
	 * 
	 * @return ArrayList of the valid coupons of the current company
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 */

	public ArrayList<Coupon> getCoupons() throws SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Get the valid coupons by type of the current company from the tables
	 * Company_Coupon, Coupon
	 * 
	 * @param type
	 *            CouponType type of the coupon
	 * @return ArrayList of the valid coupons of the current company by this
	 *         type
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 * @see CouponType
	 */

	public ArrayList<Coupon> getCouponsByType(CouponType type)
			throws SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Get the valid coupons by price of the current company from the tables
	 * Company_Coupon, Coupon
	 * 
	 * @param price
	 *            float max price of coupons
	 * @return ArrayList of the valid coupons of the current company by this
	 *         price
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 */

	public ArrayList<Coupon> getCouponsByPrice(float price)
			throws SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Get the valid coupons by end date of the current company from the tables
	 * Company_Coupon, Coupon
	 * 
	 * @param date
	 *            Date max end date of coupons
	 * @return ArrayList of the valid coupons of the current company by this
	 *         date
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 */

	public ArrayList<Coupon> getCouponsByDate(Date date)
			throws SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Login to the system as a company, search name and password in the table
	 * Company
	 * 
	 * @param compName
	 *            String name of the company
	 * @param password
	 *            String password of the company
	 * @return boolean if the login is succeeded
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 */

	public boolean login(String compName, String password)
			throws SystemShutdownException, InterruptedException, SQLException;

}
