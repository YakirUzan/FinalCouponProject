package org.jb.yakir.coupon.resources;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;

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

import businessLogic.CompanyFacade;
import core.Coupon;
import general.CouponNotFoundException;
import general.CouponTitleExistsException;
import general.CouponType;
import general.SystemShutdownException;

@Path("/company")
public class CompanyService {
	
	@Context
	private HttpServletRequest request;
	
	public CompanyService() {
		
	}

	@POST
	@Path("/create/coupon")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createCoupon(Coupon coupon) {
		CompanyFacade facade = (CompanyFacade) request.getSession().getAttribute("facade");
		
		try {
			facade.createCoupon(coupon);

			return getResponse(coupon.getTitle() + " successfully created", 200);
		} catch (InterruptedException | SQLException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException | CouponTitleExistsException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@PUT
	@Path("/update/coupon")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateCoupon(Coupon coupon) {
		CompanyFacade facade = (CompanyFacade) request.getSession().getAttribute("facade");
		
		try {
			facade.updateCoupon(coupon);

			return getResponse("Coupon [" + coupon.getId() + "] successfully updated", 200);
		} catch (InterruptedException | SQLException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException | CouponNotFoundException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@DELETE
	@Path("/remove/coupon")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response removeCoupon(Coupon coupon) {
		CompanyFacade facade = (CompanyFacade) request.getSession().getAttribute("facade");
		
		try {
			facade.removeCoupon(coupon);

			return getResponse("Coupon [" + coupon.getId() + "] successfully removed", 200);
		} catch (InterruptedException | SQLException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException | CouponNotFoundException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@GET
	@Path("/get/coupon/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCoupon(@PathParam("id") long id) {
		CompanyFacade facade = (CompanyFacade) request.getSession().getAttribute("facade");
		
		try {
			Coupon coupon = facade.getCoupon(id);

			return getResponse(coupon, 200);
		} catch (InterruptedException | SQLException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException | CouponNotFoundException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@GET
	@Path("/get/all/coupons")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllCoupons() {
		CompanyFacade facade = (CompanyFacade) request.getSession().getAttribute("facade");
		
		try {
			ArrayList<Coupon> coupons = facade.getAllCoupons();

			return getResponse(coupons, 200);
		} catch (InterruptedException | SQLException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@GET
	@Path("/get/coupons/by/type/{type}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCouponsByType(@PathParam("type") CouponType type) {
		CompanyFacade facade = (CompanyFacade) request.getSession().getAttribute("facade");
		
		try {
			ArrayList<Coupon> couponsByType = facade.getCouponsByType(type);

			return getResponse(couponsByType, 200);
		} catch (InterruptedException | SQLException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@GET
	@Path("/get/coupons/by/price/{price}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCouponsByPrice(@PathParam("price") float price) {
		CompanyFacade facade = (CompanyFacade) request.getSession().getAttribute("facade");
		
		try {
			ArrayList<Coupon> couponsByPrice = facade.getCouponsByPrice(price);

			return getResponse(couponsByPrice, 200);
		} catch (InterruptedException | SQLException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@GET
	@Path("/get/coupons/by/date/{date}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCouponsByDate(@PathParam("date") long date) {
		CompanyFacade facade = (CompanyFacade) request.getSession().getAttribute("facade");
		
		try {
			ArrayList<Coupon> couponsByDate = facade.getCouponsByDate(new Date(date));

			return getResponse(couponsByDate, 200);
		} catch (InterruptedException | SQLException e) {
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