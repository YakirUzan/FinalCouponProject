package DAO;

import java.io.Serializable;

/**
 * 
 * @author Yakir Uzan
 *
 * @param <T>
 *            Type
 */

public class Parameter<T> implements Serializable {
	private static final long serialVersionUID = 1L;

	private T parameter;

	/**
	 * Public constructor<br>
	 * Set the parameter
	 * 
	 * @param parameter
	 *            Type parameter
	 */

	public Parameter(T parameter) {
		this.parameter = parameter;
	}

	/**
	 * Give the parameter
	 * 
	 * @return Type parameter
	 */

	public T getParameter() {
		return parameter;
	}
}
