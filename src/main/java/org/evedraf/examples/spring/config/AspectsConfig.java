package org.evedraf.examples.spring.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

/**
 * Created by Korisnik on 13.12.2016..
 */
@Configuration
@EnableAspectJAutoProxy
@ComponentScan(basePackages = "org.evedraf.examples.spring.aspect")
public class AspectsConfig {
}
