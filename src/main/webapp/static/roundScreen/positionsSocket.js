

var positionsSocketModule = (function(){

    var module = {};

    var myWebSocket = new WebSocket(
      window.document.baseURI.replace(location.protocol, "ws:") + "services/positionsSocket"
      //, sub-protocol
    );

    function sendPosition(posUpdMessageObject){

        if(myWebSocket.readyState === myWebSocket.OPEN){

           myWebSocket.send(
               JSON.stringify(posUpdMessageObject)
           );
        };

    }

    myWebSocket.onmessage = function (event){

        var locationUpdates = JSON.parse(event.data);

        Object.keys(locationUpdates).forEach(function(userName){

                var positionUpdateForOnePlayer = locationUpdates[userName];

                if (positionUpdateForOnePlayer === null) {

                            console.log("coordinate su null!!!!!!")
                            return;
                }

                drawOnGlassModule.checkItemPickup(positionUpdateForOnePlayer);

                drawPlayerModule.drawPlayer(userName, positionUpdateForOnePlayer);

        });
    };





    module.sendPosition = sendPosition;

    return module;
})();
