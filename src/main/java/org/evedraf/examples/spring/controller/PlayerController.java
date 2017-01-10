package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.business.PlayerLogic;
import org.evedraf.examples.spring.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.List;


@Controller
@RequestMapping ("players")
public class PlayerController {

    @Autowired
    private PlayerLogic playerLogic;

    @GetMapping ("/a")
    @ResponseBody
    public List<Player> getPlayersA(){

        //return new Wrapper(playerLogic.getPlayers());
        return playerLogic.getPlayers();
    }

    @GetMapping
    public String getPlayersJSP(Model model){

        model.addAttribute("players", playerLogic.getPlayers());

        return "battleScreen";
    }

    @GetMapping ("/all")
    @ResponseBody
    public List<Player> getPlayers (){
        return playerLogic.getPlayers();
    }

    @GetMapping(value = "{id}")
    @ResponseBody
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
