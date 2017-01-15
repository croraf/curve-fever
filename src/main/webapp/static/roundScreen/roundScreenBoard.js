"use strict";

var boardModule = (function() {
    var module = {};


    var posUpd = {
        playerName : $("#currentPlayer").html(),
        position : {
            x : 0,
            y : 0
        }
    }

    function sendPositionToServer(cordX, cordY){

        posUpd.position.x = cordX;
        posUpd.position.y = cordY;

        $.ajax({
            method: "POST",
            url: "services/update/positions",
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            data: JSON.stringify(posUpd),
            success: function(responseJson){

                var positionDataBox = $("#positionDataBox");
                positionDataBox.html("");
                responseJson.forEach(function(currentValue){

                    positionDataBox.append(currentValue.x.toFixed(0) + ", " + currentValue.y.toFixed(0));

                    drawEnemy(currentValue);
                })

            }
        });
    }






    var canvas=document.getElementById("board");

    var ctx2 = canvas.getContext("2d");
    function drawEnemy(enemyCoordinates){

        ctx2.strokeStyle = "#FF0000";
        ctx2.beginPath();
        ctx2.arc(enemyCoordinates.x, enemyCoordinates.y, curveRadius, 0, 2*Math.PI);
        ctx2.stroke();
        ctx2.strokeStyle = "#FFFFFF";

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


    var ctx = canvas.getContext("2d");

    var currentCoordX = 5;
    var currentCoordY = 5;
    var direction = Math.PI/3;
    var speed = 3.6;
    var started = false;
    var curveRadius = 4;

    //main drawing loop
    function drawCircle(){

        sendPositionToServer(currentCoordX, currentCoordY);

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

        setTimeout(drawCircle, 55);
    }

    //start drawing loop
    drawCircle();



    module.startStop = function(flag){
        started = flag;
    };
    return module;
})();