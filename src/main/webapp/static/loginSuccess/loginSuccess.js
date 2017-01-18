
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

        window.location.href = "services/round/enter/" + playerName;
});

$("#logOut").click(function (){

        window.location.href = "services/pregame";
});


$("#dropdown1 a").click(function(){

        $("#colorPicker").css("background-color", $(this).css("background-color"));
});