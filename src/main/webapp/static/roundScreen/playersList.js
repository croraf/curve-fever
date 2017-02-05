
var allPlayers = {};


var playersListModule = (function(){

    var module = {};


    function updateListOfPlayers(){

        $("#playersList").html("");

        Object.values(allPlayers).forEach(function(player){

            var playerElement = $("<a></a>").
                    text(player.name + ' : ' + player.coins).
                    css("color", player.color).
                    addClass("collection-item");

            $("#playersList").append(playerElement);
        });
    }

    function addUser(user){

        allPlayers[user.name] = user;
        updateListOfPlayers();
        chatModule.writeSystemMessageToChatBox(user.name + " connected");
    }

    function removeUser(user){
        delete allPlayers[user.name];
        updateListOfPlayers();
        chatModule.writeSystemMessageToChatBox(user.name + " disconnected");
    }

    function addPreviousUsers(previousUsers){

        Object.keys(previousUsers).forEach(function(username){
            allPlayers[username] = previousUsers[username];
        });
    }


    module.updateListOfPlayers = updateListOfPlayers;
    module.removeUser = removeUser;
    module.addUser = addUser;
    module.addPreviousUsers = addPreviousUsers;
    return module;
})();