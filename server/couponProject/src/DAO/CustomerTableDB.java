package DAO;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CustomerTableDB implements Serializable {
	private static final long serialVersionUID = 1L;

	public static final String TABLE_NAME = "Customer";

	public static final String COLUMN_ID = "ID";

	public static final String COLUMN_CUSTOMER_NAME = "CUST_NAME";

	public static final String COLUMN_PASSWORD = "PASSWORD";

}
