package org.evedraf.examples.spring.business.roundLogic;

import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

/**
 *
 * Implements collision detection functionality
 */

@Component
public class CollisionDetection {

    public boolean checkCollision(String playerName, Position newPosition, Map<String, List<Position>> allPositions){

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
