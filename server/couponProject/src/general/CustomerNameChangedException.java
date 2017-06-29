package general;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CustomerNameChangedException extends Exception implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * You can't changed the customer name
	 * 
	 * @param message
	 *            String message of the exception
	 */

	public CustomerNameChangedException(String message) {
		super(message);
	}
}
