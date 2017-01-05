package org.evedraf.examples.spring.dao;


import org.evedraf.examples.spring.model.Player;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@Repository
public class PlayerDao {

    @Autowired
    SessionFactory sessionFactory;


    public List<Player> getPlayers(){

        Session session = sessionFactory.getCurrentSession();

        List<Player> players =
                session.createQuery("FROM Player", Player.class).list();

        return players;
    }

    public Player getPlayerById(int id){

        return sessionFactory.getCurrentSession().get(Player.class, id);
    }

    public void updatePlayer(Player player){

        Player playerOld = sessionFactory.getCurrentSession().get(Player.class, player.getId());
        playerOld.setCoins(player.getCoins());
        playerOld.setPoints(player.getPoints());

        //TODO hopefully here it is commited
    }

    public Player increasePlayerCoins(String playerName) {

        Player player = sessionFactory.getCurrentSession().get(Player.class, playerName);
        player.setCoins(player.getCoins() + 1);
        return player;
    }
}