package org.evedraf.examples.spring.business.roundLogic;

import org.evedraf.examples.spring.model.Player;
import org.evedraf.examples.spring.websocket.WebSocketHandler;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.ListIterator;

/**
 *
 */
@Component
public class ItemPickupLogic {


    public void checkItemPickup(Position newPosition, List<Item> allItems, Player player) {

        ListIterator<Item> iterator = allItems.listIterator();
        while (iterator.hasNext()){

            Item item = iterator.next();

            if ( Math.sqrt( Math.pow(item.getPosition().x-newPosition.x, 2) +
                    Math.pow(item.getPosition().y-newPosition.y, 2) ) < Item.itemRadius+4){

                //iterator.nextIndex() is ok if it is last element because it returns list size then
                WebSocketHandler.broadcastMessage("itemPickup", iterator.nextIndex()-1);
                iterator.remove();
                applyItemEffect(player);
            };
        }

    }

    private void applyItemEffect(Player player){

        player.reduceSpeed();

        new Thread(new RemoveItemEffectRunnable(player)).start();
    }

    private class RemoveItemEffectRunnable implements Runnable{

        Player player;
        public RemoveItemEffectRunnable(Player player){
            this.player = player;
        }
        @Override
        public void run() {
            try {
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            player.increaseSpeed();
        }
    }
}
