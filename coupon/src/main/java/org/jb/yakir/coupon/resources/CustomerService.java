package org.jb.yakir.coupon.resources;

import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.GsonBuilder;

import businessLogic.CustomerFacade;
import core.Coupon;
import general.CouponExpiredException;
import general.CouponNotFoundException;
import general.CouponOutOfStockException;
import general.CouponType;
import general.CustomerCouponPurchasedException;
import general.SystemShutdownException;

@Path("/customer")
public class CustomerService {
	
	@Context
	private HttpServletRequest request;
	
	public CustomerService() {
		
	}

	@POST
	@Path("/purchase/coupon")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createCoupon(Coupon coupon) {
		CustomerFacade facade = (CustomerFacade) request.getSession().getAttribute("facade");
		
		try {
			facade.purchaseCoupon(coupon);
			
			return getResponse("Coupon [" + coupon.getId() + "] successfully purchased", 200);
		} catch (InterruptedException | SQLException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException | CouponNotFoundException | CouponExpiredException | CustomerCouponPurchasedException | CouponOutOfStockException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@GET
	@Path("/get/all/valid/coupons")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllValidCoupons() {
		CustomerFacade facade = (CustomerFacade) request.getSession().getAttribute("facade");
		
		try {
			ArrayList<Coupon> validCoupons = facade.getAllValidCoupons();
			
			return getResponse(validCoupons, 200);
		} catch (InterruptedException | SQLException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@GET
	@Path("/get/all/purchased/coupons")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllPurchasedCoupons() {
		CustomerFacade facade = (CustomerFacade) request.getSession().getAttribute("facade");
		
		try {
			ArrayList<Coupon> purchasedCoupons = facade.getAllPurchasedCoupons();
			
			return getResponse(purchasedCoupons, 200);
		} catch (InterruptedException | SQLException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@GET
	@Path("/get/purchased/coupons/by/type/{type}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getPurchasedCouponsByType(@PathParam("type") CouponType type) {
		CustomerFacade facade = (CustomerFacade) request.getSession().getAttribute("facade");
		
		try {
			ArrayList<Coupon> purchasedCouponsByType = facade.getPurchasedCouponsByType(type);
			
			return getResponse(purchasedCouponsByType, 200);
		} catch (InterruptedException | SQLException e) {
			return getResponse("Failed", 500);
		} catch (SystemShutdownException e) {
			return getResponse(e.getMessage(), 500);
		}
	}

	@GET
	@Path("/get/purchased/coupons/by/price/{price}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getPurchasedCouponsByPrice(@PathParam("price") float price) {
		CustomerFacade facade = (CustomerFacade) request.getSession().getAttribute("facade");
		
		try {
			ArrayList<Coupon> purchasedCouponsByPrice = facade.getPurchasedCouponsByPrice(price);
			
			return getResponse(purchasedCouponsByPrice, 200);
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
