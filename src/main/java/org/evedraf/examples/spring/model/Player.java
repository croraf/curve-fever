package org.evedraf.examples.spring.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by Korisnik on 13.12.2016..
 */

@Entity
public class Player {

    @Id
    private int id;

    @Max(value = 100, message = "prevelika vr")
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
