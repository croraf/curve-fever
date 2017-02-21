import './components/root';

import drawPlayerModule from './drawPlayer';
import webSocketModule from './webSocket';


import './components/root'

$("#restart").click( function (event) {

    webSocketModule.sendMessage("restart", null);
});


function restartRound(){
    drawPlayerModule.clearCanvas();
}

var module = {};
module.restartRound = restartRound;

export default {
    restartRound: restartRound
};