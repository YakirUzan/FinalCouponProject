package DAO;

import java.io.Serializable;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

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

public class CouponDBDAO implements CouponDAO, Serializable {
	private static final long serialVersionUID = 1L;

	private CouponExecutor<Coupon> couponExecutor;
	private CouponIDExecutor<Long> couponIDExecutor;

	private long idOfCompanyLoggedIn;
	private long idOfCustomerLoggedIn;

	private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

	/**
	 * Public constructor <br>
	 * Create an instance to CouponExecutor <br>
	 * Create an instance to CouponIDExecutor
	 * 
	 * @param pool
	 *            ConnectionPool pool of connections
	 * @see ConnectionPool
	 * @see CouponExecutor
	 * @see CouponIDExecutor
	 */

	public CouponDBDAO(ConnectionPool pool) {
		super();
		couponExecutor = new CouponExecutor<>(pool);
		couponIDExecutor = new CouponIDExecutor<>(pool);
	}

	/**
	 * Get the id of company logged in and set this id of company logged in
	 * 
	 * @param idOfCompanyLoggedIn
	 *            long id of company logged in
	 */

	public void setIdOfCompanyLoggedIn(long idOfCompanyLoggedIn) {
		this.idOfCompanyLoggedIn = idOfCompanyLoggedIn;
	}

	/**
	 * Get the id of customer logged in and set this id of customer logged in
	 * 
	 * @param idOfCustomerLoggedIn
	 *            long id of customer logged in
	 */

	public void setIdOfCustomerLoggedIn(long idOfCustomerLoggedIn) {
		this.idOfCustomerLoggedIn = idOfCustomerLoggedIn;
	}

	/**
	 * Insert coupon to the table Coupon and insert the id of the company who
	 * created this coupon and the id of this coupon to the table Company_Coupon
	 * 
	 * @param coupon
	 *            Coupon coupon to create by the current company
	 * @throws CouponTitleExistsException
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 */

	@Override
	public void createCoupon(Coupon coupon)
			throws CouponTitleExistsException, SystemShutdownException, InterruptedException, SQLException {

		String query1 = CouponSQLQueries.SELECT_VALID_COUPON_BY_TITLE;
		ArrayList<Parameter<?>> parameters1 = new ArrayList<>();
		parameters1.add(new Parameter<String>(coupon.getTitle()));

		ArrayList<Coupon> coupons = couponExecutor.execute(SQLOperations.SELECT, query1, parameters1);

		// Check if coupon with the same title exists
		if (coupons.isEmpty()) {

			// NO - Create coupon
			String query2 = CouponSQLQueries.INSERT_NEW_COUPON;
			ArrayList<Parameter<?>> parameters2 = new ArrayList<>();
			parameters2.add(new Parameter<String>(coupon.getTitle()));
			parameters2.add(new Parameter<java.sql.Date>(java.sql.Date.valueOf(sdf.format(coupon.getStartDate()))));
			parameters2.add(new Parameter<java.sql.Date>(java.sql.Date.valueOf(sdf.format(coupon.getEndDate()))));
			parameters2.add(new Parameter<Integer>(coupon.getAmount()));
			parameters2.add(new Parameter<String>(coupon.getType().name()));
			parameters2.add(new Parameter<String>(coupon.getMessage()));
			parameters2.add(new Parameter<Float>(coupon.getPrice()));
			parameters2.add(new Parameter<String>(coupon.getImage()));

			// Add the id of the company at the last parameter (Look
			// CouponExecutor in INSERT case)
			parameters2.add(new Parameter<Long>(idOfCompanyLoggedIn));

			couponExecutor.execute(SQLOperations.INSERT, query2, parameters2);

			System.out.println(coupon.getTitle() + " successfully created");
		} else {

			// YES - Throw CouponTitleExistsException
			throw new CouponTitleExistsException(coupon.getTitle() + " already exists");
		}
	}

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
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 */

