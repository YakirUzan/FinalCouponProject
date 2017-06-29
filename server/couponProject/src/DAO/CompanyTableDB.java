package DAO;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CompanyTableDB implements Serializable {
	private static final long serialVersionUID = 1L;

	public static final String TABLE_NAME = "Company";

	public static final String COLUMN_ID = "ID";

	public static final String COLUMN_COMPANY_NAME = "COMP_NAME";

	public static final String COLUMN_PASSWORD = "PASSWORD";

	public static final String COLUMN_EMAIL = "EMAIL";

}
