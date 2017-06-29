package general;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CustomerNameExistsException extends Exception implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * This customer name already exists
	 * 
	 * @param message
	 *            String message of the exception
	 */

	public CustomerNameExistsException(String message) {
		super(message);
	}
}
