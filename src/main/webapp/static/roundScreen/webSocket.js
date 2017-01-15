
var exampleWebSocket = new WebSocket(
  "ws://localhost:8080/curve-fever/services/webSocket"
  //, sub-protocol
);

exampleWebSocket.onopen = function(){

    exampleWebSocket.send("Here's some text that the server is urgently awaiting!");
}
