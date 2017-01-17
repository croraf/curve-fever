package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.dao.PlayerDao;
import org.evedraf.examples.spring.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping ("pregame")
public class PregameController {

    @Autowired
    private PlayerDao playerDao;


    @GetMapping
    public String getLoginScreen(Model model){

        return "loginScreen";
    }

    @PostMapping
    public String playerPosted(@RequestParam("name") String playerName, Model model){


        Player player = playerDao.increasePlayerCoins(playerName);
        model.addAttribute("player", player);

        return "loginSuccess";
    }

/*    @PostMapping (value = "/a")
    public String updatePlayer(@Valid @ModelAttribute Player player, BindingResult bindingResult){

        if (bindingResult.hasFieldErrors()){
            for (FieldError error : bindingResult.getFieldErrors() ) {
                System.out.println(error.getField() + ": " + error.getRejectedValue() + " - " + error.getDefaultMessage());
            }

            return "loginScreen";
        }

        playerDao.updatePlayerById(player);

        return "playerUpdateSuccess";
    }*/
}
