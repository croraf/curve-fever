package org.evedraf.examples.spring.filter;


import javax.servlet.*;
import java.io.IOException;

/**
 * Created by Korisnik on 23.12.2016..
 */
public class DirectViewAccessBlockFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        try {
            response.getWriter().write("not possible to directly access views!!!");
        } catch (Exception ex) {
            /*request.setAttribute("errorMessage", ex);
            request.getRequestDispatcher("/WEB-INF/views/jsp/error.jsp")
                    .forward(request, response);*/
        }

    }

    @Override
    public void destroy() {

    }


}
