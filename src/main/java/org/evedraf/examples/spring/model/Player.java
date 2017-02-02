package org.evedraf.examples.spring.model;

import org.evedraf.examples.spring.business.roundLogic.Position;
import org.evedraf.examples.spring.validation.ValidationConstants;
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

    @Id @Size(min = 1, max = ValidationConstants.usernameMaxLength)
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
    private double speed = 4;

    @Transient
    public Position position;

    @Transient
    public String steerDirection = "ahead";

    @Transient
    public volatile boolean alive;

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

    public synchronized double getSpeed() {
        return speed;
    }

    public synchronized void reduceSpeed() {
        this.speed *= 0.65;
    }

    public synchronized void increaseSpeed() {
        this.speed /= 0.65;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public boolean isAlive() {
        return alive;
    }

    public void setAlive(boolean alive) {
        this.alive = alive;
    }
}
