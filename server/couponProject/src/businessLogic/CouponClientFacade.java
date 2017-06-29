package businessLogic;

import java.sql.SQLException;

import general.ClientType;
import general.SystemShutdownException;

/**
 * 
 * @author Yakir Uzan
 *
 */

public interface CouponClientFacade {

	/**
	 * Login to the system by client type, search name and password where needed
	 * 
	 * @param name
	 *            String name of the client
	 * @param password
	 *            String password of the client
	 * @param clientType
	 *            ClientType type of the client
	 * @return CouponClientFacade facade of the client
	 * @throws SQLException
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 * @see ClientType
	 */

	public CouponClientFacade login(String name, String password, ClientType clientType)
			throws SystemShutdownException, InterruptedException, SQLException;

}
