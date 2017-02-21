
export default function(state = false, action){

    switch (action.type){
        case "restartConfirmed":
            return true;
            break;
        case "END_IS_STARTING":
            return false;
            break;
        default:
            return state;
    }


}