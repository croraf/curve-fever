
export default function(state = false, action, items){

    switch (action.type){
        case "restartConfirmed":
            items = [];
            return true;
            break;

        default:
            return state;
    }


}