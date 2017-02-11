
export default function(state = null, action){

    switch (action.type){
        case "chatMessage":

            return action.genericPayload;
            break;

        default:
            return state;
    }


}