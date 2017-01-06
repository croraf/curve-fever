package org.evedraf.examples.spring.model;

import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by Korisnik on 13.12.2016..
 */

@Entity
public class Player {

    //TODO check this, make insertable = false
    @Generated(GenerationTime.INSERT)
    @Column (insertable = true)
    private int id;

    @Id
    private String name;

    @Max(value = 100, message = "prevelika vrijednost bodova")
    private int points;

    private int coins;

    public Player() {
    }

    public Player(String name) {
        this.name = name;
        this.id = 99;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
