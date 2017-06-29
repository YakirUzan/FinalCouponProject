package DAO;

import java.io.Serializable;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import core.Coupon;
import core.Customer;

/**
 * 
 * @author Yakir Uzan
 *
 * @param <T>
 *            Type
 */

public class CustomerExecutor<T> extends ExecutorBase<Customer> implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * Public constructor
	 * 
	 * @param pool
	 *            ConnectionPool pool of connections
	 * @see ConnectionPool
	 */

	public CustomerExecutor(ConnectionPool pool) {
		super(pool);
	}

	/**
	 * Get customers from the table Customer (and the customers coupons from the
	 * tables Customer_Coupon and Coupon)
	 * 
	 * @return ArrayList of customers from the database
	 * @throws SQLException
	 * @see Customer
	 * @see Coupon
	 * @see CustomerSQLQueries
	 */

	@Override
	protected ArrayList<Customer> selectComponents() throws SQLException {

		// Customers list
		ArrayList<Customer> customers = new ArrayList<>();

		// Select customers
		while (rs.next()) {

			// Current customer
			Customer customer = new Customer();

			// Current customer coupons list
			ArrayList<Coupon> coupons = new ArrayList<>();

			// Set customer details
			customer.setId(rs.getLong(1));
			customer.setCustName(rs.getString(2));
			customer.setPassword(rs.getString(3));

			PreparedStatement ps = connection.prepareStatement(CustomerSQLQueries.SELECT_COUPONS_BY_CUSTOMER_ID);
			ps.setLong(1, customer.getId());

			ResultSet rs1 = ps.executeQuery();

			// Select current customer coupons
			while (rs1.next()) {

				// Current coupon
				Coupon coupon = getCoupon(rs1);

				// Add current coupon to current customer coupons list
				coupons.add(coupon);
			}

			// Set current customer coupons
			customer.setCoupons(coupons);

			// Add current customer to customers list
			customers.add(customer);
		}

		return customers;
	}
}
