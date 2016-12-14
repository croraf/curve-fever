package org.evedraf.examples.spring.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

/**
 * Created by Korisnik on 13.12.2016..
 */
@Aspect
@Component
public class MySimpleAspect {

    @Before("execution(public * simpleLogicMethod(int))")
    public void loggingAspect(){
        System.out.println("Logging Aspect run");
    }
}
