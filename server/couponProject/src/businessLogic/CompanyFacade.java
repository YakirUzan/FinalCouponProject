package businessLogic;

import java.io.Serializable;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;

import DAO.CompanyDBDAO;
import DAO.ConnectionPool;
import DAO.CouponDBDAO;
import core.Coupon;
import general.ClientType;
import general.CouponNotFoundException;
import general.CouponTitleExistsException;
import general.CouponType;
import general.SystemShutdownException;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CompanyFacade implements CouponClientFacade, Serializable {
	private static final long serialVersionUID = 1L;

	private CompanyDBDAO companyDBDAO;
	private CouponDBDAO couponDBDAO;

	/**
	 * <h3>Default public constructor</h3> Create an instance to CompanyDBDAO
	 * <br>
	 * Create an instance to CouponDBDAO
	 * 
	 * @throws SQLException
	 * @throws ClassNotFoundException
	 * 
	 * @see CompanyDBDAO
	 * @see CouponDBDAO
	 */

	public CompanyFacade() throws ClassNotFoundException, SQLException {
		companyDBDAO = new CompanyDBDAO(ConnectionPool.getInstance());
		couponDBDAO = new CouponDBDAO(ConnectionPool.getInstance());
	}

	/**
	 * <h3>Insert coupon to the table Coupon and insert the id of the company
	 * who created this coupon and the id of this coupon to the table
	 * Company_Coupon</h3> - Can't insert coupon if the title exists <br>
	 * - Can't insert coupon if the system shut down
	 * 
	 * @param coupon
	 *            Coupon coupon to create by the current company
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @throws CouponTitleExistsException
	 * @see Coupon
	 */

	public void createCoupon(Coupon coupon)
			throws CouponTitleExistsException, SystemShutdownException, InterruptedException, SQLException {
		couponDBDAO.createCoupon(coupon);
	}

	/**
	 * <h3>Delete coupon from the table Coupon and delete the id of this coupon
	 * from the tables Company_Coupon and Customer_Coupon</h3> - Can't delete
	 * coupon if the coupon NOT found <br>
	 * - Can't delete coupon if the system shut down
	 * 
	 * @param coupon
	 *            Coupon coupon to remove by the current company
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @throws CouponNotFoundException
	 * @see Coupon
	 */

	public void removeCoupon(Coupon coupon)
			throws CouponNotFoundException, SystemShutdownException, InterruptedException, SQLException {
		couponDBDAO.removeCoupon(coupon);
	}

	/**
	 * <h3>Update coupon in the table Coupon</h3> - Can't update coupon if the
	 * coupon NOT found <br>
	 * - Can update only the end date and the price <br>
	 * - Can't update coupon if the system shut down
	 * 
	 * @param coupon
	 *            Coupon coupon to update by the current company
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @throws CouponNotFoundException
	 * @see Coupon
	 */

	public void updateCoupon(Coupon coupon)
			throws CouponNotFoundException, SystemShutdownException, InterruptedException, SQLException {
		couponDBDAO.updateCoupon(coupon);
	}

	/**
	 * <h3>Get coupon from the table Coupon</h3> - Can't get coupon if the
	 * coupon NOT found <br>
	 * - Can't get coupon if the system shut down
	 * 
	 * @param id
	 *            long id of the coupon
	 * @return Coupon coupon of this id
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @throws CouponNotFoundException
	 * @see Coupon
	 */

	public Coupon getCoupon(long id)
			throws CouponNotFoundException, SystemShutdownException, InterruptedException, SQLException {
		return couponDBDAO.getCoupon(id);
	}

	/**
	 * <h3>Get the valid coupons of the current company from the tables
	 * Company_Coupon, Coupon</h3> - Can't get the coupons if the system shut
	 * down
	 * 
	 * @return ArrayList of the valid coupons of the current company
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @see Coupon
	 */

	public ArrayList<Coupon> getAllCoupons() throws SystemShutdownException, InterruptedException, SQLException {
		return companyDBDAO.getCoupons();
	}

	/**
	 * <h3>Get the valid coupons by type of the current company from the tables
	 * Company_Coupon, Coupon</h3> - Can't get the coupons if the system shut
	 * down
	 * 
	 * @param type
	 *            CouponType type of the coupon
	 * @return ArrayList of the valid coupons of the current company by this
	 *         type
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @see Coupon
	 * @see CouponType
	 */

	public ArrayList<Coupon> getCouponsByType(CouponType type)
			throws SystemShutdownException, InterruptedException, SQLException {
		return companyDBDAO.getCouponsByType(type);
	}

	/**
	 * <h3>Get the valid coupons by price of the current company from the tables
	 * Company_Coupon, Coupon</h3> - Can't get the coupons if the system shut
	 * down
	 * 
	 * @param price
	 *            float max price of coupons
	 * @return ArrayList of the valid coupons of the current company by this
	 *         price
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @see Coupon
	 */

	public ArrayList<Coupon> getCouponsByPrice(float price)
			throws SystemShutdownException, InterruptedException, SQLException {
		return companyDBDAO.getCouponsByPrice(price);
	}

	/**
	 * <h3>Get the valid coupons by end date of the current company from the
	 * tables Company_Coupon, Coupon</h3> - Can't get the coupons if the system
	 * shut down
	 * 
	 * @param date
	 *            Date max end date of coupons
	 * @return ArrayList of the valid coupons of the current company by this
	 *         date
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @see Coupon
	 */

	public ArrayList<Coupon> getCouponsByDate(Date date)
			throws SystemShutdownException, InterruptedException, SQLException {
		return companyDBDAO.getCouponsByDate(date);
	}

	/**
	 * <h3>Login to the system as a company, search name and password in the
	 * table Company</h3> - Can't login to the system if the system shut down
	 * 
	 * @param name
	 *            String name of the company
	 * @param password
	 *            String password of the company
	 * @param clientType
	 *            ClientType type = COMPANY
	 * @return CouponClientFacade facade of the company or null
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @see ClientType
	 * @see CouponClientFacade
	 */

	@Override
	public CouponClientFacade login(String name, String password, ClientType clientType)
			throws SystemShutdownException, InterruptedException, SQLException {

		// Try to login
		if (companyDBDAO.login(name, password)) {

			// Login succeeded
			couponDBDAO.setIdOfCompanyLoggedIn(companyDBDAO.getIdOfCompanyLoggedIn());

			System.out.println("Login succeeded");
			return this;
		} else {

			// Login failed
			System.out.println("Login failed");
			return null;
		}
	}

}
