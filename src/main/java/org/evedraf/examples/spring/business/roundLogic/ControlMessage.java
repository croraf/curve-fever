package org.evedraf.examples.spring.business.roundLogic;

/**
 * Created by Korisnik on 24.1.2017..
 */
public class ControlMessage {

    private String type;

    private Object message;

    public ControlMessage() {
    }

    public ControlMessage(String type, Object message) {
        this.type = type;
        this.message = message;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Object getMessage() {
        return message;
    }

    public void setMessage(Object message) {
        this.message = message;
    }
}
