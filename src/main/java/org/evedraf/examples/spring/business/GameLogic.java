package org.evedraf.examples.spring.business;

import org.evedraf.examples.spring.model.Player;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Korisnik on 12.1.2017..
 */
@Component
public class GameLogic {

    private List<Player> ingamePlayers = new ArrayList<>();

    private List<Position> positions = new ArrayList<>();

    public List<Position> getPositions() {
        return positions;
    }

    public void setPositions(List<Position> positions) {
        this.positions = positions;
    }

    public void addPosition(Position position){
        positions.add(position);
    }



    private List<Position> positions2 = new ArrayList<>();

    public List<Position> getPositions2() {
        return positions2;
    }

    public void setPositions2(List<Position> positions2) {
        this.positions2 = positions2;
    }

    public void addPosition2(Position position){
        positions2.add(position);
    }




    public List<Player> getIngamePlayers() {
        return ingamePlayers;
    }

    public void setIngamePlayers(List<Player> ingamePlayers) {
        this.ingamePlayers = ingamePlayers;
    }
}
