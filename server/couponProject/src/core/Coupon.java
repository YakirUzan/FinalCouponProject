package core;

import java.io.Serializable;
import java.util.Date;

import javax.xml.bind.annotation.XmlRootElement;

import general.CouponType;

/**
 * 
 * @author Yakir Uzan
 *
 */

@XmlRootElement
public class Coupon implements Serializable {
	private static final long serialVersionUID = 1L;

	private long id;
	private String title;
	private Date startDate, endDate;
	private int amount;
	private CouponType type;
	private String message;
	private float price;
	private String image;

	/**
	 * Default public constructor
	 */

	public Coupon() {
	}

	/**
	 * Give the id of the coupon
	 * 
	 * @return long id of the coupon
	 */

	public long getId() {
		return id;
	}

	/**
	 * Set the id of the coupon
	 * 
	 * @param id
	 *            long id of the coupon
	 */

	public void setId(long id) {
		this.id = id;
	}

	/**
	 * Give the title of the coupon
	 * 
	 * @return String title of the coupon
	 */

	public String getTitle() {
		return title;
	}

	/**
	 * Set the title of the coupon
	 * 
	 * @param title
	 *            String title of the coupon
	 */

	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * Give the start date of the coupon
	 * 
	 * @return Date start date of the coupon
	 */

	public Date getStartDate() {
		return startDate;
	}

	/**
	 * Set the start date of the coupon
	 * 
	 * @param startDate
	 *            Date start date of the coupon
	 */

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	/**
	 * Give the end date of the coupon
	 * 
	 * @return Date end date of the coupon
	 */

	public Date getEndDate() {
		return endDate;
	}

	/**
	 * Set the end date of the coupon
	 * 
	 * @param endDate
	 *            Date end date of the coupon
	 */

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	/**
	 * Give the amount of the coupon
	 * 
	 * @return int amount of the coupon
	 */

	public int getAmount() {
		return amount;
	}

	/**
	 * Set the amount of the coupon
	 * 
	 * @param amount
	 *            int amount of the coupon
	 */

	public void setAmount(int amount) {
		this.amount = amount;
	}

	/**
	 * Give the type of the coupon
	 * 
	 * @return CouponType type of the coupon
	 * @see CouponType
	 */

	public CouponType getType() {
		return type;
	}

	/**
	 * Set the type of the coupon
	 * 
	 * @param type
	 *            CouponType type of the coupon
	 * @see CouponType
	 */

	public void setType(CouponType type) {
		this.type = type;
	}

	/**
	 * Give the message of the coupon
	 * 
	 * @return String message of the coupon
	 */

	public String getMessage() {
		return message;
	}

	/**
	 * Set the message of the coupon
	 * 
	 * @param message
	 *            String message of the coupon
	 */

	public void setMessage(String message) {
		this.message = message;
	}

	/**
	 * Give the price of the coupon
	 * 
	 * @return float price of the coupon
	 */

	public float getPrice() {
		return price;
	}

	/**
	 * Set the price of the coupon
	 * 
	 * @param price
	 *            float price of the coupon
	 */

	public void setPrice(float price) {
		this.price = price;
	}

	/**
	 * Give the image of the coupon
	 * 
	 * @return String image of the coupon
	 */

	public String getImage() {
		return image;
	}

	/**
	 * Set the image of the coupon
	 * 
	 * @param image
	 *            String image of the coupon
	 */

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Coupon [id=" + id + ", title=" + title + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", amount=" + amount + ", type=" + type + ", message=" + message + ", price=" + price + ", image="
				+ image + "]";
	}

}
