package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.business.roundLogic.RoundLogic;
import org.evedraf.examples.spring.dao.PlayerDao;
import org.evedraf.examples.spring.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

/**
 * Created by Korisnik on 14.1.2017..
 */

@Controller
@RequestMapping("/round")
public class RoundController {

    @Autowired
    private RoundLogic roundLogic;
    @Autowired
    private PlayerDao playerDao;

    @GetMapping("/enter")
    public String enterRound(
            @RequestParam("username") String username, @RequestParam("color") String color, Model model, HttpSession httpSession){

        Player p = playerDao.getPlayerByPrimaryKey(username);
        p.setColor(color);


        httpSession.setAttribute("user", p);


        model.addAttribute("player", p);
        return "roundScreen";
    }

    @GetMapping("/exit")
    public String exitRound(){

        return "redirect:/services/login";
    }


    @GetMapping("/restart")
    @ResponseBody
    public boolean restartRound(){

        return roundLogic.restartRound();
    }

    /*@GetMapping("/players")
    @ResponseBody
    public Map<String, Player> getIngamePlayers() {

        return roundLogic.getIngamePlayers();
    }*/
}
