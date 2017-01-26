"use strict";

//@ sourceURL=loginSuccess-dynamic.js



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

$("#startRound").click(function (e){

        var chosenColor = $(".simplecolorpicker.icon").css("background-color");

        $("#startRoundForm input[name=color]").attr("value", chosenColor);

        $("#startRoundForm").submit();
});

$("#logOut").click(function (){

        window.location.href = "services/login";
});


