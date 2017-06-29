package core;

import java.io.Serializable;
import java.sql.SQLException;

import businessLogic.AdminFacade;
import businessLogic.CompanyFacade;
import businessLogic.CouponClientFacade;
import businessLogic.CustomerFacade;
import general.ClientType;
import general.SystemShutdownException;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CouponSystem implements Serializable {
	private static final long serialVersionUID = 1L;

	private static CouponSystem instance = null;
	private DailyCouponExpirationTask task;

	private CouponSystem() {

		// Start the daily coupon expiration task

		task = new DailyCouponExpirationTask();
		Thread thread = new Thread(task);
		thread.start();
	}

	/**
	 * Singleton - give instance of CouponSystem (start the removal expired
	 * coupons)
	 * 
	 * @return CouponSystem instance of this class
	 */

	public static synchronized CouponSystem getInstance() {
		if (instance == null) {
			instance = new CouponSystem();
		}
		return instance;
	}

	/**
	 * Factory - login to the system by client type
	 * 
	 * @param name
	 *            String name of the client
	 * @param password
	 *            String password of the client
	 * @param clientType
	 *            ClientType type of the client
	 * @return CouponClientFacade facade of the client by type
	 * @throws SQLException
	 * @throws ClassNotFoundException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @see ClientType
	 * @see CouponClientFacade
	 * @see AdminFacade
	 * @see CompanyFacade
	 * @see CustomerFacade
	 */

	public CouponClientFacade login(String name, String password, ClientType clientType)
			throws ClassNotFoundException, SQLException, SystemShutdownException, InterruptedException {
		CouponClientFacade facade = null;

		switch (clientType) {
		case CUSTOMER:
			facade = new CustomerFacade().login(name, password, clientType);
			break;
		case COMPANY:
			facade = new CompanyFacade().login(name, password, clientType);
			break;
		case ADMIN:
			facade = new AdminFacade().login(name, password, clientType);
			break;
		}

		return facade;
	}

	/**
	 * Shut down the system (stopping the removal of expired coupons and closes
	 * all connections)
	 */

	public void shutdown() {
		task.stopTask();
	}
}
