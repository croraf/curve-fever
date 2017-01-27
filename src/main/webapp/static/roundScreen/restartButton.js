"use strict";

//start functionality
$("#restart").click( function (event) {

    $.get(
            "services/round/restart",
            undefined,
            function(){
                mainLoopModule.restartPositions();
                drawPlayerModule.clearCanvas();
            },
            "text"
    );

});