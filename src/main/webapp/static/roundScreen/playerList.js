
var refreshIngamePlayers = function(){

    $.get(
            "services/round/players",

            undefined,

            function(allPlayers){

                $("#playersList").html("");

                allPlayers.forEach(function(player){

                    var playerElement = $("<a></a>").
                            text(player.name + ' : ' + player.coins).
                            css("color", player.color).
                            addClass("collection-item");

                    $("#playersList").append(playerElement);
                });
            },

            "json"
    );

    setTimeout(refreshIngamePlayers, 2000);
}

refreshIngamePlayers();