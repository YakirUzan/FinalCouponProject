package DAO;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import core.Coupon;
import general.CouponType;
import general.SystemShutdownException;

/**
 * 
 * @author Yakir Uzan
 *
 * @param <T>
 *            Type
 */

public abstract class ExecutorBase<T> implements Serializable {
	private static final long serialVersionUID = 1L;

	protected ConnectionPool pool;
	protected Connection connection;
	protected PreparedStatement ps;
	protected ResultSet rs;

	/**
	 * Public constructor
	 * 
	 * @param pool
	 *            ConnectionPool pool of connections
	 * @see ConnectionPool
	 */

	public ExecutorBase(ConnectionPool pool) {
		this.pool = pool;
	}

	/**
	 * Get connection from the pool of connections
	 * 
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @throws SQLException
	 */

	protected void getConnection() throws InterruptedException, SystemShutdownException, SQLException {
		connection = pool.getConnection();
	}

	/**
	 * Create prepared statement with the information that came to him
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

	protected void createPreparedStatement(SQLOperations operation, String query, ArrayList<Parameter<?>> parameters)
			throws SQLException {
		int i = 0;
		ps = connection.prepareStatement(query);
		while (i < parameters.size()) {
			ps.setObject(i + 1, parameters.get(i).getParameter());
			i++;
		}
	}

	/**
	 * Create result set with execute query to the prepared statement
	 * 
	 * @throws SQLException
	 */

	protected void createResultSet() throws SQLException {
		rs = ps.executeQuery();
	}

	/**
	 * Create update to the prepared statement by execute update
	 * 
	 * @throws SQLException
	 */

	protected void createUpdate() throws SQLException {
		ps.executeUpdate();
	}

	/**
	 * Get components<br>
	 * This method is abstract, the childern override this in a different ways
	 * 
	 * @return ArrayList of components from the database
	 * @throws SQLException
	 */

	protected abstract ArrayList<T> selectComponents() throws SQLException;

	/**
	 * Return connection to the pool of connections
	 * 
	 * @throws SQLException
	 */

	protected void returnConnection() throws SQLException {
		pool.returnConnection(connection);
	}

	/**
	 * Execute all the above methods in different way by the operation
	 * 
	 * @param operation
	 *            SQLOperations operation of what the client wants to do
	 * @param query
	 *            String query in SQL
	 * @param parameters
	 *            ArrayList parameters need to query
	 * @return ArrayList of components from the database
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @throws SQLException
	 * @see SQLOperations
	 * @see Parameter
	 */

	public ArrayList<T> execute(SQLOperations operation, String query, ArrayList<Parameter<?>> parameters)
			throws InterruptedException, SystemShutdownException, SQLException {

		ArrayList<T> components = new ArrayList<>();

		getConnection();
		createPreparedStatement(operation, query, parameters);

		switch (operation) {
		case SELECT:
			createResultSet();
			components = selectComponents();
			break;
		default:
			createUpdate();
			break;

		}
		returnConnection();

		return components;
	}

	/**
	 * Get coupon from the result set
	 * 
	 * @param rs
	 *            ResultSet rs of prepared statement
	 * @return Coupon coupon of this rs
	 * @throws SQLException
	 * @see Coupon
	 */

	protected Coupon getCoupon(ResultSet rs) throws SQLException {
		Coupon coupon = new Coupon();

		coupon.setId(rs.getLong(1));
		coupon.setTitle(rs.getString(2));
		coupon.setStartDate(rs.getDate(3));
		coupon.setEndDate(rs.getDate(4));
		coupon.setAmount(getCouponAmount(rs.getLong(1), rs.getInt(5)));
		coupon.setType(CouponType.valueOf(rs.getString(6)));
		coupon.setMessage(rs.getString(7));
		coupon.setPrice(rs.getFloat(8));
		coupon.setImage(rs.getString(9));

		return coupon;
	}

	private int getCouponAmount(long id, int amount) throws SQLException {
		int newAmount = amount;

		PreparedStatement ps = connection.prepareStatement(CustomerSQLQueries.SELECT_CUSTOMER_COUPONS_BY_COUPON_ID);
		ps.setLong(1, id);

		ResultSet rs = ps.executeQuery();

		while (rs.next()) {
			newAmount--;
		}

		return newAmount;
	}
}
