package general;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CompanyNotFoundException extends Exception implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * The company doesn't found in the database
	 * 
	 * @param message
	 *            String message of the exception
	 */

	public CompanyNotFoundException(String message) {
		super(message);
	}
}
