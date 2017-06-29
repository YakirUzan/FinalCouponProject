package org.jb.yakir.coupon;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import businessLogic.CouponClientFacade;
import core.CouponSystem;
import general.SystemShutdownException;

public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {		

		User user = new Gson().fromJson(request.getReader().readLine(), User.class);

		try {
			CouponClientFacade facade = CouponSystem.getInstance().login(user.getName(), user.getPassword(), user.getType());
			if (facade != null) {
				
				request.getSession().setAttribute("facade", facade);

				response.setStatus(HttpServletResponse.SC_OK);
				response.getWriter().write("Login succeeded");
			} else {
				response.setStatus(HttpServletResponse.SC_NOT_FOUND);
				response.getWriter().write("Name or Password Incorrect");
			}
		} catch (SystemShutdownException e) {
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			response.getWriter().write(e.getMessage());
		} catch (ClassNotFoundException | SQLException | InterruptedException e) {
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			response.getWriter().write("System problem");
		} finally {
			response.getWriter().close();
		}
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
