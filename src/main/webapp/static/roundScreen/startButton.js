"use strict";

//start functionality
$("#startStop").click( function (event) {


    if (this.innerText === "STOP"){

            this.innerText = "START";
            boardModule.startStop(false);
    } else if (this.innerText === "START"){

            this.innerText = "STOP";
            boardModule.startStop(true);
    }

});