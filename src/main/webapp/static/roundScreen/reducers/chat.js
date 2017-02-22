
let initialState = {
    allReceivedChat : [],
};

export default function(state = initialState, action, listOfPlayers){

    let chatMessage;
    switch (action.type){
        case "chatMessage":
            chatMessage = {
                username: action.genericPayload.username,
                chatMessagePayload: action.genericPayload.chatMessagePayload,
                color: listOfPlayers[action.genericPayload.username].color,
                isSystemMessage: false
            };

            return {
                allReceivedChat: [...state.allReceivedChat, chatMessage],
            };
        case "SEND_CHAT":
            return state;
        case "userDisconnected":
            var userToDisconnect = action.genericPayload;
            chatMessage = {
                chatMessagePayload: userToDisconnect.name + " disconnected",
                isSystemMessage: true
            };
            return {
                allReceivedChat: [...state.allReceivedChat, chatMessage]
            };
        case "userConnected":
            var newUser = action.genericPayload;
            chatMessage = {
                chatMessagePayload: newUser.name + " connected",
                isSystemMessage: true
            };
            return {
                allReceivedChat: [...state.allReceivedChat, chatMessage]
            };
        default:
            return state;
    }


}