package org.evedraf.examples.spring.websocket;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.evedraf.examples.spring.business.roundLogic.MessageInHandlerLogic;
import org.evedraf.examples.spring.business.roundLogic.RoundLogic;
import org.evedraf.examples.spring.business.roundLogic.messages.PositionMessageFromClient;
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
public class WebSocketHandler extends TextWebSocketHandler {

    private static Map<WebSocketSession, Player> currentSessions = new HashMap<>();

    @Autowired
    private RoundLogic roundLogic;

    @Autowired
    private MessageInHandlerLogic messageInHandlerLogic;

    private static ObjectMapper mapper = new ObjectMapper();


    @Override
    public synchronized void afterConnectionEstablished(WebSocketSession session) throws Exception {

        Player user = (Player)session.getAttributes().get("user");
        currentSessions.put(session, user);

        /**
         * Sends previously connected users to newly established session only.
         */
        session.sendMessage(createGenericSocketMessage("previousUsers", roundLogic.getIngamePlayers()));

        roundLogic.addIngamePlayer(user);

        /**
         * Sends genericPayload to all sessions that we have a newly connected user.
         */
        broadcastMessage("userConnected", user);

    }

    @Override
    public synchronized void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {

        JsonNode rootNode =
                mapper.readTree(message.getPayload());

        JsonNode type = rootNode.path("type");
        JsonNode genericPayload = rootNode.path("genericPayload");

        messageInHandlerLogic.handleMessage(type, genericPayload, currentSessions.get(session).getName());

    }

    @Override
    public synchronized void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {

        Player user = (Player)session.getAttributes().get("user");
        roundLogic.removeIngamePlayer(user);
        currentSessions.remove(session);
        broadcastMessage("userDisconnected", user);
    }


    /**
     * Brodcast message to all connected sessions.
     * @param type Type of message
     * @param genericPayload Payload of message
     * @throws IOException
     */
    public static void broadcastMessage(String type, Object genericPayload){

        try {
            TextMessage message = createGenericSocketMessage(type, genericPayload);

            for (WebSocketSession session : currentSessions.keySet()) {

                if (!session.isOpen()) {
                    continue;
                }
                session.sendMessage(message);
            }
        } catch (IOException ex){
            throw new RuntimeException();
        }

    }

    private static TextMessage createGenericSocketMessage(String type, Object genericPayload) throws JsonProcessingException {

        return new TextMessage(mapper.writeValueAsString(new GenericSocketMessage(type, genericPayload)));
    }


    private static class GenericSocketMessage {

        private String type;

        private Object genericPayload;

        public GenericSocketMessage() {
        }

        public GenericSocketMessage(String type, Object genericPayload) {
            this.type = type;
            this.genericPayload = genericPayload;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public Object getGenericPayload() {
            return genericPayload;
        }

        public void setGenericPayload(Object genericPayload) {
            this.genericPayload = genericPayload;
        }
    }
}