package general;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CouponExpiredException extends Exception implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * This coupon is expired
	 * 
	 * @param message
	 *            String message of the exception
	 */

	public CouponExpiredException(String message) {
		super(message);
	}
}
