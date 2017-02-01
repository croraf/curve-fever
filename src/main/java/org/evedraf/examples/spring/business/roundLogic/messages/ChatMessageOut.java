package org.evedraf.examples.spring.business.roundLogic.messages;

import javax.validation.ConstraintViolationException;

/**
 * Created by Korisnik on 1.2.2017..
 */
public class ChatMessageOut {

    private String username;

    private String chatMessagePayload;

    public ChatMessageOut(String username, String chatMessagePayload) {
        if (chatMessagePayload.length() >= 100 ){
            throw new ConstraintViolationException("too big chat message", null);
        }
        this.username = username;
        this.chatMessagePayload = chatMessagePayload;
    }

    public String getChatMessagePayload() {
        return chatMessagePayload;
    }

    public void setChatMessagePayload(String chatMessagePayload) {
        this.chatMessagePayload = chatMessagePayload;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
