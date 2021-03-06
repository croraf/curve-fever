package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.business.playerSettings.LoginLogic;
import org.evedraf.examples.spring.dao.PlayerDao;
import org.evedraf.examples.spring.model.Player;
import org.evedraf.examples.spring.validation.ValidationConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping ("login")
public class LoginController {

    @Autowired
    private PlayerDao playerDao;

    @Autowired
    private LoginLogic loginLogic;

    @GetMapping
    public String getLoginScreen(Model model){

        model.addAttribute("usernameMaxLength", ValidationConstants.usernameMaxLength);

        return "loginScreen";
    }

    @PostMapping
    public String loginAttempt(@RequestParam("name") String username, Model model){

        Player player = playerDao.loginPlayer(username);

        model.addAttribute("player", player);
        return "loginSuccess";
    }

    @GetMapping ("players")
    @ResponseBody
    public List<Player> getPlayers (){

        return playerDao.getPlayers();
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
