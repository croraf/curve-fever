package org.evedraf.examples.spring.business.roundLogic.messages;

import org.evedraf.examples.spring.validation.ValidationConstants;

import javax.validation.ConstraintViolationException;
import javax.validation.ValidationException;

/**
 * Created by Korisnik on 1.2.2017..
 */
public class ChatMessageOut {

    private String username;

    private String chatMessagePayload;

    public ChatMessageOut(String username, String chatMessagePayload) {

        this.username = username;

        if (chatMessagePayload.length() >= ValidationConstants.chatMessageMaxLength){
            this.chatMessagePayload =
                    "[message too big: " + chatMessagePayload.length() +
                            " tokens, limit is " +  ValidationConstants.chatMessageMaxLength + "]";
        } else {
            this.chatMessagePayload = chatMessagePayload;
        }

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
