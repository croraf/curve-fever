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


    public void addPosition(String playerName, Position position){

        positions.get(playerName).add(position);
    }


    //TODO currently return just one position other than ours
    public Map<String, Position> getLastPositionOfOtherPlayers (String playerName){

        Map<String, Position> lastPositionsOfOthers = new HashMap<>();

        for(Map.Entry <String, List<Position>> entry : positions.entrySet()){

            if ( ! entry.getKey().equals(playerName)) {
                List<Position> positionsOfOneOtherPlayer = entry.getValue();
                int size = positionsOfOneOtherPlayer.size();

                if (size == 0){
                    //todo return null instead of dummy empty position
                    lastPositionsOfOthers.put(playerName, new Position()) ;
                } else{
                    lastPositionsOfOthers.put(playerName, positionsOfOneOtherPlayer.get(size-1)) ;
                }

            }

        }

        return lastPositionsOfOthers;
    }


    public Map<String, Player> getIngamePlayers() {
        return ingamePlayers;
    }

    public void setIngamePlayers(Map<String, Player> ingamePlayers) {
        this.ingamePlayers = ingamePlayers;
    }

    public void addIngamePlayer(Player p){

        ingamePlayers.put(p.getName(), p);
        positions.put(p.getName(), new ArrayList<>());
    }

    public Player removeIngamePlayer(Player player){


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
