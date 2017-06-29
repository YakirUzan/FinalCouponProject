package DAO;

import java.io.Serializable;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import core.Coupon;

/**
 * 
 * @author Yakir Uzan
 *
 * @param <T>
 *            Type
 */

public class CouponExecutor<T> extends ExecutorBase<Coupon> implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private boolean isInsert = false;
	private long idCompany = 0;

	/**
	 * Public constructor
	 * 
	 * @param pool
	 *            ConnectionPool pool of connections
	 * @see ConnectionPool
	 */

	public CouponExecutor(ConnectionPool pool) {
		super(pool);
	}

	/**
	 * Override the create prepared statement<br>
	 * If the operation is INSERT we need to save the id of the company and
	 * return the generated keys
	 * 
	 * @param operation
	 *            SQLOperations operation of what the client wants to do
	 * @param query
	 *            String query in SQL
	 * @param parameters
	 *            ArrayList parameters to put in the Prepared Statement
	 * @throws SQLException
	 * @see SQLOperations
	 * @see Parameter
	 */

	@Override
	protected void createPreparedStatement(SQLOperations operation, String query, ArrayList<Parameter<?>> parameters)
			throws SQLException {

		if (operation == SQLOperations.INSERT) {

			// Set the isInsert to true for the next method (createUpdate)
			isInsert = true;

			int i = 0;
			ps = connection.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
			while (i < parameters.size() - 1) {
				ps.setObject(i + 1, parameters.get(i).getParameter());
				i++;
			}

			// Set the idCompany who created the coupon (the id of the company
			// is the last parameter)
			idCompany = (Long) parameters.get(i).getParameter();
		} else {
			super.createPreparedStatement(operation, query, parameters);
		}
	}

	/**
	 * Override the create update<br>
	 * If the operation is INSERT we need to insert to the tables Coupon and
	 * Company_Coupon
	 * 
	 * @throws SQLException
	 * @see CouponSQLQueries
	 */

	@Override
	protected void createUpdate() throws SQLException {
		super.createUpdate();

		if (isInsert) {

			// Get the id of the coupon created
			rs = ps.getGeneratedKeys();

			long id = 0;
			if (rs.next()) {
				id = rs.getLong(1);
			}

			// Insert the idCompany and the id of the coupon to the table
			// Company_Coupon
			ps = connection.prepareStatement(CouponSQLQueries.INSERT_NEW_COMPANY_COUPON);
			ps.setLong(1, idCompany);
			ps.setLong(2, id);

			ps.executeUpdate();

			// Set the isInsert to false for the next methods
			isInsert = false;
		}
	}

	/**
	 * Get coupons from the table Coupon
	 * 
	 * @return ArrayList of coupons from the database
	 * @throws SQLException
	 * @see Coupon
	 */

	@Override
	protected ArrayList<Coupon> selectComponents() throws SQLException {

		// Coupons list
		ArrayList<Coupon> coupons = new ArrayList<>();

		// Select coupons
		while (rs.next()) {

			// Current coupon
			Coupon coupon = getCoupon(rs);

			// Add current coupon to coupons list
			coupons.add(coupon);
		}

		return coupons;
	}
}
