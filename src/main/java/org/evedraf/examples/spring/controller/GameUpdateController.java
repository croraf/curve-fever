package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.business.GameLogic;
import org.evedraf.examples.spring.business.Position;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by Korisnik on 12.1.2017..
 */
@Controller
@RequestMapping("/posUpdate")
public class GameUpdateController {

    @Autowired
    private GameLogic gameLogic;


    @PostMapping
    @ResponseBody
    public Position updatePositions(@RequestBody Position newPosition){

        gameLogic.addPosition(newPosition);

        return newPosition;
        //return gameLogic.getPositions();
    }


}
