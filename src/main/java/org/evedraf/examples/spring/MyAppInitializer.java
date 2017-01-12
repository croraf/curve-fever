package org.evedraf.examples.spring;

import org.evedraf.examples.spring.config.*;

import org.evedraf.examples.spring.filter.DirectViewAccessBlockFilter;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.Conventions;
import org.springframework.util.Assert;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import javax.servlet.Filter;
import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;

/**
 * Created by Korisnik on 13.12.2016..
 */

public class MyAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        super.onStartup(servletContext);
        servletContext.setInitParameter("spring.profiles.active", "dev");

    }

    @Override
    protected Class<?>[] getRootConfigClasses() {

        return new Class<?>[]{
                AspectsConfig.class,
                BusinessConfig.class,
                DaoConfigDevelopment.class,
                DaoConfigProduction.class,
                SecurityConfig.class
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

        PlayerLogic p = ctx.getBean(PlayerLogic.class);
        p.simpleLogicMethod(2);
    }*/
}
