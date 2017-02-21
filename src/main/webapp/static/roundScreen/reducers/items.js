
export default function(state = [], action){

    switch (action.type){
        case "addItem":
            let newItem = action.genericPayload;

            return [...state, newItem];
            break;

        /*case "itemPickup":
            return {
                allReceivedChat: state.allReceivedChat,
                sending: true
            };
            break;*/

        default:
            return state;
    }


}