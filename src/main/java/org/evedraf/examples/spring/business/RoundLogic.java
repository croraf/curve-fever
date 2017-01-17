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


    private Map<String, List<Position>> positions = new HashMap<>();


    public synchronized void addPosition(String playerName, Position position){

        positions.get(playerName).add(position);
    }


    //TODO currently return just one position other than ours
    public synchronized Map<String, Position> getLastPositionOfOtherPlayers (){

        Map<String, Position> lastPositionsOfOthers = new HashMap<>();

        for(Map.Entry <String, List<Position>> entry : positions.entrySet()){

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
        positions.put(p.getName(), new ArrayList<>());
    }

    public synchronized Player removeIngamePlayer(Player player){


        positions.remove(player.getName());

        return ingamePlayers.remove(player.getName());
    }



    /* to remove
    public Player getIngamePlayer(String name){
        for (Player p : ingamePlayers){
            if (p.getName().equals(name)) {
                return p;
            }
        }

        return null;
    }*/


}
