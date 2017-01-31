"use strict";

var restartModule = {};

(function(){

    $("#restart").click( function (event) {

        webSocketModule.sendMessage("restart", null);
    });


    function restartCanvas(){
        drawPlayerModule.clearCanvas();
        drawOnGlassModule.clearItems();
    }


    restartModule.restartCanvas = restartCanvas;
})();
