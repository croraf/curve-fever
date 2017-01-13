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
                session.createQuery("FROM Player p ORDER BY p.id ASC", Player.class).list();

        return players;
    }

    public Player getPlayerById(int id){

        return null;
        /*return sessionFactory.getCurrentSession().createQuery(
                //"", Player.class
        );*/
    }

    public void updatePlayer(Player player){

        Player playerOld = sessionFactory.getCurrentSession().get(Player.class, player.getId());
        playerOld.setCoins(player.getCoins());
        playerOld.setPoints(player.getPoints());

        //TODO hopefully here it is commited
    }

    public Player increasePlayerCoins(String playerName) {

        Session session = sessionFactory.getCurrentSession();
        Player player = session.get(Player.class, playerName);

        if (player == null) {

            Player newplayer = new Player(playerName);
            session.persist(newplayer);
            return newplayer;

        }

        player.setCoins(player.getCoins() + 1);
        return player;


    }
}