package org.evedraf.examples.spring.business;

import org.evedraf.examples.spring.model.Player;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Korisnik on 12.1.2017..
 */
@Component
public class RoundLogic {

    private Map<String, Player> ingamePlayers = new HashMap<>();


    private Map<String, List<Position>> allPositions = new HashMap<>();


    public synchronized void addPosition(String playerName, Position position){

        if (! allPositions.containsKey(playerName)){return;}


        allPositions.get(playerName).add(position);

        if ( checkCollision(playerName, position) == true ){
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


        allPositions.remove(player.getName());

        return ingamePlayers.remove(player.getName());
    }



    public synchronized boolean checkCollision(String playerName, Position newPosition){

        for (Map.Entry<String, List<Position>> entryOfOnePlayer : allPositions.entrySet()) {

            if (playerName.equals(entryOfOnePlayer.getKey())){
                //if this is the same player than take care his head doesn't collide with head~1

                List<Position> positionsOfCurrentPlayer = allPositions.get(playerName);

                for (int i = 0; i < positionsOfCurrentPlayer.size() - 5; i++) {

                    if (checkPointCollision (positionsOfCurrentPlayer.get(i), newPosition)){
                        return true;
                    };
                }
            } else{

                for (Position position : entryOfOnePlayer.getValue()) {

                    if (checkPointCollision(position, newPosition)){
                        return true;
                    }
                }
            }
        }

        return false;
    }

    private boolean checkPointCollision(Position position1, Position position2) {

        return Math.sqrt( Math.pow(position1.x-position2.x, 2) + Math.pow(position1.y-position2.y, 2) )
                < 8;
    }


}
