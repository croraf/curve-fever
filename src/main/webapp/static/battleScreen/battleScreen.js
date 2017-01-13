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



    $.get(
        "services/players",
        undefined,
        function(allPlayers){


            for (var i = 0; i < allPlayers.length; i++){

                $("#playersList").append('<a heref="#!"  class="collection-item">' + allPlayers[i].name + ' : ' + allPlayers[i].coins + '</a>');

            };
        },
        "json"
    );



    /*<a href="#!" class="collection-item">${player.name} :  ${player.points} </a>*/

});

