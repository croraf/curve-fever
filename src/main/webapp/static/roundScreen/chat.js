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

    function chatUpdate(receivedMessage){

        var username = receivedMessage.username;

        var usernameText =  $("<i>").html(username + ": ").css("color", allPlayers[username].color);

        $("#chat").append(usernameText).append(receivedMessage.chatMessagePayload + "<br/>");
        $("#chat").scrollTop($("#chat")[0].scrollHeight);
    }

    module.chatUpdate = chatUpdate;
    return module;
})();

