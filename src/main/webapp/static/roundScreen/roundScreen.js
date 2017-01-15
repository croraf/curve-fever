"use strict";

$(function() {

    var backgroundAudio=document.getElementById("backgroundAudio");
    backgroundAudio.volume=0.1;
    //comment to disable background music on start
    //backgroundAudio.play();

    var mute=$("#mute i");

    mute.click( function(event) {

        if (backgroundAudio.paused) {
            backgroundAudio.play();
            mute.html("volume_up")
        } else {
            backgroundAudio.pause();
            mute.html("volume_off")
        }
    });




    $(window).bind("beforeunload",function(event) {
        return "";
    });


});

