package general;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CompanyNameExistsException extends Exception implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * This company name already exists
	 * 
	 * @param message
	 *            String message of the exception
	 */

	public CompanyNameExistsException(String message) {
		super(message);
	}
}
