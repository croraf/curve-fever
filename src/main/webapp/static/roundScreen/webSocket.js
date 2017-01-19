

var webSocketModule = (function(){

    var module = {};

    var myWebSocket = new WebSocket(
      window.document.baseURI.replace(location.protocol, "ws:") + "services/webSocket"
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


                drawPlayerModule.drawPlayer(userName, locationUpdates[userName]);

        });
    };





    module.sendPosition = sendPosition;

    return module;
})();

