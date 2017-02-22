import store from './components/root';
import {networkInAction} from './actions/networkInAction';

import chatModule from './chat';
import drawPlayerModule from './drawPlayer';
import playersListModule from './playersList';

import {myWebSocketModule} from './webSocket';

myWebSocketModule.myWebSocket.onmessage = function (messageEvent){

    var message = JSON.parse(messageEvent.data);

    store.dispatch(networkInAction(message));

    switch (message.type){
        case "userDisconnected":/*
            var user = message.genericPayload;
            playersListModule.removeUser(user);*/
            break;
        case "userConnected":/*
            var user = message.genericPayload;
            playersListModule.addUser(user);*/
            break;
        case "previousUsers":/*
            var previousUsers = message.genericPayload;
            playersListModule.addPreviousUsers(previousUsers);*/
            break;
        case "positionsUpdate":
            positionsUpdate(message.genericPayload);
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