"use strict";

//start functionality
$("#restart").click( function (event) {

    boardModule.startStop(true);
    drawPlayerModule.clearCanvas();
});