package org.evedraf.examples.spring.business.roundLogic;

import org.evedraf.examples.spring.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
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


    public synchronized void addPosition(String playerName, Position newPosition){

        if ( ! allPositions.containsKey(playerName) ){return;}


        allPositions.get(playerName).add(newPosition);

        if ( collisionDetection.checkCollision(playerName, newPosition, allPositions)){
            System.out.println("sudar");
            allPositions.remove(playerName);
        };
    }


    public synchronized Map<String, Position> getLastPositionOfOtherPlayers (){

        Map<String, Position> lastPositionsOfOthers = new HashMap<>();

        for(Map.Entry <String, List<Position>> entry : allPositions.entrySet()){

            List<Position> positionsOfOneOtherPlayer = entry.getValue();
            int size = positionsOfOneOtherPlayer.size();

            if (size == 0){
                //todo check how null behaves, maybe remove completely
                lastPositionsOfOthers.put(entry.getKey(), null) ;
            } else{
                lastPositionsOfOthers.put(entry.getKey(), positionsOfOneOtherPlayer.get(size-1)) ;
            }

        }

        return lastPositionsOfOthers;
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

    public synchronized Player removeIngamePlayer(Player player){


        return removeIngamePlayerByName(player.getName());
    }

    public synchronized Player removeIngamePlayerByName(String playerName){


        allPositions.remove(playerName);

        return ingamePlayers.remove(playerName);
    }






}
