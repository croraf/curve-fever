package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.business.PlayerLogic;
import org.evedraf.examples.spring.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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

    @GetMapping
    @ResponseBody
    public List<Player> getPlayers(){

        //return new Wrapper(playerLogic.getPlayers());
        return playerLogic.getPlayers();
    }

    @GetMapping(value = "{id}")
    @ResponseBody
    public Player getPlayerById(@PathVariable(name = "id") int id ){

        return playerLogic.getPlayerById(id);
    }

    @GetMapping(value = "update/playerUpdateForm")
    public String getPlayerForm(){
        return "playerUpdateForm";
    }

    @PostMapping(value = "update/playerUpdateFormSubmit" /*value = "{id}"*/)
    public String updatePlayerById(/*@PathVariable(name = "id") int id,*/ @Valid @ModelAttribute Player player, BindingResult errors){

        if (errors.hasFieldErrors()){
            for (FieldError error : errors.getFieldErrors() ) {
                System.out.println(error.getField() + ": " + error.getRejectedValue() + " - " + error.getDefaultMessage());
            }
        }

        System.out.println("usao je u form1_submit");
        playerLogic.updatePlayerById(player);

        return "playerUpdateSuccess";
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
