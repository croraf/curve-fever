package org.evedraf.examples.spring.business.roundLogic;

import org.evedraf.examples.spring.business.roundLogic.Position;

/**
 */
public class PositionMessageFromClient {

    public Position position;

    public String playerName;


    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }
}