	@Override
	public void purchaseCoupon(Coupon coupon)
			throws CouponNotFoundException, CouponExpiredException, CustomerCouponPurchasedException,
			CouponOutOfStockException, SystemShutdownException, InterruptedException, SQLException {

		// Check if the coupon exists
		if (couponExists(coupon.getId())) {

			// YES - Check if the coupon is expired
			if (!couponExpired(coupon)) {

				// NO - Check if the user already purchased the coupon
				if (!userPurchasedCoupon(coupon)) {

					// NO - Check if the coupon is out of stock
					if (!couponOutOfStock(coupon)) {

						// NO - Purchase coupon
						String query = CouponSQLQueries.INSERT_NEW_CUSTOMER_COUPON;
						ArrayList<Parameter<?>> parameters = new ArrayList<>();
						parameters.add(new Parameter<Long>(idOfCustomerLoggedIn));
						parameters.add(new Parameter<Long>(coupon.getId()));

						couponIDExecutor.execute(SQLOperations.INSERT, query, parameters);

						System.out.println("You successfully purchased the coupon = " + coupon.getId());
					} else {

						// YES - Throw CouponOutOfStockException
						throw new CouponOutOfStockException(getCoupon(coupon.getId()).getTitle() + " is out of stock");
					}
				} else {

					// YES - Throw CustomerCouponPurchasedException
					throw new CustomerCouponPurchasedException(
							"You already purchased the coupon " + getCoupon(coupon.getId()).getTitle());
				}
			} else {

				// YES - Throw CouponExpiredException
				throw new CouponExpiredException(getCoupon(coupon.getId()).getTitle() + " is expired");
			}
		} else {

			// NO - Throw CouponNotFoundException
			throw new CouponNotFoundException("Coupon [" + coupon.getId() + "] not found");
		}
	}

	private boolean couponExpired(Coupon coupon)
			throws CouponNotFoundException, SystemShutdownException, InterruptedException, SQLException {
		return new Date().after(getCoupon(coupon.getId()).getEndDate());
	}

	private boolean userPurchasedCoupon(Coupon coupon)
			throws SQLException, InterruptedException, SystemShutdownException {

		String query = CustomerSQLQueries.SELECT_CUSTOMER_COUPONS_BY_CUSTOMER_ID_AND_COUPON_ID;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();
		parameters.add(new Parameter<Long>(idOfCustomerLoggedIn));
		parameters.add(new Parameter<Long>(coupon.getId()));

		ArrayList<Long> couponsID = couponIDExecutor.execute(SQLOperations.SELECT, query, parameters);

		return !couponsID.isEmpty();
	}

	private boolean couponOutOfStock(Coupon coupon)
			throws CouponNotFoundException, SQLException, InterruptedException, SystemShutdownException {

		String query = CustomerSQLQueries.SELECT_CUSTOMER_COUPONS_BY_COUPON_ID;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();
		parameters.add(new Parameter<Long>(coupon.getId()));

		ArrayList<Long> couponsID = couponIDExecutor.execute(SQLOperations.SELECT, query, parameters);

		return couponsID.size() >= getCoupon(coupon.getId()).getAmount();
	}

	/**
	 * Delete coupon from the table Coupon and delete the id of this coupon from
	 * the tables Company_Coupon and Customer_Coupon
	 * 
	 * @param coupon
	 *            Coupon coupon to remove by the current company
	 * @throws CouponNotFoundException
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 */

	@Override
	public void removeCoupon(Coupon coupon)
			throws CouponNotFoundException, SystemShutdownException, InterruptedException, SQLException {

		// Check if the coupon exists
		if (couponExists(coupon.getId())) {

			// YES - Remove coupon
			ArrayList<Parameter<?>> parameters = new ArrayList<>();
			parameters.add(new Parameter<Long>(coupon.getId()));

			String query1 = CouponSQLQueries.DELETE_COUPON;

			couponExecutor.execute(SQLOperations.DELETE, query1, parameters);

			String query2 = CouponSQLQueries.DELETE_COMPANY_COUPONS;

			couponExecutor.execute(SQLOperations.DELETE, query2, parameters);

			String query3 = CouponSQLQueries.DELETE_CUSTOMER_COUPONS;

			couponExecutor.execute(SQLOperations.DELETE, query3, parameters);

			System.out.println("Coupon [" + coupon.getId() + "] successfully removed");
		} else {

			// NO - Throw CouponNotFoundException
			throw new CouponNotFoundException("Coupon [" + coupon.getId() + "] not found");
		}
	}

	/**
	 * Delete the id of this coupon from the table Company_Coupon if the coupon
	 * is expired
	 * 
	 * @param coupon
	 *            Coupon expired coupon to remove by the system
	 * @throws CouponNotFoundException
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 */

	@Override
	public void removeExpiredCoupon(Coupon coupon)
			throws CouponNotFoundException, SystemShutdownException, InterruptedException, SQLException {

		// Check if the coupon exists
		if (couponExists(coupon.getId())) {

			// YES - Remove expired coupon
			String query = CouponSQLQueries.DELETE_COMPANY_COUPONS;
			ArrayList<Parameter<?>> parameters = new ArrayList<>();
			parameters.add(new Parameter<Long>(coupon.getId()));

			couponExecutor.execute(SQLOperations.DELETE, query, parameters);

			System.out.println("Coupon [" + coupon.getId() + "] successfully deleted");
		} else {

			// NO - Throw CouponNotFoundException
			throw new CouponNotFoundException("Coupon [" + coupon.getId() + "] not found");
		}
	}

