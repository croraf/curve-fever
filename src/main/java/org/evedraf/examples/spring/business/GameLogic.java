package org.evedraf.examples.spring.business;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Korisnik on 12.1.2017..
 */
@Component
public class GameLogic {

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
}
