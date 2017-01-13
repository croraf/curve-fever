package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.business.GameLogic;
import org.evedraf.examples.spring.business.Position;
import org.evedraf.examples.spring.business.UpdateMessageIn;
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
public class UpdateController {

    @Autowired
    private GameLogic gameLogic;


    @PostMapping
    @ResponseBody
    public Position updatePositions(@RequestBody UpdateMessageIn updateMessageIn){

        if (updateMessageIn.getPlayerId() == 0) {
            gameLogic.addPosition(updateMessageIn.getPosition());

            int size = gameLogic.getPositions2().size();
            if (size > 0){
                return gameLogic.getPositions2().get(size-1);
            } else {
                return new Position();
            }

        }
        else {
            gameLogic.addPosition2(updateMessageIn.getPosition());

            int size = gameLogic.getPositions().size();
            if (size > 0){
                return gameLogic.getPositions().get(size-1);
            } else {
                return new Position();
            }

        }



        //return gameLogic.getPositions();
    }


}
