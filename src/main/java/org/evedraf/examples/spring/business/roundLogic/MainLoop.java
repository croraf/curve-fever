package org.evedraf.examples.spring.business.roundLogic;

import org.evedraf.examples.spring.model.Player;
import org.evedraf.examples.spring.websocket.WebSocketHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

/**
 * Used in round logic when host restarts the round.
 * Created by Korisnik on 27.1.2017..
 */
@Component
@Scope (ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class MainLoop implements Runnable {

    private static final double CANVAS_WIDTH = 600;
    private static final double CANVAS_HEIGHT = 520;
    private static final int refreshPeriod = 60;

    @Autowired
    private RoundLogic roundLogic;

    private volatile boolean roundAlive;

    @Override
    public void run() {

        WebSocketHandler.broadcastMessage("restartConfirmed", null);

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }


        /**
         * initial player positions and direction setup
         */
        for (Player player : roundLogic.getIngamePlayers().values() ){

            player.position = new Position( Math.random() * CANVAS_WIDTH, Math.random() * CANVAS_HEIGHT);
            player.direction = Math.random() * 2 * Math.PI;
            player.setAlive(true);
        }


        /**
         * main game loop
         */
        while (roundAlive) {


            itemsLogic();


            for (Player player : roundLogic.getIngamePlayers().values() ) {

                //skip update of dead players
                if ( ! player.isAlive()) continue;

                roundLogic.addPositionAndCheckCollisionAndItemPickup(
                        player.getName(), new Position(player.position.x, player.position.y));

                if (player.steerDirection.equals("left")){
                    player.direction -= Math.PI/24;
                } else if (player.steerDirection.equals("right")){
                    player.direction += Math.PI/24;
                }

                player.position.x = (player.position.x + player.getSpeed()*Math.cos(player.direction)) % CANVAS_WIDTH;
                if (player.position.x < 0) { player.position.x += CANVAS_WIDTH; }
                player.position.y = (player.position.y + player.getSpeed()*Math.sin(player.direction)) % CANVAS_HEIGHT;
                if (player.position.y < 0) { player.position.y += CANVAS_HEIGHT; }

            }

            WebSocketHandler.broadcastMessage("positionsUpdate", roundLogic.getLastPositionOfAllPlayers());

            try {
                Thread.sleep(refreshPeriod);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

    }

    private void itemsLogic(){

        double randomValue;
        if ( (randomValue = Math.random()) < 0.008){

            String itemType;
            if (randomValue < 0.008/2) {
                itemType = "slow";
            } else {//if (randomValue >= 0.008/2){
                itemType = "fast";
            }
            double x = Math.random()*CANVAS_WIDTH;
            double y = Math.random()*CANVAS_HEIGHT;
            Item newItem = new Item(itemType, new Position(x, y));
            WebSocketHandler.broadcastMessage("addItem", newItem);

            roundLogic.getAllItems().add(newItem);
        }
    }

    public boolean isRoundAlive() {
        return roundAlive;
    }

    public void setRoundAlive(boolean roundAlive) {
        this.roundAlive = roundAlive;
    }
}
