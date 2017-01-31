var allPlayers = {};

var webSocketModule = (function(){

    var module = {};

    var myWebSocket = new WebSocket(
      window.document.baseURI.replace(location.protocol, "ws:") + "services/webSocket"
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

    myWebSocket.onopen = function(event){

        var i = 5;
    }

    myWebSocket.onmessage = function (messageEvent){

        var message = JSON.parse(messageEvent.data);

        switch (message.type){
            case "userDisconnected":
                var user = message.genericPayload;
                delete allPlayers[user.name];
                break;
            case "userConnected":
                var user = message.genericPayload;
                allPlayers[user.name] = user;
                break;
            case "previousUsers":
                var previousUsers = message.genericPayload;
                Object.keys(previousUsers).forEach(function(username){
                    allPlayers[username] = previousUsers[username];
                })
                break;
            case "positionsUpdate":
                positionsUpdate(message.genericPayload);
                break;
            case "chatMessage":
                chatUpdate(message.genericPayload);
                break;
            case "restartConfirmed":
                restartModule.restartCanvas();
                break;
            default:
                console.log("websocket: unrecognized websocket message type");
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
