package org.evedraf.examples.spring.business.roundLogic.messages;

import org.evedraf.examples.spring.business.roundLogic.Position;

/**
 */
public class PositionMessageFromClient{

    public String playerName;

    public Position position;

    public PositionMessageFromClient() {
    }

    public PositionMessageFromClient(String playerName, Position position) {
        this.playerName = playerName;
        this.position = position;
    }

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
