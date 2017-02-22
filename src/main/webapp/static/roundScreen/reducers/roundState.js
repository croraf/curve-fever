
export default function(state = "round_idle", action){

    switch (action.type){
        case "REQUEST_RESTART":
            return "restart_round_requested";
        case "restartConfirmed":
            return "round_restarting";
            break;
        case "ROUND_START":
            return "round_started";
            break;
        default:
            return state;
    }


}