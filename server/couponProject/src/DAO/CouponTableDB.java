package DAO;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CouponTableDB implements Serializable {
	private static final long serialVersionUID = 1L;

	public static final String TABLE_NAME = "Coupon";

	public static final String COLUMN_ID = "ID";

	public static final String COLUMN_TITLE = "TITLE";

	public static final String COLUMN_START_DATE = "START_DATE";

	public static final String COLUMN_END_DATE = "END_DATE";

	public static final String COLUMN_AMOUNT = "AMOUNT";

	public static final String COLUMN_TYPE = "TYPE";

	public static final String COLUMN_MESSAGE = "MESSAGE";

	public static final String COLUMN_PRICE = "PRICE";

	public static final String COLUMN_IMAGE = "IMAGE";

}
