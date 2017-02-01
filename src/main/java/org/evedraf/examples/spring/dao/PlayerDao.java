package org.evedraf.examples.spring.dao;


import org.evedraf.examples.spring.model.Player;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class PlayerDao {

    @Autowired
    SessionFactory sessionFactory;

    @Transactional
    public List<Player> getPlayers(){

        Session session = sessionFactory.getCurrentSession();

        List<Player> players =
                session.createQuery("FROM Player p ORDER BY p.id ASC", Player.class).list();

        return players;
    }

    @Transactional
    public Player getPlayerByPrimaryKey(String name){

        Session session = sessionFactory.getCurrentSession();
        return session.get(Player.class, name);
    }

    @Transactional
    public Player getPlayerById(int id){

        Query query = sessionFactory.getCurrentSession().createQuery(
                "FROM Player p WHERE id = :id");
        query.setParameter("id", id);

        return (Player)query.uniqueResult();
    }

    @Transactional
    public void updatePlayer(Player player){

        Player playerOld = sessionFactory.getCurrentSession().get(Player.class, player.getId());
        playerOld.setCoins(player.getCoins());
        playerOld.setPoints(player.getPoints());

        //TODO hopefully here it is committed
    }

    @Transactional
    public Player loginPlayer(String playerName) {

        Session session = sessionFactory.getCurrentSession();
        Player player = session.get(Player.class, playerName);

        if (player == null) {

            Player newPlayer = new Player(playerName);
            session.persist(newPlayer);
            return newPlayer;

        }

        player.setCoins(player.getCoins() + 1);
        return player;
    }
}