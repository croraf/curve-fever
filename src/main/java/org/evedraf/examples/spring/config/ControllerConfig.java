package org.evedraf.examples.spring.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * Created by Korisnik on 13.12.2016..
 */
@Configuration
@EnableWebMvc
@ComponentScan("org.evedraf.examples.spring.controller")
public class ControllerConfig {
}
