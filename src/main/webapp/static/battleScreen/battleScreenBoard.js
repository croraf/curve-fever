"use strict";

var boardModule = (function() {
    var module = {};

    var canvas=document.getElementById("board");

 /*   canvas.onclick = function(event) {

        var boardAudio=document.getElementById("boardAudio");
        boardAudio.volume = 0.4
        //TODO temporary disable narration
        boardAudio.play();
    };*/

    var ctx = canvas.getContext("2d");
    ctx.strokeStyle="#FFFFFF";

    canvas.onclick = function(event){

        var x = event.pageX - $("#board").offset().left;
        var y = event.pageY - $("#board").offset().top;

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2*Math.PI);
        ctx.stroke();
    };




    var currentCoordX = 5;
    var currentCoordY = 5;
    var direction = Math.PI/3;
    var speed = 3.6;
    var started = false;

    //main drawing loop
    function drawCircle(){

        if (started === true){

            ctx.beginPath();
            ctx.arc(currentCoordX, currentCoordY, 5, 0, 2*Math.PI);
            ctx.stroke();

            sendPositionToServer(currentCoordX, currentCoordY);

            if (steerDirection === "left"){
                direction = direction - Math.PI/24;
            } else if (steerDirection === "right"){
                direction = direction + Math.PI/24;
            }

            currentCoordX = (currentCoordX + speed*Math.cos(direction)) % canvas.width;
            if (currentCoordX < 0) { currentCoordX += canvas.width};
            currentCoordY = (currentCoordY + speed*Math.sin(direction)) % canvas.height;
            if (currentCoordY < 0) { currentCoordY += canvas.height};


            setTimeout(drawCircle, 55);
        }
    }

    function sendPositionToServer(cordX, cordY){
        $.ajax({
            method: "POST",
            url: "services/posUpdate",
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            data: '{"x":' + cordX + ', "y":' + cordY + "}",
            success: function(responseJson){
                $("#positionData").html(responseJson.x.toFixed(0) + ", " + responseJson.y.toFixed(0));
            }
        });
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


    module.startStop = function(flag){
        started = flag;
        if(started === true){
            drawCircle();
        }
    };
    return module;
})();