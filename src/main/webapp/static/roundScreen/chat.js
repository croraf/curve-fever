



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

/*function writeMessageToChatBox(receivedMessage){

    var username = receivedMessage.username;

    var usernameText =  $("<i>").html(username + ": ").css("color", playersListModule.allPlayers[username].color);

    var element = usernameText.add($("<span>").html(receivedMessage.chatMessagePayload + "<br/>"));

    appendElementToChatBox(element);
}*/

function appendElementToChatBox(element){

    /*$("#chat").append(element);*/
    /*$("#chat").scrollTop($("#chat")[0].scrollHeight);*/
}



export default {
    writeSystemMessageToChatBox: writeSystemMessageToChatBox
};

