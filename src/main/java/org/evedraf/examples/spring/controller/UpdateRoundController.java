package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.business.roundLogic.RoundLogic;
import org.evedraf.examples.spring.dao.PlayerDao;
import org.evedraf.examples.spring.model.Player;
import org.evedraf.examples.spring.websocket.ChatSocketHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Collection;
import java.util.Map;

/**
 * Created by Korisnik on 14.1.2017..
 */

@Controller
@RequestMapping("/round")
public class UpdateRoundController {

    @Autowired
    private RoundLogic roundLogic;
    @Autowired
    private PlayerDao playerDao;

    @GetMapping("/enter")
    public String enterRound(
            @RequestParam("name") String name, @RequestParam("color") String color, Model model){

        Player p = playerDao.getPlayerByPrimaryKey(name);
        //todo can be set after the player is added to roundLogic because it is a reference
        //better set before to avoid concurrency issues because addIngamePlayer establishes happens-before
        p.setColor(color);

        roundLogic.addIngamePlayer(p);

        //temporary broadcast here
        try {
            ChatSocketHandler.broadcastChatMessage("[ " + name + " connected ]");
        } catch (IOException e) {
            e.printStackTrace();
        }

        model.addAttribute("player", p);

        return "roundScreen";
    }

    @GetMapping("/exit")
    public String exitRound(@RequestParam("name") String name){

        Player p = playerDao.getPlayerByPrimaryKey(name);
        roundLogic.removeIngamePlayer(p);

        return "redirect:/services/login";
    }

    @GetMapping("/players")
    @ResponseBody
    public Map<String, Player> getIngamePlayers() {

        return roundLogic.getIngamePlayers();
    }
}
