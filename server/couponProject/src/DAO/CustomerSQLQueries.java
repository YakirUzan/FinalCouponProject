package DAO;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CustomerSQLQueries implements Serializable {
	private static final long serialVersionUID = 1L;

	// INSERT

	public static final String INSERT_NEW_CUSTOMER = "INSERT INTO " + CustomerTableDB.TABLE_NAME + " VALUES ( ? , ? )";

	// DELETE

	public static final String DELETE_CUSTOMER = "DELETE FROM " + CustomerTableDB.TABLE_NAME + " WHERE "
			+ CustomerTableDB.COLUMN_ID + " = ?";

	public static final String DELETE_COUPONS = "DELETE FROM " + CustomerCouponTableDB.TABLE_NAME + " WHERE "
			+ CustomerCouponTableDB.COLUMN_CUSTOMER_ID + " = ?";

	// UPDATE

	public static final String UPDATE_CUSTOMER = "UPDATE " + CustomerTableDB.TABLE_NAME + " SET "
			+ CustomerTableDB.COLUMN_PASSWORD + " = ? WHERE " + CustomerTableDB.COLUMN_ID + " = ?";

	// SELECT

	public static final String SELECT_CUSTOMER_BY_ID = "SELECT * FROM " + CustomerTableDB.TABLE_NAME + " WHERE "
			+ CustomerTableDB.COLUMN_ID + " = ?";

	public static final String SELECT_CUSTOMER_BY_NANE = "SELECT * FROM " + CustomerTableDB.TABLE_NAME + " WHERE "
			+ CustomerTableDB.COLUMN_CUSTOMER_NAME + " = ?";

	public static final String SELECT_CUSTOMER_BY_ID_AND_NAME = "SELECT * FROM " + CustomerTableDB.TABLE_NAME
			+ " WHERE " + CustomerTableDB.COLUMN_ID + " = ? AND " + CustomerTableDB.COLUMN_CUSTOMER_NAME + " = ?";

	public static final String SELECT_CUSTOMER_BY_NAME_AND_PASSWORD = "SELECT * FROM " + CustomerTableDB.TABLE_NAME
			+ " WHERE " + CustomerTableDB.COLUMN_CUSTOMER_NAME + " = ? AND " + CustomerTableDB.COLUMN_PASSWORD + " = ?";

	public static final String SELECT_ALL_CUSTOMERS = "SELECT * FROM " + CustomerTableDB.TABLE_NAME;

	public static final String SELECT_COUPONS_BY_CUSTOMER_ID = "SELECT * FROM " + CouponTableDB.TABLE_NAME + " WHERE "
			+ CouponTableDB.COLUMN_ID + " IN (SELECT " + CustomerCouponTableDB.COLUMN_COUPON_ID + " FROM "
			+ CustomerCouponTableDB.TABLE_NAME + " WHERE " + CustomerCouponTableDB.COLUMN_CUSTOMER_ID + " = ?)";

	public static final String SELECT_COUPONS_BY_CUSTOMER_ID_AND_COUPON_TYPE = "SELECT * FROM "
			+ CouponTableDB.TABLE_NAME + " WHERE " + CouponTableDB.COLUMN_ID + " IN (SELECT "
			+ CustomerCouponTableDB.COLUMN_COUPON_ID + " FROM " + CustomerCouponTableDB.TABLE_NAME + " WHERE "
			+ CustomerCouponTableDB.COLUMN_CUSTOMER_ID + " = ?) AND " + CouponTableDB.COLUMN_TYPE + " = ?";

	public static final String SELECT_COUPONS_BY_CUSTOMER_ID_AND_COUPON_PRICE = "SELECT * FROM "
			+ CouponTableDB.TABLE_NAME + " WHERE " + CouponTableDB.COLUMN_ID + " IN (SELECT "
			+ CustomerCouponTableDB.COLUMN_COUPON_ID + " FROM " + CustomerCouponTableDB.TABLE_NAME + " WHERE "
			+ CustomerCouponTableDB.COLUMN_CUSTOMER_ID + " = ?) AND " + CouponTableDB.COLUMN_PRICE + " < ?";

	public static final String SELECT_CUSTOMER_COUPONS_BY_COUPON_ID = "SELECT * FROM "
			+ CustomerCouponTableDB.TABLE_NAME + " WHERE " + CustomerCouponTableDB.COLUMN_COUPON_ID + " = ?";

	public static final String SELECT_CUSTOMER_COUPONS_BY_CUSTOMER_ID_AND_COUPON_ID = "SELECT * FROM "
			+ CustomerCouponTableDB.TABLE_NAME + " WHERE " + CustomerCouponTableDB.COLUMN_CUSTOMER_ID + " = ? AND "
			+ CustomerCouponTableDB.COLUMN_COUPON_ID + " = ?";
}
