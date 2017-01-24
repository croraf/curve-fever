package org.evedraf.examples.spring.websocket;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.evedraf.examples.spring.business.roundLogic.Position;
import org.evedraf.examples.spring.business.roundLogic.PositionMessageFromClient;
import org.evedraf.examples.spring.business.roundLogic.RoundLogic;
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
public class PositionsSocketHandler extends TextWebSocketHandler {

    private final List<WebSocketSession> currentSessions = new ArrayList<>();

    private final ObjectMapper mapper = new ObjectMapper();


    @Autowired
    private RoundLogic roundLogic;

    @Override
    public synchronized void afterConnectionEstablished(WebSocketSession session) throws Exception {

        currentSessions.add(session);
    }

    @Override
    public synchronized void handleTextMessage(WebSocketSession session, TextMessage message) {

        try {
            PositionMessageFromClient messageIn =
                    mapper.readValue(message.getPayload(), PositionMessageFromClient.class);

            if (messageIn.getPosition() != null){
                roundLogic.addPosition(messageIn.getPlayerName(), messageIn.getPosition());
            }

            broadcastUpdate();

        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    private void broadcastUpdate() throws IOException{

        Map<String, Position> otherPlayerPosition = roundLogic.getLastPositionOfOtherPlayers();

        for (WebSocketSession session: currentSessions) {

            if (!session.isOpen()) {continue;}
            session.sendMessage(new TextMessage(mapper.writeValueAsString(otherPlayerPosition)));
        }

    }

    @Override
    public synchronized void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {

        currentSessions.remove(session);
        System.out.println("PositionsSocket connection of '" + "..." + "' closed! - " + status);
    }

}
