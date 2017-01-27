package org.evedraf.examples.spring.business.roundLogic;

import com.fasterxml.jackson.core.JsonProcessingException;
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

    public void handleMessage(String type, Object genericPayload) throws IOException {

        switch (type){
            case "positionsUpdate":
                handlePositionInMessage(genericPayload);
                break;
            case "chatMessage":
                ControlSocketHandler.broadcastMessage("chatMessage", genericPayload);
                break;
            default:
                System.out.println("Message in type unrecognized!");
        }
    }


    private void handlePositionInMessage(Object positionMessageFromClient) throws IOException {

        Map<String, >

        PositionMessageFromClient positionMessage =
                new PositionMessageFromClient(

                        (Map)positionMessageFromClient);

        if (positionMessageFromClient.getPosition() != null){
            boolean collision =
                    roundLogic.addPositionAndCheckCollision(
                            positionMessageFromClient.getPlayerName(), positionMessageFromClient.getPosition());

            /*if (collision)*/
        }

        Map<String, Position> otherPlayerPosition = roundLogic.getLastPositionOfOtherPlayers();

        ControlSocketHandler.broadcastMessage("positionsUpdate", otherPlayerPosition);

    }


}
