var allPlayers = {};

var controlSocketModule = (function(){

    var module = {};

    var myWebSocket = new WebSocket(
      window.document.baseURI.replace(location.protocol, "ws:") + "services/controlSocket"
    );

    function sendMessage(controlMessage){

        if(myWebSocket.readyState === myWebSocket.OPEN){

           myWebSocket.send( controlMessage );
        };

    }

    myWebSocket.onmessage = function (event){

        var controlEvent = JSON.parse(event.data);

        switch (controlEvent.type){
            case "userDisconnected":
                var user = controlEvent.message;
                delete allPlayers[user.name];
                break;
            case "userConnected":
                var user = controlEvent.message;
                allPlayers[user.name] = user;
                break;
            case "previousUsers":
                var previousUsers = controlEvent.message;
                Object.keys(previousUsers).forEach(function(username){
                    allPlayers[username] = previousUsers[username];
                })
                break;
            default:
                console.log("control websocket: unrecognized control event type");
        }

        redrawPlayersList();

    };

    function redrawPlayersList(){
        $("#playersList").html("");

        Object.values(allPlayers).forEach(function(player){

            var playerElement = $("<a></a>").
                    text(player.name + ' : ' + player.coins).
                    css("color", player.color).
                    addClass("collection-item");

            $("#playersList").append(playerElement);
        });
    }

    return module;
})();

