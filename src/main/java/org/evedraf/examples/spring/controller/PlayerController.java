package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.business.PlayerLogic;
import org.evedraf.examples.spring.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlSeeAlso;
import java.util.List;


@RestController
public class PlayerController {

    @Autowired
    private PlayerLogic playerLogic;

    @RequestMapping(value = "/players/all", method = RequestMethod.GET)
    public List<Player> getPlayers(){

        //return new Wrapper(playerLogic.getPlayers());
        return playerLogic.getPlayers();
    }

    @RequestMapping(value = "/players/one/{id}", method = RequestMethod.GET)
    public Player getPlayerById(@PathVariable(name = "id") int id ){

        return playerLogic.getPlayerById(id);
    }
}

/*
@XmlRootElement (name = "players")
@XmlSeeAlso(Player.class)
class Wrapper{

    List player;

    public Wrapper() {
    }

    public Wrapper(List player) {
        this.player = player;
    }

    public List getPlayer() {
        return player;
    }

    public void setPlayer(List player) {
        this.player = player;
    }
}*/
