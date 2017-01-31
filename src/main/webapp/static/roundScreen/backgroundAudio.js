"use strict";

$(function() {

    var songsList = [
        "static/roundScreen/songs/TheCurseOfMonkeyIsland.mp3",
        "static/roundScreen/songs/05 - Following The Shop Keeper.mp3"
    ];

    var currentSongIndex = 0;

    var backgroundAudio=document.getElementById("backgroundAudio");
    backgroundAudio.volume=0.1;



    backgroundAudio.onended = function() {
        currentSongIndex = (currentSongIndex + 1) % songsList.length;

        startSong(currentSongIndex);
    };

    startSong(0);

    function startSong(currentSongIndex){

        backgroundAudio.src = songsList[currentSongIndex];
        backgroundAudio.play();
    }

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


});

