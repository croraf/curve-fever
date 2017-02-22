import './components/root';


var canvas=document.getElementById("board");
var ctx = canvas.getContext("2d");
var curveRadius = 4;

function drawPlayer(userName, playerCoordinates, color){

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(playerCoordinates.x, playerCoordinates.y, curveRadius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.strokeStyle = "#FFFFFF";

}


export default {
    drawPlayer: drawPlayer,
};