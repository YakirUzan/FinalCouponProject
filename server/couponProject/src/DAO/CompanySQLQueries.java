package DAO;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CompanySQLQueries implements Serializable {
	private static final long serialVersionUID = 1L;

	// INSERT

	public static final String INSERT_NEW_COMPANY = "INSERT INTO " + CompanyTableDB.TABLE_NAME
			+ " VALUES ( ? , ? , ? )";

	// DELETE

	public static final String DELETE_COMPANY = "DELETE FROM " + CompanyTableDB.TABLE_NAME + " WHERE "
			+ CompanyTableDB.COLUMN_ID + " = ?";

	public static final String DELETE_COUPONS = "DELETE FROM " + CouponTableDB.TABLE_NAME + " WHERE "
			+ CouponTableDB.COLUMN_ID + " IN (SELECT " + CompanyCouponTableDB.COLUMN_COUPON_ID + " FROM "
			+ CompanyCouponTableDB.TABLE_NAME + " WHERE " + CompanyCouponTableDB.COLUMN_COMPANY_ID + " = ?)";

	public static final String DELETE_THE_CUSTOMER_COUPONS = "DELETE FROM " + CustomerCouponTableDB.TABLE_NAME
			+ " WHERE " + CustomerCouponTableDB.COLUMN_COUPON_ID + " IN (SELECT "
			+ CompanyCouponTableDB.COLUMN_COUPON_ID + " FROM " + CompanyCouponTableDB.TABLE_NAME + " WHERE "
			+ CompanyCouponTableDB.COLUMN_COMPANY_ID + " = ?)";

	public static final String DELETE_THE_COMPANY_COUPONS = "DELETE FROM " + CompanyCouponTableDB.TABLE_NAME + " WHERE "
			+ CompanyCouponTableDB.COLUMN_COMPANY_ID + " = ?";

	// UPDATE

	public static final String UPDATE_COMPANY = "UPDATE " + CompanyTableDB.TABLE_NAME + " SET "
			+ CompanyTableDB.COLUMN_PASSWORD + " = ? , " + CompanyTableDB.COLUMN_EMAIL + " = ? WHERE "
			+ CompanyTableDB.COLUMN_ID + " = ?";

	// SELECT

	public static final String SELECT_COMPANY_BY_ID = "SELECT * FROM " + CompanyTableDB.TABLE_NAME + " WHERE "
			+ CompanyTableDB.COLUMN_ID + " = ?";

	public static final String SELECT_COMPANY_BY_NAME = "SELECT * FROM " + CompanyTableDB.TABLE_NAME + " WHERE "
			+ CompanyTableDB.COLUMN_COMPANY_NAME + " = ?";

	public static final String SELECT_COMPANY_BY_ID_AND_NAME = "SELECT * FROM " + CompanyTableDB.TABLE_NAME + " WHERE "
			+ CompanyTableDB.COLUMN_ID + " = ? AND " + CompanyTableDB.COLUMN_COMPANY_NAME + " = ?";

	public static final String SELECT_COMPANY_BY_NAME_AND_PASSWORD = "SELECT * FROM " + CompanyTableDB.TABLE_NAME
			+ " WHERE " + CompanyTableDB.COLUMN_COMPANY_NAME + " = ? AND " + CompanyTableDB.COLUMN_PASSWORD + " = ?";

	public static final String SELECT_ALL_COMPANIES = "SELECT * FROM " + CompanyTableDB.TABLE_NAME;

	public static final String SELECT_COUPONS_BY_COMPANY_ID = "SELECT * FROM " + CouponTableDB.TABLE_NAME + " WHERE "
			+ CouponTableDB.COLUMN_ID + " IN (SELECT " + CompanyCouponTableDB.COLUMN_COUPON_ID + " FROM "
			+ CompanyCouponTableDB.TABLE_NAME + " WHERE " + CompanyCouponTableDB.COLUMN_COMPANY_ID + " = ?)";

	public static final String SELECT_COUPONS_BY_COMPANY_ID_AND_COUPON_TYPE = "SELECT * FROM "
			+ CouponTableDB.TABLE_NAME + " WHERE " + CouponTableDB.COLUMN_ID + " IN (SELECT "
			+ CompanyCouponTableDB.COLUMN_COUPON_ID + " FROM " + CompanyCouponTableDB.TABLE_NAME + " WHERE "
			+ CompanyCouponTableDB.COLUMN_COMPANY_ID + " = ?) AND " + CouponTableDB.COLUMN_TYPE + " = ?";

	public static final String SELECT_COUPONS_BY_COMPANY_ID_AND_COUPON_PRICE = "SELECT * FROM "
			+ CouponTableDB.TABLE_NAME + " WHERE " + CouponTableDB.COLUMN_ID + " IN (SELECT "
			+ CompanyCouponTableDB.COLUMN_COUPON_ID + " FROM " + CompanyCouponTableDB.TABLE_NAME + " WHERE "
			+ CompanyCouponTableDB.COLUMN_COMPANY_ID + " = ?) AND " + CouponTableDB.COLUMN_PRICE + " < ?";

	public static final String SELECT_COUPONS_BY_COMPANY_ID_AND_COUPON_END_DATE = "SELECT * FROM "
			+ CouponTableDB.TABLE_NAME + " WHERE " + CouponTableDB.COLUMN_ID + " IN (SELECT "
			+ CompanyCouponTableDB.COLUMN_COUPON_ID + " FROM " + CompanyCouponTableDB.TABLE_NAME + " WHERE "
			+ CompanyCouponTableDB.COLUMN_COMPANY_ID + " = ?) AND " + CouponTableDB.COLUMN_END_DATE + " < ?";
}
