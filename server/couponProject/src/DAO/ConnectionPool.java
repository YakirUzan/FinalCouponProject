package DAO;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

import core.DailyCouponExpirationTask;
import general.SystemShutdownException;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class ConnectionPool implements Serializable {
	private static final long serialVersionUID = 1L;

	private static ConnectionPool instance = null;

	private String connectionUrl = "jdbc:sqlserver://localhost:1433;databaseName=couponProjectDB;integratedSecurity=true;";
	private Object key = new Object();
	private Set<Connection> connections = new HashSet<>();
	private int numberOfMaxConnections = 10;

	private ConnectionPool() throws ClassNotFoundException, SQLException {

		// Connect to MS-SQL

		Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

		// Make list of connections

		for (int i = 0; i < numberOfMaxConnections; i++) {
			Connection con = DriverManager.getConnection(connectionUrl);
			connections.add(con);
		}
	}

	/**
	 * Singleton - give instance of ConnectionPool (connecting to MS-SQL and
	 * making the list of connections)
	 * 
	 * @return ConnectionPool instance of this class
	 * @throws ClassNotFoundException
	 * @throws SQLException
	 */

	public static synchronized ConnectionPool getInstance() throws ClassNotFoundException, SQLException {
		if (instance == null) {
			instance = new ConnectionPool();
		}
		return instance;
	}

	/**
	 * Give one connection from the list connections
	 * 
	 * @return Connection connection from the list connections
	 * @throws InterruptedException
	 * @throws SystemShutdownException
	 */

	public Connection getConnection() throws InterruptedException, SystemShutdownException {
		synchronized (key) {
			while (connections.isEmpty()) {
				key.wait();
			}

			// Check if the system is shutdown

			if (DailyCouponExpirationTask.isQuit())
				throw new SystemShutdownException("The system is shutdown");
			else {
				Connection connection = connections.iterator().next();
				connections.remove(connection);
				return connection;
			}
		}
	}

	/**
	 * Return the connection to the list connections
	 * 
	 * @param connection
	 *            Connection connection to return to the list connections
	 */

	public void returnConnection(Connection connection) {
		synchronized (key) {
			connections.add(connection);
			key.notify();
		}
	}

	/**
	 * Close the all connections from the list connections
	 * 
	 * @throws SQLException
	 * @throws InterruptedException
	 */

	public void closeAllConnections() throws SQLException, InterruptedException {

		// Wait 10 seconds and then close all connections

		synchronized (key) {
			if (connections.size() < numberOfMaxConnections) {
				key.wait(10 * 1000);
			}

			for (Connection connection : connections) {
				connection.close();
			}
		}
	}
}
