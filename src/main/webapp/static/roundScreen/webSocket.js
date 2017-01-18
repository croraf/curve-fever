

var webSocketModule = (function(){

    var module = {};

    var myWebSocket = new WebSocket(
      window.document.baseURI.replace(location.protocol, "ws:") + "services/webSocket"
      //, sub-protocol
    );

    function sendPosition(posUpdMessageObject){

        if(myWebSocket.readyState === myWebSocket.OPEN){

           myWebSocket.send(
               JSON.stringify(posUpdMessageObject)
           );
        };

    }

    myWebSocket.onmessage = function (event){

        var locationUpdates = JSON.parse(event.data);

        Object.keys(locationUpdates).forEach(function(userName){


                drawEnemy(userName, locationUpdates[userName]);

        });
    };


    var canvas=document.getElementById("board");
    var ctx2 = canvas.getContext("2d");
    var curveRadius = 4;

    function drawEnemy(userName, enemyCoordinates){

        if (enemyCoordinates === null) {

            console.log("coordinate su null!!!!!!")
            return;
        }


        ctx2.strokeStyle = allPlayers[userName].color;
        /*ctx2.strokeStyle = "#FF0000";*/
        ctx2.beginPath();
        ctx2.arc(enemyCoordinates.x, enemyCoordinates.y, curveRadius, 0, 2*Math.PI);
        ctx2.stroke();
        ctx2.strokeStyle = "#FFFFFF";


    }

    module.sendPosition = sendPosition;

    return module;
})();

