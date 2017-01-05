package org.evedraf.examples.spring.dao;


import org.evedraf.examples.spring.model.Player;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.List;

@Component
public class PlayerDao {

   /* @Autowired
    SessionFactory sessionFactory;
*/

    public List<Player> getPlayers(){


        List<Player> players = new ArrayList<Player>();
        players.add(new Player(1, 22, 30));
        players.add(new Player(2, 20, 31));

        return players;
    }

    public Player getPlayerById(int id){

        return new Player(id, 20, 30);
    }

    public void updatePlayer(Player player){

        return;

        //TODO hopefully here it is commited
    }
}