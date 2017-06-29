package general;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class SystemShutdownException extends Exception implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * The system shut down
	 * 
	 * @param message
	 *            String message of the exception
	 */

	public SystemShutdownException(String message) {
		super(message);
	}
}
