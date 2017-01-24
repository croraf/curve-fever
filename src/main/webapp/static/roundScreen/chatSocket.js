var chatSocketModule = (function(){

    var module = {};

    var myWebSocket = new WebSocket(
      window.document.baseURI.replace(location.protocol, "ws:") + "services/chatSocket"
    );

    function sendMessage(chatMessage){

        if(myWebSocket.readyState === myWebSocket.OPEN){

           myWebSocket.send( chatMessage );
        };

    }

    myWebSocket.onmessage = function (event){

        var receivedMessage = event.data;

        $("#chat").append(receivedMessage + "<br/>");
        $("#chat").scrollTop($("#chat")[0].scrollHeight);
    };

    $("#chatForm").submit(function (e) {
        e.preventDefault();
        // Get input field values
        var text = $('input[name=text]').val();

        // Simple validation at client's end
        // We simply change border color to red if empty field using .css()
        var proceed = true;

        if (text === "") {
            return;
        } else {
            sendMessage(text);
            $('input[name=text]').val("");
        }

    });


    module.sendMessage = sendMessage;

    return module;
})();

