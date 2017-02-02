package org.evedraf.examples.spring.business.roundLogic;

import org.evedraf.examples.spring.websocket.WebSocketHandler;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.ListIterator;

/**
 *
 */
@Component
public class ItemPickupDetection {


    public void checkItemPickup(Position newPosition, List<Item> allItems) {

        ListIterator<Item> iterator = allItems.listIterator();
        while (iterator.hasNext()){

            Item item = iterator.next();

            if ( Math.sqrt( Math.pow(item.getPosition().x-newPosition.x, 2) +
                    Math.pow(item.getPosition().y-newPosition.y, 2) ) < Item.itemRadius+4){

                WebSocketHandler.broadcastMessage("itemPickup", iterator.nextIndex()-1);
                iterator.remove();
            };
        }
    }
}
