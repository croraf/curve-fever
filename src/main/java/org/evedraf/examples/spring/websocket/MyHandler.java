package org.evedraf.examples.spring.websocket;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.evedraf.examples.spring.business.UpdateMessageFromClient;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;

/**
 * Created by Korisnik on 15.1.2017..
 */
public class MyHandler extends TextWebSocketHandler {

    ObjectMapper mapper = new ObjectMapper();


    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) {

        try {
            UpdateMessageFromClient messageIn =
                    mapper.readValue(message.getPayload(), UpdateMessageFromClient.class);

            if (messageIn.getPosition() == null){
                System.out.println(messageIn.getPlayerName() + ": null");
            } else {
                System.out.println(messageIn.getPlayerName() + ": " + messageIn.getPosition().x + ", " + messageIn.getPosition().y);
            }
        } catch (IOException e) {

            e.printStackTrace();
        }

    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {

        System.out.println("WebSocket connection closed! - " + status);
    }

}
