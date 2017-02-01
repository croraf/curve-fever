package org.evedraf.examples.spring.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * Created by Korisnik on 13.12.2016..
 */
@Configuration
@ComponentScan(basePackages = "org.evedraf.examples.spring.business")
public class BusinessConfig {
}
