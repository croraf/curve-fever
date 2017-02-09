
export default function(state = {audio: "ON"}, action){

    console.log("before reducer:" + state.audio );

    let returnOb = null;

    switch (action.type){
        case "TOGGLE_MUTE":
            if (state.audio === "ON") {
                returnOb =  {audio: "OFF"};
            } else {
                returnOb = {audio: "ON"};
            }

            console.log("after reducer:" + state.audio);
            return returnOb;
            break;

        default:
            console.log("after reducer:" + state.audio);
            return state;
    }


}