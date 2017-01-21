"use strict";

$.get(
        "services/players",
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

        window.location.href = encodeURI("services/round/enter?name=" + playerName + "&color=" + chosenColor);
});

$("#logOut").click(function (){

        window.location.href = "services/login";
});

var chosenColor = "rgb(255,255,255)";

$("#dropdown1 span").click(function(){

        chosenColor = $(this).css("background-color");
        $("#colorPicker").css("background-color", $(this).css("background-color"));

});