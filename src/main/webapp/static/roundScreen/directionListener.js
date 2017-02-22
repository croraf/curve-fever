
import {myWebSocketModule} from './webSocket';
import store from './index';
import {directionChangeAction} from './actions/directionChangeAction';

var directionUpdate = {
    position : null
}

var body = document.getElementById("body");

//evaluate events in the capturing phase
body.addEventListener("keydown", steer, true);
body.addEventListener("keyup", unSteer, true);

var steerDirection = "ahead";
var leftPressed = false;
var rightPressed = false;

function steer(event){

    if (event.keyCode === 37){
        leftPressed = true;
        steerDirection = "left";

    } else if (event.keyCode === 39){
        rightPressed = true;
        steerDirection = "right";
        store.dispatch(directionChangeAction("right"));
    }

    store.dispatch(directionChangeAction(steerDirection));
    myWebSocketModule.sendMessage("directionUpdate", store.getState().steerDirection);
}

function unSteer(event){

    if (event.keyCode === 37) {

        leftPressed = false;
        if (rightPressed) {
            steerDirection = "right";
        } else {
            steerDirection = "ahead";
        }
    } else if (event.keyCode === 39){

        rightPressed = false;
        if (leftPressed){
            steerDirection = "left";
        } else {
            steerDirection = "ahead";
        }
    }


    store.dispatch(directionChangeAction(steerDirection));
    myWebSocketModule.sendMessage("directionUpdate", store.getState().steerDirection);
}
