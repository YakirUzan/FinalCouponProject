package businessLogic;

import java.io.Serializable;
import java.sql.SQLException;
import java.util.ArrayList;

import DAO.ConnectionPool;
import DAO.CouponDBDAO;
import DAO.CustomerDBDAO;
import core.Coupon;
import general.ClientType;
import general.CouponExpiredException;
import general.CouponNotFoundException;
import general.CouponOutOfStockException;
import general.CouponType;
import general.CustomerCouponPurchasedException;
import general.SystemShutdownException;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CustomerFacade implements CouponClientFacade, Serializable {
	private static final long serialVersionUID = 1L;

	private CustomerDBDAO customerDBDAO;
	private CouponDBDAO couponDBDAO;

	/**
	 * <h3>Default public constructor</h3> Create an instance to CustomerDBDAO
	 * <br>
	 * Create an instance to CouponDBDAO
	 * 
	 * @throws SQLException
	 * @throws ClassNotFoundException
	 * 
	 * @see CustomerDBDAO
	 * @see CouponDBDAO
	 */

	public CustomerFacade() throws ClassNotFoundException, SQLException {
		customerDBDAO = new CustomerDBDAO(ConnectionPool.getInstance());
		couponDBDAO = new CouponDBDAO(ConnectionPool.getInstance());

	}

	/**
	 * <h3>Insert the id of the customer who purchased this coupon and the id of
	 * this coupon to the table Customer_Coupon</h3> - Can't purchase coupon if
	 * the coupon NOT found <br>
	 * - Can't purchase coupon if the coupon expired <br>
	 * - Can't purchase coupon if the current customer already purchased the
	 * coupon <br>
	 * - Can't purchase coupon if the coupon out of stock <br>
	 * - Can't purchase coupon if the system shut down
	 * 
	 * @param coupon
	 *            Coupon coupon to purchase by the current customer
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @throws CouponOutOfStockException
	 * @throws CustomerCouponPurchasedException
	 * @throws CouponExpiredException
	 * @throws CouponNotFoundException
	 * @see Coupon
	 */

	public void purchaseCoupon(Coupon coupon)
			throws CouponNotFoundException, CouponExpiredException, CustomerCouponPurchasedException,
			CouponOutOfStockException, SystemShutdownException, InterruptedException, SQLException {
		couponDBDAO.purchaseCoupon(coupon);
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
	 * <h3>Get the coupons of the current customer from the tables
	 * Customer_Coupon, Coupon</h3> - Can't get purchased coupons if the system
	 * shut down
	 * 
	 * @return ArrayList of the coupons of the current customer
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @see Coupon
	 */

	public ArrayList<Coupon> getAllPurchasedCoupons()
			throws SystemShutdownException, InterruptedException, SQLException {
		return customerDBDAO.getCoupons();
	}

	/**
	 * <h3>Get the coupons by type of the current customer from the tables
	 * Customer_Coupon, Coupon</h3> - Can't get purchased coupons if the system
	 * shut down
	 * 
	 * @param type
	 *            CouponType type of the coupon
	 * @return ArrayList of the coupons of the current customer by this type
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @see Coupon
	 * @see CouponType
	 */

	public ArrayList<Coupon> getPurchasedCouponsByType(CouponType type)
			throws SystemShutdownException, InterruptedException, SQLException {
		return customerDBDAO.getCouponsByType(type);
	}

	/**
	 * <h3>Get the coupons by price of the current customer from the tables
	 * Customer_Coupon, Coupon</h3> - Can't get purchased coupons if the system
	 * shut down
	 * 
	 * @param price
	 *            float price of the coupon
	 * @return ArrayList of the coupons of the current customer by this price
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @see Coupon
	 */

	public ArrayList<Coupon> getPurchasedCouponsByPrice(float price)
			throws SystemShutdownException, InterruptedException, SQLException {
		return customerDBDAO.getCouponsByPrice(price);
	}

	/**
	 * <h3>Login to the system as a customer, search name and password in the
	 * table Customer</h3> - Can't login to the system if the system shut down
	 * 
	 * @param name
	 *            String name of the customer
	 * @param password
	 *            String password of the customer
	 * @param clientType
	 *            ClientType type = CUSTOMER
	 * @return CouponClientFacade facade of the customer or null
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
		if (customerDBDAO.login(name, password)) {

			// Login succeeded
			couponDBDAO.setIdOfCustomerLoggedIn(customerDBDAO.getIdOfCustomerLoggedIn());

			System.out.println("Login succeeded");
			return this;
		} else {

			// Login failed
			System.out.println("Login failed");
			return null;
		}
	}

}
