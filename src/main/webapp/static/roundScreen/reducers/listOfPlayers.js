
export default function(state = {}, action){

    switch (action.type){
        case "userDisconnected":
            var userToDisconnect = action.genericPayload;

            var newState = Object.assign({}, state);
            delete newState[userToDisconnect];
            return newState;
            break;
        case "userConnected":
            var newUser = action.genericPayload;
            return Object.assign({}, state, {[newUser.name] : newUser});
            break;
        case "previousUsers":
            let previousUsers = action.genericPayload;
            return previousUsers;
            break;

        default:
            return state;
    }


}