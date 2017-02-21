
export default function(state = [], action){

    switch (action.type){
        case "addItem":
            let newItem = action.genericPayload;

            return [...state, newItem];
            break;

        case "itemPickup":
            let newItemsList = [...state];
            newItemsList.splice(action.genericPayload, 1);
            return newItemsList;
            break;

        case "restartConfirmed":
            return [];

        default:
            return state;
    }


}