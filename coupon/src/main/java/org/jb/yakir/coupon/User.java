package org.jb.yakir.coupon;

import general.ClientType;

public class User {
	
	private String name;
	private String password;
	private ClientType type;
	
	public User() {
		
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public ClientType getType() {
		return type;
	}
	
	public void setType(ClientType type) {
		this.type = type;
	}

}
