
export default function(state = false, action){

    switch (action.type){
        case "restartConfirmed":
            return true;
            break;

        default:
            return state;
    }


}