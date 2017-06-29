package DAO;

import java.sql.SQLException;
import java.util.ArrayList;

import core.Coupon;
import general.CouponExpiredException;
import general.CouponNotFoundException;
import general.CouponOutOfStockException;
import general.CouponTitleExistsException;
import general.CouponType;
import general.CustomerCouponPurchasedException;
import general.SystemShutdownException;

/**
 * 
 * @author Yakir Uzan
 *
 */

public interface CouponDAO {

	/**
	 * Insert coupon to the table Coupon and insert the id of the company who
	 * created this coupon and the id of this coupon to the table Company_Coupon
	 * 
	 * @param coupon
	 *            Coupon coupon to create by the current company
	 * @throws CouponTitleExistsException
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 */

	public void createCoupon(Coupon coupon)
			throws CouponTitleExistsException, SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Insert the id of the customer who purchased this coupon and the id of
	 * this coupon to the table Customer_Coupon
	 * 
	 * @param coupon
	 *            Coupon coupon to purchase by the current customer
	 * @throws CouponNotFoundException
	 * @throws CouponExpiredException
	 * @throws CustomerCouponPurchasedException
	 * @throws CouponOutOfStockException
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 */

	public void purchaseCoupon(Coupon coupon)
			throws CouponNotFoundException, CouponExpiredException, CustomerCouponPurchasedException,
			CouponOutOfStockException, SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Delete coupon from the table Coupon and delete the id of this coupon from
	 * the tables Company_Coupon and Customer_Coupon
	 * 
	 * @param coupon
	 *            Coupon coupon to remove by the current company
	 * @throws CouponNotFoundException
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 */

	public void removeCoupon(Coupon coupon)
			throws CouponNotFoundException, SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Delete the id of this coupon from the table Company_Coupon if the coupon
	 * is expired
	 * 
	 * @param coupon
	 *            Coupon expired coupon to remove by the system
	 * @throws CouponNotFoundException
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 */

	public void removeExpiredCoupon(Coupon coupon)
			throws CouponNotFoundException, SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Update coupon in the table Coupon
	 * 
	 * @param coupon
	 *            Coupon coupon to update by the current company
	 * @throws CouponNotFoundException
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 */

	public void updateCoupon(Coupon coupon)
			throws CouponNotFoundException, SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Get coupon from the table Coupon
	 * 
	 * @param id
	 *            long id of the coupon
	 * @return Coupon coupon of this id
	 * @throws CouponNotFoundException
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 */

	public Coupon getCoupon(long id)
			throws CouponNotFoundException, SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Get all coupons from the table Coupon
	 * 
	 * @return ArrayList of all coupons
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 */

	public ArrayList<Coupon> getAllCoupons() throws SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Get valid coupons from the tables Coupon, Company_Coupon
	 * 
	 * @return ArrayList of all valid coupons
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 */

	public ArrayList<Coupon> getAllValidCoupons() throws SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Get the coupons by type from the table Coupon
	 * 
	 * @param type
	 *            CouponType type of the coupon
	 * @return ArrayList of the coupons by this type
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 * @see CouponType
	 */

	public ArrayList<Coupon> getCouponsByType(CouponType type)
			throws SystemShutdownException, InterruptedException, SQLException;

	/**
	 * Get the valid coupons by type from the tables Coupon, Company_Coupon
	 * 
	 * @param type
	 *            CouponType type of the coupon
	 * @return ArrayList of the valid coupons by this type
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @throws InterruptedException
	 * @see Coupon
	 * @see CouponType
	 */

	public ArrayList<Coupon> getValidCouponsByType(CouponType type)
			throws SystemShutdownException, InterruptedException, SQLException;

}
