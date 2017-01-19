"use strict";

var drawPlayerModule = {};

(function(){

    var canvas=document.getElementById("board");
    var ctx2 = canvas.getContext("2d");
    var curveRadius = 4;

    drawPlayerModule.drawPlayer = function(userName, playerCoordinates){

        if (playerCoordinates === null) {

            console.log("coordinate su null!!!!!!")
            return;
        }


        ctx2.strokeStyle = allPlayers[userName].color;
        ctx2.beginPath();
        ctx2.arc(playerCoordinates.x, playerCoordinates.y, curveRadius, 0, 2*Math.PI);
        ctx2.stroke();
        ctx2.strokeStyle = "#FFFFFF";

    }

})();