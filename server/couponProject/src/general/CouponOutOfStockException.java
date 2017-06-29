package general;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CouponOutOfStockException extends Exception implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * This coupon is out of stock
	 * 
	 * @param message
	 *            String message of the exception
	 */

	public CouponOutOfStockException(String message) {
		super(message);
	}
}
