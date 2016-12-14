package org.evedraf.examples.spring.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class Logic {


    private Message message;

    public Logic(){
        System.out.println("Logic created");
    }

    public void simpleLogicMethod(int i){
        System.out.println("Simple logic method run with argument: " + i);
    }

    public Message getMessage() {
        return message;
    }

    @Autowired
    public void setMessage(Message message) {
        this.message = message;

        System.out.println("Message injected");
    }
}
