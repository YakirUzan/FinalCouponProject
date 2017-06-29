package DAO;

import java.io.Serializable;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import core.Company;
import core.Coupon;
import general.CompanyNameChangedException;
import general.CompanyNameExistsException;
import general.CompanyNotFoundException;
import general.CouponType;
import general.SystemShutdownException;

/**
 * 
 * @author Yakir Uzan
 *
 */

public class CompanyDBDAO implements CompanyDAO, Serializable {
	private static final long serialVersionUID = 1L;
	
	private CompanyExecutor<Company> companyExecutor;
	private CouponExecutor<Coupon> couponExecutor;

	private long idOfCompanyLoggedIn;

	/**
	 * Public constructor <br>
	 * Create an instance to CompanyExecutor <br>
	 * Create an instance to CouponExecutor
	 * 
	 * @param pool
	 *            ConnectionPool pool of connections
	 * @see ConnectionPool
	 * @see CompanyExecutor
	 * @see CouponExecutor
	 */

	public CompanyDBDAO(ConnectionPool pool) {
		companyExecutor = new CompanyExecutor<>(pool);
		couponExecutor = new CouponExecutor<>(pool);
	}

	/**
	 * Give the id of the company logged in
	 * 
	 * @return long id of the current company
	 */

	public long getIdOfCompanyLoggedIn() {
		return idOfCompanyLoggedIn;
	}

	/**
	 * Insert company to the table Company
	 * 
	 * @param company
	 *            Company company to create
	 * @throws CompanyNameExistsException
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Company
	 * @see Parameter
	 * @see CompanySQLQueries
	 */

	@Override
	public void createCompany(Company company)
			throws CompanyNameExistsException, SystemShutdownException, InterruptedException, SQLException {

		String query1 = CompanySQLQueries.SELECT_COMPANY_BY_NAME;
		ArrayList<Parameter<?>> parameters1 = new ArrayList<>();
		parameters1.add(new Parameter<String>(company.getCompName()));

		ArrayList<Company> companies = companyExecutor.execute(SQLOperations.SELECT, query1, parameters1);

		// Check if company with the same name exists
		if (companies.isEmpty()) {

			// NO - Create company
			String query2 = CompanySQLQueries.INSERT_NEW_COMPANY;
			ArrayList<Parameter<?>> parameters2 = new ArrayList<>();
			parameters2.add(new Parameter<String>(company.getCompName()));
			parameters2.add(new Parameter<String>(company.getPassword()));
			parameters2.add(new Parameter<String>(company.getEmail()));

			companyExecutor.execute(SQLOperations.INSERT, query2, parameters2);

			System.out.println(company.getCompName() + " successfully created");
		} else {

			// YES - Throw CompanyNameExistsException
			throw new CompanyNameExistsException(company.getCompName() + " already exists");
		}
	}

	/**
	 * Delete company from the table Company and delete all of the valid coupons
	 * of this company from the tables Coupon, Company_Coupon and
	 * Customer_Coupon
	 * 
	 * @param company
	 *            Company company to remove
	 * @throws CompanyNotFoundException
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Company
	 * @see Parameter
	 * @see CompanySQLQueries
	 */

	@Override
	public void removeCompany(Company company)
			throws CompanyNotFoundException, SystemShutdownException, InterruptedException, SQLException {

		// Check if the company exists
		if (compamyExists(company.getId())) {

			// YES - Remove company
			ArrayList<Parameter<?>> parameters = new ArrayList<>();
			parameters.add(new Parameter<Long>(company.getId()));

			String query1 = CompanySQLQueries.DELETE_COMPANY;

			companyExecutor.execute(SQLOperations.DELETE, query1, parameters);

			String query2 = CompanySQLQueries.DELETE_THE_CUSTOMER_COUPONS;

			companyExecutor.execute(SQLOperations.DELETE, query2, parameters);

			String query3 = CompanySQLQueries.DELETE_COUPONS;

			companyExecutor.execute(SQLOperations.DELETE, query3, parameters);

			String query4 = CompanySQLQueries.DELETE_THE_COMPANY_COUPONS;

			companyExecutor.execute(SQLOperations.DELETE, query4, parameters);

			System.out.println("Company [" + company.getId() + "] successfully removed");
		} else {

			// NO - Throw CompanyNotFoundException
			throw new CompanyNotFoundException("Company [" + company.getId() + "] not found");
		}
	}

