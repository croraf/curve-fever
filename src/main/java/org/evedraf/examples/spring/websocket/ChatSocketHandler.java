package org.evedraf.examples.spring.websocket;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.evedraf.examples.spring.business.roundLogic.RoundLogic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Korisnik on 22.1.2017..
 */
public class ChatSocketHandler extends TextWebSocketHandler {

    private static final Map<WebSocketSession, String> currentSessions = new HashMap<>();

    @Autowired
    private RoundLogic roundLogic;


    @Override
    public synchronized void afterConnectionEstablished(WebSocketSession session) throws Exception {

        String username = (String)session.getAttributes().get("username");
        currentSessions.put(session, username);
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

        for (WebSocketSession session: currentSessions.keySet()) {

            if (!session.isOpen()) {continue;}
            session.sendMessage(new TextMessage(message));
        }

    }

    @Override
    public synchronized void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {

        currentSessions.remove(session);
    }
}