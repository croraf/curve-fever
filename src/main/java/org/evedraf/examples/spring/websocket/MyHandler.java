package org.evedraf.examples.spring.websocket;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.evedraf.examples.spring.business.Position;
import org.evedraf.examples.spring.business.RoundLogic;
import org.evedraf.examples.spring.business.UpdateMessageFromClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by Korisnik on 15.1.2017..
 */
public class MyHandler extends TextWebSocketHandler {

    private final ObjectMapper mapper = new ObjectMapper();

    private final List<WebSocketSession> currentSessions = new ArrayList<>();

    @Autowired
    private RoundLogic roundLogic;

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {

        currentSessions.add(session);
    }

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) {

        try {
            UpdateMessageFromClient messageIn =
                    mapper.readValue(message.getPayload(), UpdateMessageFromClient.class);

            if (messageIn.getPosition() != null){
                roundLogic.addPosition(messageIn.getPlayerName(), messageIn.getPosition());
            }

            broadcastPositions();

            logPositions(messageIn);

        } catch (IOException e) {

            e.printStackTrace();
        }

    }

    private void logPositions(UpdateMessageFromClient messageIn) {

        if (messageIn.getPosition() == null){
            System.out.println(messageIn.getPlayerName() + ": null");
        } else {
            System.out.println(messageIn.getPlayerName() + ": " + messageIn.getPosition().x + ", " + messageIn.getPosition().y);
        }
    }

    private void broadcastPositions() throws IOException{

        Map<String, Position> otherPlayerPosition = roundLogic.getLastPositionOfOtherPlayers();

        for (WebSocketSession session: currentSessions) {

            session.sendMessage(new TextMessage(mapper.writeValueAsString(otherPlayerPosition)));
        }

    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {

        currentSessions.remove(session);
        System.out.println("WebSocket connection closed! - " + status);
    }

}
