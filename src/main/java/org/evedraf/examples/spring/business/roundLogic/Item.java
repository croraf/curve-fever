package org.evedraf.examples.spring.business.roundLogic;

/**
 *
 */
public class Item {

    private String type;

    public static final double itemRadius = 12;

    private Position position;

    public Item(String type, Position position) {
        this.type = type;
        this.position = position;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }
}
