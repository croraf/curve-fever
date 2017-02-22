import store from './components/root';
import {networkInAction} from './actions/networkInAction';

import drawPlayerModule from './drawPlayer';

import {myWebSocketModule} from './webSocket';

myWebSocketModule.myWebSocket.onmessage = function (messageEvent){

    var message = JSON.parse(messageEvent.data);

    store.dispatch(networkInAction(message));

    switch (message.type){
        case "positionsUpdate":
            positionsUpdate(message.genericPayload);
            break;
        case "userDisconnected":
            break;
        case "userConnected":
            break;
        case "previousUsers":
            break;
        case "addItem":
            break;
        case "itemPickup":
            break;
        case "chatMessage":
            break;
        case "restartConfirmed":
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

            console.log(store.getState());

            drawPlayerModule.drawPlayer(
                userName, positionUpdateForOnePlayer, store.getState().listOfPlayers[userName].color
            );

    });
}