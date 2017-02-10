
export default function(state = {audio: "ON"}, action){

    console.log("before audio reducer:" + state.audio );

    let returnOb = null;

    switch (action.type){
        case "TOGGLE_MUTE":
            if (state.audio === "ON") {
                returnOb =  {audio: "OFF"};
            } else {
                returnOb = {audio: "ON"};
            }

            console.log("after audio reducer:" + state.audio);
            return returnOb;
            break;

        default:
            return state;
    }


}