package org.evedraf.examples.spring.business;

import org.springframework.stereotype.Component;


@Component
public class Message {

    public Message(){
        System.out.println("Message created");
    }
}
