package org.evedraf.examples.spring.business.roundLogic.messages;

/**
 * parent message for all websocket messages
 */
public class WebSocketMessage {

    String type;

    Object payload;

    public WebSocketMessage() {
    }

    public WebSocketMessage(String type, Object payload) {
        this.type = type;
        this.payload = payload;
    }



    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Object getPayload() {
        return payload;
    }

    public void setPayload(Object payload) {
        this.payload = payload;
    }
}
