"use strict";

var mainLoopModule = (function() {
    var module = {};


    var posUpd = {
        playerName : $("#currentPlayer").html(),
        position : null
    }

    var body = document.getElementById("body");

    //evaluate events in the capturing phase
    body.addEventListener("keydown", steer, true);
    body.addEventListener("keyup", unSteer, true);

    var steerDirection = "ahead";
    var leftPressed = false;
    var rightPressed = false;

    function steer(event){

        if (event.keyCode === 37){
            leftPressed = true;
            steerDirection = "left";
        } else if (event.keyCode === 39){
            rightPressed = true;
            steerDirection = "right";
        }

    }

    function unSteer(event){
        if (event.keyCode === 37) {

            leftPressed = false;
            if (rightPressed) {
                steerDirection = "right";
            } else {
                steerDirection = "ahead";
            }
        } else if (event.keyCode === 39){

            rightPressed = false;
            if (leftPressed){
                steerDirection = "left";
            } else {
                steerDirection = "ahead";
            }
        }
    }



    var canvas=document.getElementById("board");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#FFFFFF";

    var currentCoordX = Math.random() * canvas.width;
    var currentCoordY = Math.random() * canvas.height;
    var direction = Math.PI/3;
    var speed = 3.5;
    var refreshPeriod = 55; //55 ms as first assumption

    //main drawing loop
    function mainLoop(){

        posUpd.position = {
                             x : currentCoordX,
                             y : currentCoordY
                          };

        controlSocketModule.sendMessage("positionsUpdate", posUpd);

        if (steerDirection === "left"){
            direction = direction - Math.PI/24;
        } else if (steerDirection === "right"){
            direction = direction + Math.PI/24;
        }

        currentCoordX = (currentCoordX + speed*Math.cos(direction)) % canvas.width;
        if (currentCoordX < 0) { currentCoordX += canvas.width};
        currentCoordY = (currentCoordY + speed*Math.sin(direction)) % canvas.height;
        if (currentCoordY < 0) { currentCoordY += canvas.height};

        //setTimeout(mainLoop, refreshPeriod);
    }

    //start main game loop
    var mainLoopInterval = setInterval(mainLoop, refreshPeriod);



    module.restartPositions = function(){
         currentCoordX = Math.random() * canvas.width;
         currentCoordY = Math.random() * canvas.height;
    };
    return module;
})();