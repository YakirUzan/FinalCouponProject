package general;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CouponTitleExistsException extends Exception implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * This coupon title already exists in the valid coupons
	 * 
	 * @param message
	 *            String message of the exception
	 */

	public CouponTitleExistsException(String message) {
		super(message);
	}
}