	/**
	 * Update company in the table Company
	 * 
	 * @param company
	 *            Company company to update
	 * @throws CompanyNotFoundException
	 * @throws CompanyNameChangedException
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Company
	 * @see Parameter
	 * @see CompanySQLQueries
	 */

	@Override
	public void updateCompany(Company company) throws CompanyNotFoundException, CompanyNameChangedException,
			SystemShutdownException, InterruptedException, SQLException {

		// Check if the company exists
		if (compamyExists(company.getId())) {

			// YES - Try to update company
			String query1 = CompanySQLQueries.SELECT_COMPANY_BY_ID_AND_NAME;
			ArrayList<Parameter<?>> parameters1 = new ArrayList<>();
			parameters1.add(new Parameter<Long>(company.getId()));
			parameters1.add(new Parameter<String>(company.getCompName()));

			ArrayList<Company> companies = companyExecutor.execute(SQLOperations.SELECT, query1, parameters1);

			// Check if the company name changed
			if (companies.isEmpty()) {

				// YES - Throw CompanyNameChangedException
				throw new CompanyNameChangedException("You can't change the Company Name !");
			} else {

				// NO - Update company
				String query2 = CompanySQLQueries.UPDATE_COMPANY;
				ArrayList<Parameter<?>> parameters2 = new ArrayList<>();
				parameters2.add(new Parameter<String>(company.getPassword()));
				parameters2.add(new Parameter<String>(company.getEmail()));
				parameters2.add(new Parameter<Long>(company.getId()));

				companyExecutor.execute(SQLOperations.UPDATE, query2, parameters2);

				System.out.println(getCompany(company.getId()).getCompName() + " successfully updated");
			}
		} else {

			// NO - Throw CompanyNotFoundException
			throw new CompanyNotFoundException("Company ["+ company.getId() + "] not found");
		}
	}

	/**
	 * Get company from the table Company and the valid coupons of this company
	 * from the tables Company_Coupon, Coupon
	 * 
	 * @param id
	 *            long id of the company
	 * @return Company company of this id
	 * @throws CompanyNotFoundException
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Company
	 * @see Parameter
	 * @see CompanySQLQueries
	 */

	@Override
	public Company getCompany(long id)
			throws CompanyNotFoundException, SystemShutdownException, InterruptedException, SQLException {

		// Check if the company exists
		if (compamyExists(id)) {

			// YES - Get company
			String query = CompanySQLQueries.SELECT_COMPANY_BY_ID;
			ArrayList<Parameter<?>> parameters = new ArrayList<>();
			parameters.add(new Parameter<Long>(id));

			return companyExecutor.execute(SQLOperations.SELECT, query, parameters).get(0);
		} else {

			// NO - Throw CompanyNotFoundException
			throw new CompanyNotFoundException("Company [" + id + "] not found");
		}
	}

	/**
	 * Get all companies from the table Company and the valid coupons of any
	 * company from the tables Company_Coupon, Coupon
	 * 
	 * @return ArrayList of all companies
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Company
	 * @see Parameter
	 * @see CompanySQLQueries
	 */

	@Override
	public ArrayList<Company> getAllCompanies() throws SystemShutdownException, InterruptedException, SQLException {

		String query = CompanySQLQueries.SELECT_ALL_COMPANIES;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();

		return companyExecutor.execute(SQLOperations.SELECT, query, parameters);
	}

	/**
	 * Get the valid coupons of the current company from the tables
	 * Company_Coupon, Coupon
	 * 
	 * @return ArrayList of the valid coupons of the current company
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 * @see Parameter
	 * @see CompanySQLQueries
	 */

