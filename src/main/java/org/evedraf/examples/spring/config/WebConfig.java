package org.evedraf.examples.spring.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

/**
 * Created by Korisnik on 13.12.2016..
 */
@Configuration
@EnableWebMvc
@ComponentScan("org.evedraf.examples.spring.controller")
public class WebConfig {

    @Bean
    ViewResolver getViewResolver(){

        ViewResolver viewResolver = new InternalResourceViewResolver("/views/", ".jsp");
        return viewResolver;
    }
}
