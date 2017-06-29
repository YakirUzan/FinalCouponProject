package DAO;

import java.io.Serializable;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 * 
 * @author Yakir Uzan
 *
 * @param <T>
 *            Type
 */

public class CouponIDExecutor<T> extends ExecutorBase<Long> implements Serializable { 
	private static final long serialVersionUID = 1L;

	/**
	 * Public constructor
	 * 
	 * @param pool
	 *            ConnectionPool pool of connections
	 * @see ConnectionPool
	 */

	public CouponIDExecutor(ConnectionPool pool) {
		super(pool);
	}

	/**
	 * Get couponsID from the tables Company_Coupon or Customer_Coupon
	 * 
	 * @return ArrayList of couponsID from the database
	 * @throws SQLException
	 */

	@Override
	protected ArrayList<Long> selectComponents() throws SQLException {

		// Coupons ID list
		ArrayList<Long> couponsID = new ArrayList<>();

		// Select coupons ID
		while (rs.next()) {

			// Current coupon ID
			Long id = rs.getLong(2);

			// Add current coupon ID to coupons ID list
			couponsID.add(id);
		}

		return couponsID;
	}

}
