package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.model.Player;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Korisnik on 13.12.2016..
 */
@RestController
public class MySimpleController {

    @RequestMapping(value = "players", method = RequestMethod.GET)
    public Player getPlayers(){
        return new Player(11, 22);
    }
}
