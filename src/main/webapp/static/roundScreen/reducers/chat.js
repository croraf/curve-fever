
let initialState = {
    allReceivedChat : [],
    sending : false
};

export default function(state = initialState, action, listOfPlayers){

    switch (action.type){
        case "chatMessage":
            let chatMessage = {
                username: action.genericPayload.username,
                chatMessagePayload: action.genericPayload.chatMessagePayload,
                color: listOfPlayers[action.genericPayload.username].color
            };

            return {
                allReceivedChat: [...state.allReceivedChat, chatMessage],
            }
            break;

        case "SEND_CHAT":
            return {
                allReceivedChat: state.allReceivedChat,
            };
            break;

        default:
            return state;
    }


}