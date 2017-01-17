package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.dao.PlayerDao;
import org.evedraf.examples.spring.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequestMapping ("players")
public class PlayersController {

    @Autowired
    private PlayerDao playerDao;

    @GetMapping
    @ResponseBody
    public List<Player> getPlayers (){
        return playerDao.getPlayers();
    }

    @GetMapping(value = "{id}")
    @ResponseBody
    public Player getPlayerById(@PathVariable(name = "id") int id ){

        return playerDao.getPlayerById(id);
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
