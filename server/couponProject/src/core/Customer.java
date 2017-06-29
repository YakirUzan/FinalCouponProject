package core;

import java.io.Serializable;
import java.util.Collection;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * @author Yakir Uzan
 *
 */

@XmlRootElement
public class Customer implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private long id;
	private String custName, password;
	private Collection<Coupon> coupons;

	/**
	 * Default public constructor
	 */

	public Customer() {

	}

	/**
	 * Give the id of the customer
	 * 
	 * @return long id of the customer
	 */

	public long getId() {
		return id;
	}

	/**
	 * Set the id of the customer
	 * 
	 * @param id
	 *            long id of the customer
	 */

	public void setId(long id) {
		this.id = id;
	}

	/**
	 * Give the name of the customer
	 * 
	 * @return String name of the customer
	 */

	public String getCustName() {
		return custName;
	}

	/**
	 * Set the name of the customer
	 * 
	 * @param custName
	 *            String name of the customer
	 */

	public void setCustName(String custName) {
		this.custName = custName;
	}

	/**
	 * Give the password of the customer
	 * 
	 * @return String password of the customer
	 */

	public String getPassword() {
		return password;
	}

	/**
	 * Set the password of the customer
	 * 
	 * @param password
	 *            String password of the customer
	 */

	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * Give the coupons of the customer
	 * 
	 * @return Collection of coupons of the customer
	 */

	public Collection<Coupon> getCoupons() {
		return coupons;
	}

	/**
	 * Set the coupons of the customer
	 * 
	 * @param coupons
	 *            Collection of coupons of the customer
	 */

	public void setCoupons(Collection<Coupon> coupons) {
		this.coupons = coupons;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", custName=" + custName + ", password=" + password + ", coupons=" + coupons
				+ "]";
	}

}
