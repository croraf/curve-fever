package org.evedraf.examples.spring.websocket;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.evedraf.examples.spring.business.roundLogic.ControlMessage;
import org.evedraf.examples.spring.business.roundLogic.RoundLogic;
import org.evedraf.examples.spring.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Korisnik on 24.1.2017..
 */
public class ControlSocketHandler extends TextWebSocketHandler {

    private final Map<WebSocketSession, Player> currentSessions = new HashMap<>();

    @Autowired
    private RoundLogic roundLogic;

    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    public synchronized void afterConnectionEstablished(WebSocketSession session) throws Exception {

        Player user = (Player)session.getAttributes().get("user");
        currentSessions.put(session, user);

        sendPreviousUsers(session);

        roundLogic.addIngamePlayer(user);

        broadcastControlMessage(mapper.writeValueAsString(new ControlMessage("userConnected", user)));

        ChatSocketHandler.broadcastChatMessage("[ " + user.getName() + " connected ]");
    }

    @Override
    public synchronized void handleTextMessage(WebSocketSession session, TextMessage message) {

    }

    public void broadcastControlMessage(String message) throws IOException{

        for (WebSocketSession session: currentSessions.keySet()) {

            if (!session.isOpen()) {continue;}
            session.sendMessage(new TextMessage(message));
        }

    }

    public void sendPreviousUsers (WebSocketSession session) throws IOException {

        session.sendMessage(new TextMessage(
                mapper.writeValueAsString(
                        new ControlMessage("previousUsers", roundLogic.getIngamePlayers()))));
    }

    @Override
    public synchronized void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {

        Player user = (Player)session.getAttributes().get("user");
        roundLogic.removeIngamePlayer(user);
        currentSessions.remove(session);
        broadcastControlMessage(mapper.writeValueAsString(new ControlMessage("userDisconnected", user)));
        ChatSocketHandler.broadcastChatMessage("[ " + user.getName() + " disconnected ]");
    }
}