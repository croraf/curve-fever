package org.evedraf.examples.spring.business.playerSettings;


import org.evedraf.examples.spring.model.Player;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class LoginLogic {

    private Map<String, Player> loggedPlayers = new HashMap<>();


    public Map<String, Player> getLoggedPlayers() {
        return loggedPlayers;
    }

    public void setLoggedPlayers(Map<String, Player> loggedPlayers) {
        this.loggedPlayers = loggedPlayers;
    }
}
