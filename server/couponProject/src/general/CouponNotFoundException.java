package general;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CouponNotFoundException extends Exception implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * The coupon doesn't found in the database
	 * 
	 * @param message
	 *            String message of the exception
	 */

	public CouponNotFoundException(String message) {
		super(message);
	}
}
