package org.evedraf.examples.spring.business.roundLogic;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.evedraf.examples.spring.business.roundLogic.messages.PositionMessageFromClient;
import org.evedraf.examples.spring.websocket.ControlSocketHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Map;

@Component
public class MessageInHandlerLogic {

    @Autowired
    private RoundLogic roundLogic;

    ObjectMapper mapper = new ObjectMapper();

    public void handleMessage(JsonNode type, JsonNode genericPayload) throws IOException {

        switch (type.textValue()){
            case "positionsUpdate":
                handlePositionInMessage(genericPayload);
                break;
            case "chatMessage":
                ControlSocketHandler.broadcastMessage("chatMessage", genericPayload.textValue());
                break;
            default:
                System.out.println("Message in type unrecognized!");
        }
    }


    private void handlePositionInMessage(JsonNode genericPayload) throws IOException {

        PositionMessageFromClient positionMessageFromClient = mapper.treeToValue(genericPayload, PositionMessageFromClient.class);

        if (positionMessageFromClient.getPosition() != null){
            boolean collision =
                    roundLogic.addPositionAndCheckCollision(
                            positionMessageFromClient.getPlayerName(), positionMessageFromClient.getPosition());



            if (collision) {/*todo*/ }
        }

        /*Map<String, Position> lastPositionOfAllPlayers = roundLogic.getLastPositionOfAllPlayers();

        ControlSocketHandler.broadcastMessage("positionsUpdate", lastPositionOfAllPlayers);*/

    }


}
