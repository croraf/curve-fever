package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.business.GameLogic;
import org.evedraf.examples.spring.business.PlayerLogic;
import org.evedraf.examples.spring.model.Message;
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
import java.util.ArrayList;

@Controller
@RequestMapping ("pregame")
public class PregameController {

    @Autowired
    private PlayerLogic playerLogic;
    @Autowired
    private GameLogic gameLogic;

    @GetMapping
    public String getLoginScreen(Model model){


        return "loginScreen";
    }

    @PostMapping
    public String playerPosted(@RequestParam("name") String playerName, Model model){


        Player player = playerLogic.increasePlayerCoins(playerName);
        model.addAttribute("player", player);

        return "loginSuccess";
    }

    @GetMapping ("enter/{id}")
    public String getBattlefield(@PathVariable("id") int id, Model model){

        //restart positions
        gameLogic.setPositions(new ArrayList<>());

        //model.addAttribute("player", playerLogic.getPlayerById(id));
        model.addAttribute("id", id);

        return "battleScreen";
    }

/*    @PostMapping (value = "/a")
    public String updatePlayer(@Valid @ModelAttribute Player player, BindingResult bindingResult){

        if (bindingResult.hasFieldErrors()){
            for (FieldError error : bindingResult.getFieldErrors() ) {
                System.out.println(error.getField() + ": " + error.getRejectedValue() + " - " + error.getDefaultMessage());
            }

            return "loginScreen";
        }

        playerLogic.updatePlayerById(player);

        return "playerUpdateSuccess";
    }*/
}
