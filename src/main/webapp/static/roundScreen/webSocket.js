

var webSocketModule = (function(){

    var module = {};

    var myWebSocket = new WebSocket(
      "ws://localhost:8080/curve-fever/services/webSocket"
      //, sub-protocol
    );

    function sendPosition(posUpdMessageObject){

        if(myWebSocket.readyState === myWebSocket.OPEN){

           myWebSocket.send(
               JSON.stringify(posUpdMessageObject)
           );
        };

    }

    module.sendPosition = sendPosition;

    return module;
})();

