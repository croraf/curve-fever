package org.evedraf.examples.spring;

import org.evedraf.examples.spring.business.Logic;
import org.evedraf.examples.spring.config.BusinessConfig;
import org.evedraf.examples.spring.model.Player;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

/**
 * Created by Korisnik on 13.12.2016..
 */
public class MyAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class<?>[0];
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class<?>[0];
    }

    @Override
    protected String[] getServletMappings() {
        return new String[0];
    }

    /*public static void main(String[] args) {

        ApplicationContext ctx =
                new AnnotationConfigApplicationContext("org/evedraf/examples/spring/config");

        Logic p = ctx.getBean(Logic.class);
        p.simpleLogicMethod(2);
    }*/
}
