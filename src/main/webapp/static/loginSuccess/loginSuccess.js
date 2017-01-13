
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