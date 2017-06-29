package general;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CustomerCouponPurchasedException extends Exception implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * This customer already purchased that coupon
	 * 
	 * @param message
	 *            String message of the exception
	 */

	public CustomerCouponPurchasedException(String message) {
		super(message);
	}
}
