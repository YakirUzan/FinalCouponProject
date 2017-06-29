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
public class Company implements Serializable {
	private static final long serialVersionUID = 1L;

	private long id;
	private String compName, password, email;
	private Collection<Coupon> coupons;

	/**
	 * Default public constructor
	 */

	public Company() {
	}

	/**
	 * Give the id of the company
	 * 
	 * @return long id of the company
	 */

	public long getId() {
		return id;
	}

	/**
	 * Set the id of the company
	 * 
	 * @param id
	 *            long id of the company
	 */

	public void setId(long id) {
		this.id = id;
	}

	/**
	 * Give the name of the company
	 * 
	 * @return String name of the company
	 */

	public String getCompName() {
		return compName;
	}

	/**
	 * Set the name of the company
	 * 
	 * @param compName
	 *            String name of the company
	 */

	public void setCompName(String compName) {
		this.compName = compName;
	}

	/**
	 * Give the password of the company
	 * 
	 * @return String password of the company
	 */

	public String getPassword() {
		return password;
	}

	/**
	 * Set the password of the company
	 * 
	 * @param password
	 *            String password of the company
	 */

	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * Give the email of the company
	 * 
	 * @return String email of the company
	 */

	public String getEmail() {
		return email;
	}

	/**
	 * Set the email of the company
	 * 
	 * @param email
	 *            String email of the company
	 */

	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * Give the coupons of the company
	 * 
	 * @return Collection of coupons of the company
	 */

	public Collection<Coupon> getCoupons() {
		return coupons;
	}

	/**
	 * Set the coupons of the company
	 * 
	 * @param coupons
	 *            Collection of coupons of the company
	 */

	public void setCoupons(Collection<Coupon> coupons) {
		this.coupons = coupons;
	}

	@Override
	public String toString() {
		return "Company [id=" + id + ", compName=" + compName + ", password=" + password + ", email=" + email
				+ ", coupons=" + coupons + "]";
	}

}
