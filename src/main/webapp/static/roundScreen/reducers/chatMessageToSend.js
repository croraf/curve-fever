

export default function(state = {payload: "", toSend: false}, action){

    switch (action.type){
        case "CHAT_OUT_MESSAGE":
            return {
                payload: action.payload,
                toSend: true
            };
            break;

        default:
            return state;
    }


}