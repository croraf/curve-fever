package org.evedraf.examples.spring.business.roundLogic;

import org.evedraf.examples.spring.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Lookup;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * Deals with all the server logic on round page.
 */
@Component
public class RoundLogic {


    private Map<String, Player> ingamePlayers = new HashMap<>();

    /**
     * all positions currently active on the board of all players that are in the game
     */
    private Map<String, List<Position>> allPositions = new HashMap<>();


    @Autowired
    private CollisionDetection collisionDetection;


    /**
     * Add position and check if there is a collision. If so, remove player from round.
     * @param playerName The player whose position is added to map.
     * @param newPosition The new position for that player.
     * @return true if there is collision for this position.
     */
    public synchronized boolean addPositionAndCheckCollision(String playerName, Position newPosition){

        if ( ! allPositions.containsKey(playerName) ){return false;}


        allPositions.get(playerName).add(newPosition);

        if ( collisionDetection.checkCollision(playerName, newPosition, allPositions)){

            System.out.println("sudar");
            allPositions.remove(playerName);
            return true;
        } else {

            return false;
        }
    }


    public synchronized Map<String, Position> getLastPositionOfAllPlayers(){

        Map<String, Position> lastPositionOfAllPlayers = new HashMap<>();

        for(Map.Entry <String, List<Position>> entry : allPositions.entrySet()){

            List<Position> positionsOfOneOtherPlayer = entry.getValue();
            int size = positionsOfOneOtherPlayer.size();

            if (size == 0){
                //todo check how null behaves, maybe remove completely
                lastPositionOfAllPlayers.put(entry.getKey(), null) ;
            } else{
                lastPositionOfAllPlayers.put(entry.getKey(), positionsOfOneOtherPlayer.get(size-1)) ;
            }

        }

        return lastPositionOfAllPlayers;
    }


    public synchronized Map<String, Player> getIngamePlayers() {
        return ingamePlayers;
    }

    public synchronized void setIngamePlayers(Map<String, Player> ingamePlayers) {
        this.ingamePlayers = ingamePlayers;
    }

    public synchronized void addIngamePlayer(Player p){

        ingamePlayers.put(p.getName(), p);
        allPositions.put(p.getName(), new ArrayList<>());
    }

    public synchronized void removeIngamePlayer(Player player){

        allPositions.remove(player.getName());
        ingamePlayers.remove(player.getName());

        /**
         * shut down MainLoop thread if all players left from round.
         */
        if (ingamePlayers.isEmpty()){

            mainLoop.setRoundAlive(false);
        }
    }





    private Thread mainThread = null;
    @Autowired
    private MainLoop mainLoop;
    /**
     * Check if round is alive. If so then shut it and open it, if not than just open it.
     */
    public synchronized void restartRound(){

        /**
         * If MainLoop thread is alive shut it down.
         */
        if (mainThread != null && mainThread.isAlive()){

            mainLoop.setRoundAlive(false);
            try {
                mainThread.join();
                System.out.println("MainLoop thread was shut down!");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        startNewRound();
    }

    /**
     * Starts new round
     */
    private void startNewRound(){

        /*mainLoop = getFreshMainLoop();*/
        mainLoop.setRoundAlive(true);

        for (String username : ingamePlayers.keySet()){
            allPositions.put(username, new ArrayList<>());
        }

        mainThread = new Thread(mainLoop);

        System.gc();
        mainThread.start();
    }

    /*@Lookup
    protected MainLoop getFreshMainLoop(){
        return null;
    };*/


}
