
var refreshIngamePlayers = function(){

    $.get(
            "services/roundUpdate/players",
            undefined,
            function(allPlayers){

                $("#playersList").html("");

                for (var i = 0; i < allPlayers.length; i++){

                    $("#playersList").append(
                        '<a heref="#!"  class="collection-item">' +
                        allPlayers[i].name + ' : ' + allPlayers[i].coins
                        + '</a>'
                    );

                };
            },
            "json"
    );

    setTimeout(refreshIngamePlayers, 1000);
}

refreshIngamePlayers();