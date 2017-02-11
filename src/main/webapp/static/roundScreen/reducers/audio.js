
export default function(state = "ON", action){

    let returnOb = null;

    switch (action.type){
        case "TOGGLE_MUTE":
            if (state === "ON") {
                return  "OFF";
            } else {
                return "ON";
            }

            break;

        default:
            return state;
    }


}