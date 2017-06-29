package DAO;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CouponSQLQueries implements Serializable {
	private static final long serialVersionUID = 1L;

	// INSERT

	public static final String INSERT_NEW_COUPON = "INSERT INTO " + CouponTableDB.TABLE_NAME
			+ " VALUES ( ? , ? , ? , ? , ? , ? , ? , ? )";

	public static final String INSERT_NEW_COMPANY_COUPON = "INSERT INTO " + CompanyCouponTableDB.TABLE_NAME
			+ " VALUES ( ? , ? )";

	public static final String INSERT_NEW_CUSTOMER_COUPON = "INSERT INTO " + CustomerCouponTableDB.TABLE_NAME
			+ " VALUES ( ? , ? )";

	// DELETE

	public static final String DELETE_COUPON = "DELETE FROM " + CouponTableDB.TABLE_NAME + " WHERE "
			+ CouponTableDB.COLUMN_ID + " = ?";

	public static final String DELETE_COMPANY_COUPONS = "DELETE FROM " + CompanyCouponTableDB.TABLE_NAME + " WHERE "
			+ CompanyCouponTableDB.COLUMN_COUPON_ID + " = ?";

	public static final String DELETE_CUSTOMER_COUPONS = "DELETE FROM " + CustomerCouponTableDB.TABLE_NAME + " WHERE "
			+ CustomerCouponTableDB.COLUMN_COUPON_ID + " = ?";

	// UPDATE

	public static final String UPDATE_COUPON = "UPDATE " + CouponTableDB.TABLE_NAME + " SET "
			+ CouponTableDB.COLUMN_END_DATE + " = ? , " + CouponTableDB.COLUMN_AMOUNT + " = ? , " + CouponTableDB.COLUMN_PRICE + " = ? WHERE "
			+ CouponTableDB.COLUMN_ID + " = ?";

	// SELECT

	public static final String SELECT_COUPON_BY_ID = "SELECT * FROM " + CouponTableDB.TABLE_NAME + " WHERE "
			+ CouponTableDB.COLUMN_ID + " = ?";

	public static final String SELECT_ALL_COUPONS = "SELECT * FROM " + CouponTableDB.TABLE_NAME;

	public static final String SELECT_ALL_VALID_COUPONS = "SELECT * FROM " + CouponTableDB.TABLE_NAME + " WHERE "
			+ CouponTableDB.COLUMN_ID + " IN (SELECT " + CompanyCouponTableDB.COLUMN_COUPON_ID + " FROM "
			+ CompanyCouponTableDB.TABLE_NAME + ")";

	public static final String SELECT_COUPONS_BY_TYPE = "SELECT * FROM " + CouponTableDB.TABLE_NAME + " WHERE "
			+ CouponTableDB.COLUMN_TYPE + " = ?";

	public static final String SELECT_VALID_COUPONS_BY_TYPE = "SELECT * FROM " + CouponTableDB.TABLE_NAME + " WHERE "
			+ CouponTableDB.COLUMN_ID + " IN (SELECT " + CompanyCouponTableDB.COLUMN_COUPON_ID + " FROM "
			+ CompanyCouponTableDB.TABLE_NAME + ") AND " + CouponTableDB.COLUMN_TYPE + " = ?";

	public static final String SELECT_VALID_COUPON_BY_TITLE = "SELECT * FROM " + CouponTableDB.TABLE_NAME + " WHERE "
			+ CouponTableDB.COLUMN_ID + " IN (SELECT " + CompanyCouponTableDB.COLUMN_COUPON_ID + " FROM "
			+ CompanyCouponTableDB.TABLE_NAME + ") AND " + CouponTableDB.COLUMN_TITLE + " = ?";

}
