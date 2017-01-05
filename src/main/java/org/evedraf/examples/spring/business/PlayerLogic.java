package org.evedraf.examples.spring.business;

import org.evedraf.examples.spring.dao.PlayerDao;
import org.evedraf.examples.spring.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Component
public class PlayerLogic {

    @Autowired
    private PlayerDao playerDao;

    public PlayerLogic(){
        System.out.println("PlayerLogic created");
    }

    @Transactional
    public List<Player> getPlayers() {

        return playerDao.getPlayers();
    }

    @Transactional
    public Player getPlayerById(int id) {

        return playerDao.getPlayerById(id);
    }

    @Transactional
    public void updatePlayerById(Player player) {

        playerDao.updatePlayer(player);
    }

    @Transactional
    public Player increasePlayerCoins(String playerName) {

        return playerDao.increasePlayerCoins(playerName);
    }
}
