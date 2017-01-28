package org.evedraf.examples.spring.business.roundLogic;

import org.evedraf.examples.spring.model.Player;
import org.evedraf.examples.spring.websocket.ControlSocketHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Declared as a Spring component of prototype cardinality in Round Logic component.
 * Created by Korisnik on 27.1.2017..
 */
public class MainLoop implements Runnable {

    private static final double CANVAS_WIDTH = 600;
    private static final double CANVAS_HEIGHT = 520;
    private static final int refreshPeriod = 70;

    private static volatile String steerDirection = "ahead";

    private RoundLogic roundLogic;

    @Override
    public void run() {

        ControlSocketHandler.broadcastMessage("chatMessage", "new round starting...");

        for (Player player : roundLogic.getIngamePlayers().values() ){

            player.position = new Position( Math.random() * CANVAS_WIDTH, Math.random() * CANVAS_HEIGHT);
            player.direction = Math.random() * 2 * Math.PI;
        }


        for (int i = 0; i < 500; i++) {

            for (Player player : roundLogic.getIngamePlayers().values() ) {

                roundLogic.addPositionAndCheckCollision(
                        player.getName(), new Position(player.position.x, player.position.y));

                if (steerDirection.equals("left")){
                    player.direction -= Math.PI/24;
                } else if (steerDirection.equals("right")){
                    player.direction += Math.PI/24;
                }

                player.position.x = (player.position.x + player.speed*Math.cos(player.direction)) % CANVAS_WIDTH;
                if (player.position.x < 0) { player.position.x += CANVAS_WIDTH; }
                player.position.y = (player.position.y + player.speed*Math.sin(player.direction)) % CANVAS_HEIGHT;
                if (player.position.y < 0) { player.position.y += CANVAS_HEIGHT; }

            }

            ControlSocketHandler.broadcastMessage("positionsUpdate", roundLogic.getLastPositionOfAllPlayers());

            try {
                Thread.sleep(refreshPeriod);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

    }

    public static void setSteerDirection(String steerDirection) {
        MainLoop.steerDirection = steerDirection;
    }


    public RoundLogic getRoundLogic() {
        return roundLogic;
    }

    public void setRoundLogic(RoundLogic roundLogic) {
        this.roundLogic = roundLogic;
    }
}
