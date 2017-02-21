
import webSocketModule from './webSocket';
import playersListModule from './playersList';



/*$("#chatForm").submit(function (e) {
    e.preventDefault();

    var text = $('input[name=text]').val();

    if (text === "") {
        return;
    } else {
        webSocketModule.sendMessage("chatMessage", text);
        $('input[name=text]').val("");
    }

});*/


function writeSystemMessageToChatBox(plainMessage){

    var element = $("<div>").css(
                                    {
                                        "text-align": "center",
                                        "color": "darkkhaki"
                                    }
                                )
                            .html("[" + plainMessage + "]<br/>");

    appendElementToChatBox(element);
}

function writeMessageToChatBox(receivedMessage){

    var username = receivedMessage.username;

    var usernameText =  $("<i>").html(username + ": ").css("color", playersListModule.allPlayers[username].color);

    var element = usernameText.add($("<span>").html(receivedMessage.chatMessagePayload + "<br/>"));

    appendElementToChatBox(element);
}

function appendElementToChatBox(element){

    /*$("#chat").append(element);*/
    /*$("#chat").scrollTop($("#chat")[0].scrollHeight);*/
}



export default {
    writeMessageToChatBox: writeMessageToChatBox,
    writeSystemMessageToChatBox: writeSystemMessageToChatBox
};

