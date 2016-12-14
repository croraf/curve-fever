package org.evedraf.examples.spring;

import org.evedraf.examples.spring.config.AspectsConfig;
import org.evedraf.examples.spring.config.BusinessConfig;
import org.evedraf.examples.spring.config.ControllerConfig;

import org.evedraf.examples.spring.config.SecurityConfig;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

/**
 * Created by Korisnik on 13.12.2016..
 */
public class MyAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

    @Override
    protected Class<?>[] getRootConfigClasses() {

        return new Class<?>[]{
                AspectsConfig.class,
                BusinessConfig.class,
                ControllerConfig.class,
                SecurityConfig.class
        };
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {

        return new Class<?>[]{
                ControllerConfig.class
        };
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
