"use strict";

var restartModule = {};

(function(){

    $("#restart").click( function (event) {

        webSocketModule.sendMessage("restart", null);
    });


    function restartRound(){
        drawPlayerModule.clearCanvas();
        drawOnGlassModule.drawStartRoundScreen();
    }


    restartModule.restartRound = restartRound;
})();
