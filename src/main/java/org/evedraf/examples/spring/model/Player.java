package org.evedraf.examples.spring.model;

import org.evedraf.examples.spring.business.roundLogic.Position;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Size;

/**
 * Created by Korisnik on 13.12.2016..
 */

@Entity
public class Player {

    //TODO check this, make insertable = false
    @Generated(GenerationTime.INSERT)
    @Column (insertable = true)
    private int id;

    @Id @Size(min = 1, max = 64)
    private String name;

    @Max(value = 100, message = "prevelika vrijednost bodova")
    private int points;

    private int coins;

    @Transient
    private String color;

    @Transient
    private boolean loggedIn;

    @Transient
    public double direction;

    @Transient
    public double speed = 4;

    @Transient
    public Position position;

    @Transient
    public String steerDirection = "ahead";

    public Player() {
    }

    public Player(String name) {
        this.name = name;
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

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public boolean isLoggedIn() {
        return loggedIn;
    }

    public void setLoggedIn(boolean loggedIn) {
        this.loggedIn = loggedIn;
    }

    public double getDirection() {
        return direction;
    }

    public void setDirection(double direction) {
        this.direction = direction;
    }

    public double getSpeed() {
        return speed;
    }

    public void setSpeed(double speed) {
        this.speed = speed;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }
}
