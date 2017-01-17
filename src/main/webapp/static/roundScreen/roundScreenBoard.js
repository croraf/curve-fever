"use strict";

var boardModule = (function() {
    var module = {};


    var posUpd = {
        playerName : $("#currentPlayer").html(),
        position : null
    }

    /* old HTTP request response syncing with server, prior to WebSocket way

    function syncPositionsWithServer(newPosition){

        posUpd.position = newPosition;


        webSocketModule.sendPosition(posUpd);

        $.ajax({
            method: "POST",
            url: "services/round/update/positions",
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            data: JSON.stringify(posUpd),
            success: function(responseJson){

                var positionDataBox = $("#positionDataBox");
                positionDataBox.html("");

            }
        });
    }*/








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

    var currentCoordX = 5;
    var currentCoordY = 5;
    var direction = Math.PI/3;
    var speed = 3.6;
    var started = false;
    var curveRadius = 4;
    var refreshPeriod = 2000; //55 ms as first assumption

    //main drawing loop
    function mainLoop(){

        if (started === true){

            ctx.beginPath();
            ctx.arc(currentCoordX, currentCoordY, curveRadius, 0, 2*Math.PI);
            ctx.stroke();

            if (steerDirection === "left"){
                direction = direction - Math.PI/24;
            } else if (steerDirection === "right"){
                direction = direction + Math.PI/24;
            }

            currentCoordX = (currentCoordX + speed*Math.cos(direction)) % canvas.width;
            if (currentCoordX < 0) { currentCoordX += canvas.width};
            currentCoordY = (currentCoordY + speed*Math.sin(direction)) % canvas.height;
            if (currentCoordY < 0) { currentCoordY += canvas.height};



        }

        setTimeout(mainLoop, refreshPeriod);
    }

    //start main game loop
    mainLoop();



    module.startStop = function(flag){
        started = flag;
    };
    return module;
})();