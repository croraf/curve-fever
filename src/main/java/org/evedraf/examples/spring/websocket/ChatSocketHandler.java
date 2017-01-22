package org.evedraf.examples.spring.websocket;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Korisnik on 22.1.2017..
 */
public class ChatSocketHandler  extends TextWebSocketHandler {

    private static final List<WebSocketSession> currentSessions = new ArrayList<>();

    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    public synchronized void afterConnectionEstablished(WebSocketSession session) throws Exception {

        currentSessions.add(session);
    }

    @Override
    public synchronized void handleTextMessage(WebSocketSession session, TextMessage message) {

        try{

            broadcastChatMessage(message.getPayload());
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public static synchronized void broadcastChatMessage(String message) throws IOException{

        for (WebSocketSession session: currentSessions) {

            session.sendMessage(new TextMessage(message));
        }

    }

    @Override
    public synchronized void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {

        currentSessions.remove(session);
        System.out.println("WebSocket connection closed! - " + status);
    }
}
