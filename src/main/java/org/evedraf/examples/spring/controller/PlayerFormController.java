package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.business.PlayerLogic;
import org.evedraf.examples.spring.model.Message;
import org.evedraf.examples.spring.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Controller
@RequestMapping ("playersForm")
public class PlayerFormController {

    @Autowired
    private PlayerLogic playerLogic;

    @GetMapping
    public String getPlayerForm(Model model){

        model.addAttribute("player", new Player());
        return "playerUpdateForm";
    }

    @PostMapping
    public String updatePlayer(@Valid @ModelAttribute Player player, BindingResult bindingResult){

        if (bindingResult.hasFieldErrors()){
            for (FieldError error : bindingResult.getFieldErrors() ) {
                System.out.println(error.getField() + ": " + error.getRejectedValue() + " - " + error.getDefaultMessage());
            }

            return "playerUpdateForm";
        }

        playerLogic.updatePlayerById(player);

        return "playerUpdateSuccess";
    }
}
