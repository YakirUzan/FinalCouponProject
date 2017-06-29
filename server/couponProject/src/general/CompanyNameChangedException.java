package general;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CompanyNameChangedException extends Exception implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * You can't changed the company name
	 * 
	 * @param message
	 *            String message of the exception
	 */

	public CompanyNameChangedException(String message) {
		super(message);
	}
}
