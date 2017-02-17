

export default function(state = [], action, listOfPlayers){

    switch (action.type){
        case "chatMessage":
            let chatMessage = {
                username: action.genericPayload.username,
                chatMessagePayload: action.genericPayload.chatMessagePayload,
                color: listOfPlayers[action.genericPayload.username].color
            };
            return [...state, chatMessage];
            break;

        default:
            return state;
    }


}