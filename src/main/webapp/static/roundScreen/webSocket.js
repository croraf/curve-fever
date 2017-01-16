

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

    module.sendPosition = sendPosition;

    return module;
})();

