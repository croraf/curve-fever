
export default function(state = {currentMessage: "nema jos poruke"}, action){

    console.log("before network reducer:" + state.currentMessage );

    switch (action.type){
        case "chatMessage":
            return {currentMessage: action.genericPayload.chatMessagePayload};
            break;

        default:
            return state;
    }


}