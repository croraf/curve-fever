package org.evedraf.examples.spring.business.roundLogic;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.evedraf.examples.spring.business.roundLogic.messages.ChatMessageOut;
import org.evedraf.examples.spring.websocket.WebSocketHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class MessageInHandlerLogic {

    @Autowired
    private RoundLogic roundLogic;

    ObjectMapper mapper = new ObjectMapper();

    public void handleMessage(JsonNode type, JsonNode genericPayload, String username) {

        switch (type.textValue()){
            case "directionUpdate":
                changeDirection(genericPayload, username);
                break;
            case "chatMessage":
                WebSocketHandler.broadcastMessage("chatMessage", new ChatMessageOut(username, genericPayload.textValue()));
                break;
            case "restart":
                roundLogic.restartRound();
                break;
            default:
                System.out.println("Message in type unrecognized!");
        }
    }


    private void changeDirection(JsonNode genericPayload, String username){

        String direction = genericPayload.asText();
        roundLogic.getIngamePlayers().get(username).steerDirection = direction;

    }


}
