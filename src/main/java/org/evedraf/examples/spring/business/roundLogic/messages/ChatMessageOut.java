package org.evedraf.examples.spring.business.roundLogic.messages;

/**
 * Created by Korisnik on 1.2.2017..
 */
public class ChatMessageOut {

    private String username;

    private String chatMessagePayload;

    public ChatMessageOut(String username, String chatMessagePayload) {
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
