package core;

import java.io.Serializable;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;

import DAO.ConnectionPool;
import DAO.CouponDBDAO;
import general.CouponNotFoundException;
import general.SystemShutdownException;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class DailyCouponExpirationTask implements Runnable, Serializable {
	private static final long serialVersionUID = 1L;

	private CouponDBDAO couponDBDAO;
	private static boolean quit = false;
	private Object key = new Object();

	/**
	 * Default public constructor <br>
	 * Create an instance to CouponDBDAO
	 */

	public DailyCouponExpirationTask() {
		try {
			couponDBDAO = new CouponDBDAO(ConnectionPool.getInstance());
		} catch (ClassNotFoundException | SQLException e) {
			System.out.println(e.getMessage());
		}
	}

	/**
	 * Give if the system is quit
	 * 
	 * @return boolean quit of the system
	 */

	public static boolean isQuit() {
		return quit;
	}

	/**
	 * Remove expired coupons everyday
	 */

	@Override
	public void run() {

		while (!quit) {
			synchronized (key) {
				try {
					ArrayList<Coupon> validCoupons = couponDBDAO.getAllValidCoupons();

					// Loop on all valid coupons
					for (Coupon coupon : validCoupons) {

						// Check if today is after current coupon end date
						if (new Date().after(coupon.getEndDate())) {

							// YES - Remove current coupon
							couponDBDAO.removeExpiredCoupon(coupon);
						}
					}

					// Wait one day
					key.wait(24 * 60 * 60 * 1000);
				} catch (CouponNotFoundException e) {
					System.out.println(e.getMessage());
				} catch (SystemShutdownException e) {
					System.out.println(e.getMessage());
				} catch (InterruptedException e) {
					System.out.println(e.getMessage());
				} catch (SQLException e) {
					System.out.println(e.getMessage());
				}
			}
		}
	}

	/**
	 * Stopping the removal of expired coupons and closes all connections
	 */

	public void stopTask() {

		quit = true;

		synchronized (key) {
			key.notify();
		}

		try {
			ConnectionPool.getInstance().closeAllConnections();
		} catch (ClassNotFoundException | SQLException | InterruptedException e) {
			System.out.println(e.getMessage());
		}
	}
}
