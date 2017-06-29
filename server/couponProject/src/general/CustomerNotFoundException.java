package general;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CustomerNotFoundException extends Exception implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * The customer doesn't found in the database
	 * 
	 * @param message
	 *            String message of the exception
	 */

	public CustomerNotFoundException(String message) {
		super(message);
	}
}
