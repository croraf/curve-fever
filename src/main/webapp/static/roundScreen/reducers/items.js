
export default function(state = [], action){

    switch (action.type){
        case "addItem":
            let newItem = action.genericPayload;

            return [...state, newItem];
            break;

        /*case "itemPickup":
            return {
            };
            break;*/

        default:
            return state;
    }


}