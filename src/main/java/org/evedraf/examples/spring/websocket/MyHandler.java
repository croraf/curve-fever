package org.evedraf.examples.spring.websocket;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.evedraf.examples.spring.business.UpdateMessageFromClient;
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

            System.out.println(messageIn);
        } catch (IOException e) {

            e.printStackTrace();
        }

    }

}
