package org.evedraf.examples.spring;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
/*import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;*/
import org.apache.log4j.LogManager;
/*import org.apache.log4j.Logger;*/
import org.evedraf.examples.spring.config.*;

import org.evedraf.examples.spring.filter.DirectViewAccessBlockFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.Conventions;
import org.springframework.util.Assert;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;


import javax.servlet.Filter;
import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import java.util.Map;

import static java.lang.System.getenv;

/**
 * Created by Korisnik on 13.12.2016..
 */

public class MyAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

    final Logger logger = LoggerFactory.getLogger(MyAppInitializer.class);
    //final Log logger = LogFactory.getLog(MyAppInitializer.class);

    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        super.onStartup(servletContext);

        String databaseUrl = System.getenv("JDBC_DATABASE_URL");

        logger.info("-----------------------------------------------Database url is: " + databaseUrl);

        if (databaseUrl == null){
            servletContext.setInitParameter("spring.profiles.active", "dev");
        } else {
            servletContext.setInitParameter("spring.profiles.active", "prod");
        }

    }

    @Override
    protected Class<?>[] getRootConfigClasses() {

        return new Class<?>[]{
                AspectsConfig.class,
                BusinessConfig.class,
                DaoConfigDevelopment.class,
                DaoConfigProduction.class,
                SecurityConfig.class,
                WebSocketConfig.class
        };
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {

        return new Class<?>[]{
                WebConfig.class
        };
    }

    @Override
    protected Filter[] getServletFilters(){
        return new Filter[]{new DirectViewAccessBlockFilter()};
    }

    //manually register Filter, as in web.xml.
    // Most of this template was pasted from default registerServletFilter(...).
    @Override
    protected FilterRegistration.Dynamic registerServletFilter(ServletContext servletContext, Filter filter) {
        String filterName = Conventions.getVariableName(filter);
        FilterRegistration.Dynamic registration = servletContext.addFilter(filterName, filter);
        if (registration == null) {
            int counter = -1;
            while (counter == -1 || registration == null) {
                counter++;
                registration = servletContext.addFilter(filterName + "#" + counter, filter);
                Assert.isTrue(counter < 100,
                        "Failed to register filter '" + filter + "'." +
                                "Could the same Filter instance have been registered already?");
            }
        }
        registration.setAsyncSupported(isAsyncSupported());
        registration.addMappingForUrlPatterns(null, false, "/views/*");
        return registration;
    }



    @Override
    protected String[] getServletMappings() {
        return new String[]{"/services/*"};
    }


    /*public static void main(String[] args) {

        ApplicationContext ctx =
                new AnnotationConfigApplicationContext("org/evedraf/examples/spring/config");

        PlayerDao p = ctx.getBean(PlayerDao.class);
        p.method(2);
    }*/
}
