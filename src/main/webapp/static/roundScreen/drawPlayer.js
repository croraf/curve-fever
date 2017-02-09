import './components/root';
import playersListModule from './playersList';


var canvas=document.getElementById("board");
var ctx = canvas.getContext("2d");
var curveRadius = 4;

function drawPlayer(userName, playerCoordinates){

    ctx.strokeStyle = playersListModule.allPlayers[userName].color;
    ctx.beginPath();
    ctx.arc(playerCoordinates.x, playerCoordinates.y, curveRadius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.strokeStyle = "#FFFFFF";

}

function clearCanvas(){

    ctx.clearRect(0,0,canvas.width, canvas.height);
}

export default {
    drawPlayer: drawPlayer,
    clearCanvas: clearCanvas
};