	/**
	 * Update coupon in the table Coupon
	 * 
	 * @param coupon
	 *            Coupon coupon to update by the current company
	 * @throws CouponNotFoundException
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 */

	@Override
	public void updateCoupon(Coupon coupon)
			throws CouponNotFoundException, SystemShutdownException, InterruptedException, SQLException {

		// Check if the coupon exists
		if (couponExists(coupon.getId())) {

			// YES - Update coupon
			String query = CouponSQLQueries.UPDATE_COUPON;
			ArrayList<Parameter<?>> parameters = new ArrayList<>();
			parameters.add(new Parameter<java.sql.Date>(java.sql.Date.valueOf(sdf.format(coupon.getEndDate()))));
			parameters.add(new Parameter<Integer>(coupon.getAmount()));
			parameters.add(new Parameter<Float>(coupon.getPrice()));
			parameters.add(new Parameter<Long>(coupon.getId()));

			couponExecutor.execute(SQLOperations.UPDATE, query, parameters);

			System.out.println(getCoupon(coupon.getId()).getTitle() + " successfully updated");
		} else {

			// NO - Throw CouponNotFoundException
			throw new CouponNotFoundException("Coupon [" + coupon.getId() + "] not found");
		}
	}

	/**
	 * Get coupon from the table Coupon
	 * 
	 * @param id
	 *            long id of the coupon
	 * @return Coupon coupon of this id
	 * @throws CouponNotFoundException
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 */

	@Override
	public Coupon getCoupon(long id)
			throws CouponNotFoundException, SystemShutdownException, InterruptedException, SQLException {

		// Check if the coupon exists
		if (couponExists(id)) {

			// YES - Get coupon
			String query = CouponSQLQueries.SELECT_COUPON_BY_ID;
			ArrayList<Parameter<?>> parameters = new ArrayList<>();
			parameters.add(new Parameter<Long>(id));

			return couponExecutor.execute(SQLOperations.SELECT, query, parameters).get(0);
		} else {

			// NO - Throw CouponNotFoundException
			throw new CouponNotFoundException("Coupon [" + id + "] not found");
		}
	}

	/**
	 * Get all coupons from the table Coupon
	 * 
	 * @return ArrayList of all coupons
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 */

	@Override
	public ArrayList<Coupon> getAllCoupons() throws SystemShutdownException, InterruptedException, SQLException {

		String query = CouponSQLQueries.SELECT_ALL_COUPONS;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();

		return couponExecutor.execute(SQLOperations.SELECT, query, parameters);
	}

	/**
	 * Get valid coupons from the tables Coupon, Company_Coupon
	 * 
	 * @return ArrayList of all valid coupons
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 */

	@Override
	public ArrayList<Coupon> getAllValidCoupons() throws SystemShutdownException, InterruptedException, SQLException {

		String query = CouponSQLQueries.SELECT_ALL_VALID_COUPONS;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();

		return couponExecutor.execute(SQLOperations.SELECT, query, parameters);
	}

	/**
	 * Get the coupons by type from the table Coupon
	 * 
	 * @param type
	 *            CouponType type of the coupon
	 * @return ArrayList of the coupons by this type
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 * @see CouponType
	 */

	@Override
	public ArrayList<Coupon> getCouponsByType(CouponType type)
			throws SystemShutdownException, InterruptedException, SQLException {

		String query = CouponSQLQueries.SELECT_COUPONS_BY_TYPE;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();
		parameters.add(new Parameter<String>(type.name()));

		return couponExecutor.execute(SQLOperations.SELECT, query, parameters);
	}

	/**
	 * Get the valid coupons by type from the tables Coupon, Company_Coupon
	 * 
	 * @param type
	 *            CouponType type of the coupon
	 * @return ArrayList of the valid coupons by this type
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 * @see CouponType
	 */

	@Override
	public ArrayList<Coupon> getValidCouponsByType(CouponType type)
			throws SystemShutdownException, InterruptedException, SQLException {

		String query = CouponSQLQueries.SELECT_VALID_COUPONS_BY_TYPE;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();
		parameters.add(new Parameter<String>(type.name()));

		return couponExecutor.execute(SQLOperations.SELECT, query, parameters);
	}

	private boolean couponExists(long id) throws InterruptedException, SystemShutdownException, SQLException {
		String query = CouponSQLQueries.SELECT_COUPON_BY_ID;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();
		parameters.add(new Parameter<Long>(id));

		ArrayList<Coupon> coupons = couponExecutor.execute(SQLOperations.SELECT, query, parameters);

		return !coupons.isEmpty();
	}
}
