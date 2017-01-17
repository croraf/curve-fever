package org.evedraf.examples.spring.controller;

import org.evedraf.examples.spring.business.Position;
import org.evedraf.examples.spring.business.RoundLogic;
import org.evedraf.examples.spring.business.UpdateMessageFromClient;
import org.evedraf.examples.spring.dao.PlayerDao;
import org.evedraf.examples.spring.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/enter/{name}")
    public String enterRound(@PathVariable("name") String name, Model model){

        Player p = playerDao.getPlayerByPrimaryKey(name);
        roundLogic.addIngamePlayer(p);

        model.addAttribute("player", p);

        return "roundScreen";
    }

    @GetMapping("/exit/{name}")
    public String exitRound(@PathVariable("name") String name){

        Player p = playerDao.getPlayerByPrimaryKey(name);
        roundLogic.removeIngamePlayer(p);

        return "loginScreen";
    }



    @PostMapping("/update/positions")
    @ResponseBody
    public Map<String, Position> updatePositions(@RequestBody UpdateMessageFromClient updateMessageFromClient){

        if (updateMessageFromClient.getPosition() != null){
            roundLogic.addPosition(updateMessageFromClient.getPlayerName(), updateMessageFromClient.getPosition());
        }

        Map<String, Position> otherPlayerPosition =
                roundLogic.getLastPositionOfOtherPlayers(updateMessageFromClient.getPlayerName());

        return otherPlayerPosition;

    }

    @GetMapping("/players")
    @ResponseBody
    public Collection<Player> getIngamePlayers() {

        return roundLogic.getIngamePlayers().values();
    }
}
