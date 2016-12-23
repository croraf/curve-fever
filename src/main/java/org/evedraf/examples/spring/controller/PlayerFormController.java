package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.business.PlayerLogic;
import org.evedraf.examples.spring.model.Message;
import org.evedraf.examples.spring.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
    public String getPlayerForm(){
        return "playerUpdateForm";
    }

    @PostMapping
    public String updatePlayer(@Valid @ModelAttribute Player player, BindingResult errors){

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
