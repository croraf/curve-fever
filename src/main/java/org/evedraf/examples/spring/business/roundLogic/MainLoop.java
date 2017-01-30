package org.evedraf.examples.spring.business.roundLogic;

import org.evedraf.examples.spring.model.Player;
import org.evedraf.examples.spring.websocket.ControlSocketHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Used in round logic when host restarts the round.
 * Created by Korisnik on 27.1.2017..
 */
@Component
@Scope (ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class MainLoop implements Runnable {

    private static final double CANVAS_WIDTH = 600;
    private static final double CANVAS_HEIGHT = 520;
    private static final int refreshPeriod = 64;

    @Autowired
    private RoundLogic roundLogic;

    @Override
    public void run() {

        ControlSocketHandler.broadcastMessage("chatMessage", "new round starting...");

        /**
         * initial player positions and direction setup
         */
        for (Player player : roundLogic.getIngamePlayers().values() ){

            player.position = new Position( Math.random() * CANVAS_WIDTH, Math.random() * CANVAS_HEIGHT);
            player.direction = Math.random() * 2 * Math.PI;
        }

        /**
         * main game loop
         */
        for (int i = 0; i < 300; i++) {

            for (Player player : roundLogic.getIngamePlayers().values() ) {

                roundLogic.addPositionAndCheckCollision(
                        player.getName(), new Position(player.position.x, player.position.y));

                if (player.steerDirection.equals("left")){
                    player.direction -= Math.PI/24;
                } else if (player.steerDirection.equals("right")){
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
}
