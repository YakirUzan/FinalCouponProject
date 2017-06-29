package core;

import java.sql.SQLException;

import businessLogic.AdminFacade;
import general.ClientType;
import general.CompanyNotFoundException;
import general.SystemShutdownException;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		try {
			AdminFacade facade = (AdminFacade) CouponSystem.getInstance().login(Admin.NAME, Admin.PASSWORD, ClientType.ADMIN);
			
			Company company = new Company();
			
			company.setId(19L);
			
			try {
				facade.removeCompany(company);
			} catch (CompanyNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} catch (ClassNotFoundException | SQLException | SystemShutdownException | InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
