package org.evedraf.examples.spring.model;

import org.evedraf.examples.spring.business.Message;

/**
 * Created by Korisnik on 13.12.2016..
 */
public class Player {

    private int points;
    private int coins;

    public Player() {
    }

    public Player(int coins, int points) {
        this.coins = coins;
        this.points = points;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public int getCoins() {
        return coins;
    }

    public void setCoins(int coins) {
        this.coins = coins;
    }
}
