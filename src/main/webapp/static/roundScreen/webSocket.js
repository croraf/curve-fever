


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

    console.log("websocket opened");
}


let myWebSocketModule = {};
myWebSocketModule.sendMessage = sendMessage;
myWebSocketModule.myWebSocket = myWebSocket;

export  { myWebSocketModule };