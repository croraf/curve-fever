"use strict";

//start functionality
$("#restart").click( function (event) {

    $.get(
            "services/round/restart",
            undefined,
            function(data){
                if (data === "true") {
                    drawPlayerModule.clearCanvas();
                    drawOnGlassModule.clearItems();
                }
            },
            "text"
    );

});