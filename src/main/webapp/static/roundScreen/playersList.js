
import './components/root';

import chatModule from './chat';


var allPlayers = {};


function addUser(user){

    allPlayers[user.name] = user;
    chatModule.writeSystemMessageToChatBox(user.name + " connected");
}

function removeUser(user){

    delete allPlayers[user.name];
    chatModule.writeSystemMessageToChatBox(user.name + " disconnected");
}

function addPreviousUsers(previousUsers){

    Object.keys(previousUsers).forEach(function(username){
        allPlayers[username] = previousUsers[username];
    });
}



export default {
    removeUser: removeUser,
    addUser: addUser,
    addPreviousUsers: addPreviousUsers,
    allPlayers: allPlayers
};