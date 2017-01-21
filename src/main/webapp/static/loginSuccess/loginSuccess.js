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

$('.dropdown-button').dropdown(
        //if no parameters initialized by default. Must be initialized here, because the componenet has been added
        //because the component has been added dynamically
        /*{
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }*/
  );

var chosenColor = "rgb(255,255,255)";

$("#dropdown1 span").click(function(){

        chosenColor = $(this).css("background-color");
        $("#colorPicker").css("background-color", $(this).css("background-color"));

});

