var chatModule = (function(){

    var module = {};


    $("#chatForm").submit(function (e) {
        e.preventDefault();

        var text = $('input[name=text]').val();

        if (text === "") {
            return;
        } else {
            webSocketModule.sendMessage("chatMessage", text);
            $('input[name=text]').val("");
        }

    });

    function writeSystemMessageToChatBox(plainMessage){

        var element = $.("<span>").html("CURVE FEVER:" + plainMessage);

        appendElementToChatBox(element);
    }

    function writeMessageToChatBox(receivedMessage){

        var username = receivedMessage.username;

        var usernameText =  $("<i>").html(username + ": ").css("color", allPlayers[username].color);

        var element = usernameText.add(receivedMessage.chatMessagePayload + "<br/>");

        appendElementToChatBox(element);
    }

    function appendElementToChatBox(element){

        $("#chat").append(element);
        $("#chat").scrollTop($("#chat")[0].scrollHeight);
    }

    module.writeMessageToChatBox = writeMessageToChatBox;
    module.writeSystemMessageToChatBox = writeSystemMessageToChatBox;
    return module;
})();

