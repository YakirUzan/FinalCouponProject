package DAO;

import java.io.Serializable;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import core.Company;
import core.Coupon;

/**
 * 
 * @author Yakir Uzan
 *
 * @param <T>
 *            Type
 */

public class CompanyExecutor<T> extends ExecutorBase<Company> implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * Public constructor
	 * 
	 * @param pool
	 *            ConnectionPool pool of connections
	 * @see ConnectionPool
	 */

	public CompanyExecutor(ConnectionPool pool) {
		super(pool);
	}

	/**
	 * Get companies from the table Company (and the companies coupons from the
	 * tables Company_Coupon and Coupon)
	 * 
	 * @return ArrayList of companies from the database
	 * @throws SQLException
	 * @see Company
	 * @see Coupon
	 * @see CompanySQLQueries
	 */

	@Override
	protected ArrayList<Company> selectComponents() throws SQLException {

		// Companies list
		ArrayList<Company> companies = new ArrayList<>();

		// Select companies
		while (rs.next()) {

			// Current company
			Company company = new Company();

			// Current company coupons list
			ArrayList<Coupon> coupons = new ArrayList<>();

			// Set company details
			company.setId(rs.getLong(1));
			company.setCompName(rs.getString(2));
			company.setPassword(rs.getString(3));
			company.setEmail(rs.getString(4));

			PreparedStatement ps = connection.prepareStatement(CompanySQLQueries.SELECT_COUPONS_BY_COMPANY_ID);
			ps.setLong(1, rs.getLong(1));

			ResultSet rs1 = ps.executeQuery();

			// Select current company coupons
			while (rs1.next()) {

				// Current coupon
				Coupon coupon = getCoupon(rs1);

				// Add current coupon to current company coupons list
				coupons.add(coupon);
			}

			// Set current company coupons
			company.setCoupons(coupons);

			// Add current company to companies list
			companies.add(company);
		}

		return companies;
	}
}
