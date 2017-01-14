package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.business.RoundLogic;
import org.evedraf.examples.spring.business.Position;
import org.evedraf.examples.spring.business.UpdateMessageIn;
import org.evedraf.examples.spring.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Korisnik on 12.1.2017..
 */
@Controller
@RequestMapping("/roundUpdate")
public class UpdateController {

    @Autowired
    private RoundLogic roundLogic;


    @PostMapping ("/positions")
    @ResponseBody
    public Position updatePositions(@RequestBody UpdateMessageIn updateMessageIn){

        if (updateMessageIn.getPlayerId() == 0) {
            roundLogic.addPosition(updateMessageIn.getPosition());

            int size = roundLogic.getPositions2().size();
            if (size > 0){
                return roundLogic.getPositions2().get(size-1);
            } else {
                return new Position();
            }

        }
        else {
            roundLogic.addPosition2(updateMessageIn.getPosition());

            int size = roundLogic.getPositions().size();
            if (size > 0){
                return roundLogic.getPositions().get(size-1);
            } else {
                return new Position();
            }

        }



        //return roundLogic.getPositions();
    }

    @GetMapping("/players")
    @ResponseBody
    public List<Player> updatePositions() {

        return roundLogic.getIngamePlayers();
    }

}
