//@ sourceURL=loginSuccess-dynamic.js

"use strict";

$.get(
        "services/login/players",
        undefined,
        function(allPlayers){


            for (var i = 0; i < allPlayers.length; i++){

                $("#playersList").append(
                    '<a heref="#!"  class="collection-item">' +
                    allPlayers[i].id + ' : ' + allPlayers[i].name
                    + '</a>'
                );

            };
        },
        "json"
);

$("#startRound").click(function (){

        var chosenColor = $(".simplecolorpicker.icon").css("background-color");
        window.location.href = encodeURI("services/round/enter?username=" + playerName + "&color=" + chosenColor);
});

$("#logOut").click(function (){

        window.location.href = "services/login";
});


