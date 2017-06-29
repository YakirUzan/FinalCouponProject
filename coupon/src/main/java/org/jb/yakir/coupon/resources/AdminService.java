package org.jb.yakir.coupon.resources;

import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.GsonBuilder;

import businessLogic.AdminFacade;
import core.Company;
import core.Coupon;
import core.Customer;
import general.CompanyNameChangedException;
import general.CompanyNameExistsException;
import general.CompanyNotFoundException;
import general.CustomerNameChangedException;
import general.CustomerNameExistsException;
import general.CustomerNotFoundException;
import general.SystemShutdownException;

@Path("/admin")
public class AdminService {

	@Context
	public HttpServletRequest request;
	
	public AdminService() {
		
	}

	@POST
	@Path("/create/company")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createCompany(Company company) {
		AdminFacade facade = (AdminFacade) request.getSession().getAttribute("facade");

		try {
			facade.createCompany(company);

			return getResponse(company.getCompName() + " successfully created", 200);
		} catch (SQLException | InterruptedException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException | CompanyNameExistsException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@PUT
	@Path("/update/company")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateCompany(Company company) {
		AdminFacade facade = (AdminFacade) request.getSession().getAttribute("facade");

		try {
			facade.updateCompany(company);

			return getResponse(company.getCompName() + " successfully updated", 200);
		} catch (SQLException | InterruptedException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException | CompanyNameChangedException | CompanyNotFoundException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@DELETE
	@Path("/remove/company")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response removeCompany(Company company) {
		AdminFacade facade = (AdminFacade) request.getSession().getAttribute("facade");

		try {
			facade.removeCompany(company);

			return getResponse(company.getCompName() + "Company [" + company.getId() + "] successfully removed", 200);
		} catch (SQLException | InterruptedException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException | CompanyNotFoundException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@GET
	@Path("/get/company/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCompany(@PathParam("id") long id) {
		AdminFacade facade = (AdminFacade) request.getSession().getAttribute("facade");

		try {
			Company company = facade.getCompany(id);

			return getResponse(company, 200);
		} catch (InterruptedException | SQLException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException | CompanyNotFoundException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@GET
	@Path("/get/all/companies")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllCompanies() {
		AdminFacade facade = (AdminFacade) request.getSession().getAttribute("facade");

		try {
			ArrayList<Company> companies = facade.getAllCompnies();

			return getResponse(companies, 200);
		} catch (InterruptedException | SQLException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@POST
	@Path("/create/customer")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createCustomer(Customer customer) {
		AdminFacade facade = (AdminFacade) request.getSession().getAttribute("facade");

		try {
			facade.createCustomer(customer);

			return getResponse(customer.getCustName() + " successfully created", 200);
		} catch (SQLException | InterruptedException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException | CustomerNameExistsException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@PUT
	@Path("/update/customer")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateCustomer(Customer customer) {
		AdminFacade facade = (AdminFacade) request.getSession().getAttribute("facade");

		try {
			facade.updateCustomer(customer);

			return getResponse(customer.getCustName() + " successfully updated", 200);
		} catch (SQLException | InterruptedException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException | CustomerNotFoundException | CustomerNameChangedException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@DELETE
	@Path("/remove/customer")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response removeCustomer(Customer customer) {
		AdminFacade facade = (AdminFacade) request.getSession().getAttribute("facade");

		try {
			facade.removeCustomer(customer);

			return getResponse("Customer [" + customer.getId() + "] successfully removed", 200);
		} catch (SQLException | InterruptedException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException | CustomerNotFoundException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@GET
	@Path("/get/customer/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCustomer(@PathParam("id") long id) {
		AdminFacade facade = (AdminFacade) request.getSession().getAttribute("facade");

		try {
			Customer customer = facade.getCustomer(id);

			return getResponse(customer, 200);
		} catch (SQLException | InterruptedException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException | CustomerNotFoundException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@GET
	@Path("/get/all/customers")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllCustomers() {
		AdminFacade facade = (AdminFacade) request.getSession().getAttribute("facade");

		try {
			ArrayList<Customer> coupons = facade.getAllCustomers();

			return getResponse(coupons, 200);
		} catch (SQLException | InterruptedException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@GET
	@Path("/get/all/valid/coupons")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllValidCoupons() {
		AdminFacade facade = (AdminFacade) request.getSession().getAttribute("facade");

		try {
			ArrayList<Coupon> validCoupons = facade.getAllValidCoupons();

			return getResponse(validCoupons, 200);
		} catch (SQLException | InterruptedException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@GET
	@Path("/get/all/coupons")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllCoupons() {
		AdminFacade facade = (AdminFacade) request.getSession().getAttribute("facade");

		try {
			ArrayList<Coupon> customers = facade.getAllCoupons();

			return getResponse(customers, 200);
		} catch (SQLException | InterruptedException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	private String getStringFromJson(Object obj) {
		return new GsonBuilder().setDateFormat("dd/MM/yyyy").create().toJson(obj);
	}

	private Response getResponse(Object json, int status) {
		return Response.ok(getStringFromJson(json)).status(status).header("Access-Control-Allow-Origin", "*").build();
	}
}
