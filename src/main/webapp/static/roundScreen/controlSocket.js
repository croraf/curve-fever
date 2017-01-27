var allPlayers = {};

var controlSocketModule = (function(){

    var module = {};

    var myWebSocket = new WebSocket(
      window.document.baseURI.replace(location.protocol, "ws:") + "services/controlSocket"
      //, sub-protocol
    );

    function sendMessage(type, genericPayload){

            if(myWebSocket.readyState === myWebSocket.OPEN){

                myWebSocket.send(
                    JSON.stringify(
                        {
                            type: type,
                            genericPayload: genericPayload
                        }
                    )
                );
            };
    }

    myWebSocket.onmessage = function (event){

        var controlEvent = JSON.parse(event.data);

        switch (controlEvent.type){
            case "userDisconnected":
                var user = controlEvent.genericPayload;
                delete allPlayers[user.name];
                break;
            case "userConnected":
                var user = controlEvent.genericPayload;
                allPlayers[user.name] = user;
                break;
            case "previousUsers":
                var previousUsers = controlEvent.genericPayload;
                Object.keys(previousUsers).forEach(function(username){
                    allPlayers[username] = previousUsers[username];
                })
                break;
            case "positionsUpdate":
                positionsUpdate(controlEvent.genericPayload);
                break;
            case "chatMessage":
                chatUpdate(controlEvent.genericPayload);
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

    function positionsUpdate(locationUpdates){

        Object.keys(locationUpdates).forEach(function(userName){

                var positionUpdateForOnePlayer = locationUpdates[userName];

                if (positionUpdateForOnePlayer === null) {

                            console.log("coordinate su null!!!!!!")
                            return;
                }

                drawOnGlassModule.checkItemPickup(positionUpdateForOnePlayer);

                drawPlayerModule.drawPlayer(userName, positionUpdateForOnePlayer);

        });
    }

    function chatUpdate(receivedMessage){

        $("#chat").append(receivedMessage + "<br/>");
        $("#chat").scrollTop($("#chat")[0].scrollHeight);
    }



    module.sendMessage = sendMessage;
    return module;
})();

