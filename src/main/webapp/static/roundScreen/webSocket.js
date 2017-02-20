import store from './components/root';
import {networkInAction} from './actions/networkInAction';

import drawOnGlassModule from './drawOnGlass';
import chatModule from './chat';
import drawPlayerModule from './drawPlayer';
import restartModule from './restartRound';
import playersListModule from './playersList';


var myWebSocket = new WebSocket(
  window.document.baseURI.replace(location.protocol, "ws:") + "services/webSocket"
  //, sub-protocol
);

function sendMessage(type, genericPayload){

        if(myWebSocket.readyState === myWebSocket.OPEN){

            myWebSocket.send(
                JSON.stringify(
                    {
                        type: type,
                        genericPayload: genericPayload
                    }
                )
            );
        };
}

myWebSocket.onopen = function(event){

    console.log("websocket opened");
}

myWebSocket.onmessage = function (messageEvent){

    var message = JSON.parse(messageEvent.data);

    store.dispatch(networkInAction(message));

    switch (message.type){
        case "userDisconnected":
            var user = message.genericPayload;
            playersListModule.removeUser(user);
            break;
        case "userConnected":
            var user = message.genericPayload;
            playersListModule.addUser(user);
            break;
        case "previousUsers":
            var previousUsers = message.genericPayload;
            playersListModule.addPreviousUsers(previousUsers);
            break;
        case "positionsUpdate":
            positionsUpdate(message.genericPayload);
            break;
        case "addItem":
            drawOnGlassModule.addItem(message.genericPayload);
            break;
        case "itemPickup":
            drawOnGlassModule.itemPickup(message.genericPayload);
            break;
        case "chatMessage":
            chatModule.writeMessageToChatBox(message.genericPayload);
            break;
        case "restartConfirmed":
            restartModule.restartRound();
            break;
        default:
            console.log("websocket: unrecognized websocket message type");
    }



};



function positionsUpdate(locationUpdates){

    Object.keys(locationUpdates).forEach(function(userName){

            var positionUpdateForOnePlayer = locationUpdates[userName];

            if (positionUpdateForOnePlayer === null) {

                        console.log("coordinate su null!!!!!!")
                        return;
            }

            drawPlayerModule.drawPlayer(userName, positionUpdateForOnePlayer);

    });
}


export default {
    sendMessage: sendMessage
};