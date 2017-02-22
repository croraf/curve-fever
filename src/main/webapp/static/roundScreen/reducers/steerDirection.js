
export default function(state = "ahead", action){

    switch (action.type){
        case "DIRECTION_CHANGE":
            return action.direction;

        default:
            return state;
    }


}