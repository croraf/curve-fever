import './components/root';

import drawOnGlassModule from './drawOnGlass';
import drawPlayerModule from './drawPlayer';
import webSocketModule from './webSocket';


import './root'

$("#restart").click( function (event) {

    webSocketModule.sendMessage("restart", null);
});


function restartRound(){
    drawPlayerModule.clearCanvas();
    drawOnGlassModule.drawStartRoundScreen();
}

var module = {};
module.restartRound = restartRound;

export default {
    restartRound: restartRound
};