	@Override
	public ArrayList<Coupon> getCoupons() throws SystemShutdownException, InterruptedException, SQLException {

		String query = CompanySQLQueries.SELECT_COUPONS_BY_COMPANY_ID;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();
		parameters.add(new Parameter<Long>(idOfCompanyLoggedIn));

		return couponExecutor.execute(SQLOperations.SELECT, query, parameters);
	}

	/**
	 * Get the valid coupons by type of the current company from the tables
	 * Company_Coupon, Coupon
	 * 
	 * @param type
	 *            CouponType type of the coupon
	 * @return ArrayList of the valid coupons of the current company by this
	 *         type
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 * @see CouponType
	 */

	@Override
	public ArrayList<Coupon> getCouponsByType(CouponType type)
			throws SystemShutdownException, InterruptedException, SQLException {

		String query = CompanySQLQueries.SELECT_COUPONS_BY_COMPANY_ID_AND_COUPON_TYPE;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();
		parameters.add(new Parameter<Long>(idOfCompanyLoggedIn));
		parameters.add(new Parameter<String>(type.name()));

		return couponExecutor.execute(SQLOperations.SELECT, query, parameters);
	}

	/**
	 * Get the valid coupons by price of the current company from the tables
	 * Company_Coupon, Coupon
	 * 
	 * @param price
	 *            float max price of coupons
	 * @return ArrayList of the valid coupons of the current company by this
	 *         price
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 */

	@Override
	public ArrayList<Coupon> getCouponsByPrice(float price)
			throws SystemShutdownException, InterruptedException, SQLException {

		String query = CompanySQLQueries.SELECT_COUPONS_BY_COMPANY_ID_AND_COUPON_PRICE;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();
		parameters.add(new Parameter<Long>(idOfCompanyLoggedIn));
		parameters.add(new Parameter<Float>(price));

		return couponExecutor.execute(SQLOperations.SELECT, query, parameters);
	}

	/**
	 * Get the valid coupons by end date of the current company from the tables
	 * Company_Coupon, Coupon
	 * 
	 * @param date
	 *            Date max end date of coupons
	 * @return ArrayList of the valid coupons of the current company by this
	 *         date
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 * @see Coupon
	 */

	@Override
	public ArrayList<Coupon> getCouponsByDate(Date date)
			throws SystemShutdownException, InterruptedException, SQLException {

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

		String query = CompanySQLQueries.SELECT_COUPONS_BY_COMPANY_ID_AND_COUPON_END_DATE;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();
		parameters.add(new Parameter<Long>(idOfCompanyLoggedIn));
		parameters.add(new Parameter<java.sql.Date>(java.sql.Date.valueOf(sdf.format(date))));

		return couponExecutor.execute(SQLOperations.SELECT, query, parameters);
	}

	/**
	 * Login to the system as a company, search name and password in the table
	 * Company
	 * 
	 * @param compName
	 *            String name of the company
	 * @param password
	 *            String password of the company
	 * @return boolean if the login is succeeded
	 * @throws SystemShutdownException
	 * @throws InterruptedException
	 * @throws SQLException
	 */

	@Override
	public boolean login(String compName, String password)
			throws SystemShutdownException, InterruptedException, SQLException {

		String query = CompanySQLQueries.SELECT_COMPANY_BY_NAME_AND_PASSWORD;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();
		parameters.add(new Parameter<String>(compName));
		parameters.add(new Parameter<String>(password));

		ArrayList<Company> companies = companyExecutor.execute(SQLOperations.SELECT, query, parameters);

		// Try to Login
		if (companies.isEmpty()) {

			// Login failed
			return false;
		} else {

			// Login succeeded
			idOfCompanyLoggedIn = companies.get(0).getId();
			return true;
		}
	}

	private boolean compamyExists(Long id) throws InterruptedException, SystemShutdownException, SQLException {
		String query = CompanySQLQueries.SELECT_COMPANY_BY_ID;
		ArrayList<Parameter<?>> parameters = new ArrayList<>();
		parameters.add(new Parameter<Long>(id));

		ArrayList<Company> companies = companyExecutor.execute(SQLOperations.SELECT, query, parameters);

		return !companies.isEmpty();
	}
}
