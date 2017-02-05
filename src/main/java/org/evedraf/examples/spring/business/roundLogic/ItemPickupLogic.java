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
                applyItemEffect(player, item);
            };
        }

    }

    private void applyItemEffect(Player player, Item item){

        switch (item.getType()){

            case "slow":
                player.reduceSpeed();
                break;
            case "fast":
                player.increaseSpeed();
                break;
        }


        new Thread(new RemoveItemEffectRunnable(player, item)).start();
    }

    private class RemoveItemEffectRunnable implements Runnable{

        Player player;
        private Item item;

        public RemoveItemEffectRunnable(Player player, Item item){

            this.player = player;
            this.item = item;
        }

        @Override
        public void run() {
            try {
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            switch (item.getType()){

                case "slow":
                    player.increaseSpeed();
                    break;
                case "fast":
                    player.reduceSpeed();
                    break;
            }
        }
    }
}
