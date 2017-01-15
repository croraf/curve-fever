package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.business.RoundLogic;
import org.evedraf.examples.spring.business.playerSettings.PlayerLogic;
import org.evedraf.examples.spring.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;

/**
 * Created by Korisnik on 14.1.2017..
 */

@Controller
@RequestMapping("/round")
public class EnterRoundController {

    @Autowired
    private RoundLogic roundLogic;
    @Autowired
    private PlayerLogic playerLogic;

    @GetMapping("/enter/{id}")
    public String enterRound(@PathVariable("id") int id, Model model){

        Player p = playerLogic.getPlayerById(id);
        roundLogic.addIngamePlayer(p);

        //model.addAttribute("player", playerLogic.getPlayerById(id));
        model.addAttribute("player", p);

        return "roundScreen";
    }

    @GetMapping("/exit/{id}")
    public String exitRound(@PathVariable("id") int id){

        Player p = playerLogic.getPlayerById(id);
        roundLogic.removeIngamePlayer(p);

        return "loginScreen";
    }
}
