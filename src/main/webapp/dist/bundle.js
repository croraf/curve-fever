/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//some js studies


/*   canvas.onclick = function(event) {

        var boardAudio=document.getElementById("boardAudio");
        boardAudio.volume = 0.4
        //TODO temporary disable narration
        boardAudio.play();
    };*/


/*canvas.onclick = function(event){

    var x = event.pageX - $("#board").offset().left;
    var y = event.pageY - $("#board").offset().top;

    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2*Math.PI);
    ctx.stroke();
};*/

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function() {

    var songsList = [
        "static/roundScreen/songs/TheCurseOfMonkeyIsland.mp3",
        "static/roundScreen/songs/05 - Following The Shop Keeper.mp3",
        "static/roundScreen/songs/14 - Monkey Island.mp3",
        "static/roundScreen/songs/24 - Monkey Island - Remix.mp3"
    ];

    var currentSongIndex = 0;

    var backgroundAudio=document.getElementById("backgroundAudio");
    backgroundAudio.volume=0.1;



    backgroundAudio.onended = function() {
        currentSongIndex = (currentSongIndex + 1) % songsList.length;

        startSong(currentSongIndex);
    };

    startSong(0);

    function startSong(currentSongIndex){

        backgroundAudio.src = songsList[currentSongIndex];
        backgroundAudio.play();
    }

    var mute=$("#mute i");

    mute.click( function(event) {

        if (backgroundAudio.paused) {
            backgroundAudio.play();
            mute.html("volume_up")
        } else {
            backgroundAudio.pause();
            mute.html("volume_off")
        }
    });

});



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webSocket1__ = __webpack_require__(3);




var directionListenerModule = (function() {
    var module = {};


    var directionUpdate = {
        position : null
    }

    var body = document.getElementById("body");

    //evaluate events in the capturing phase
    body.addEventListener("keydown", steer, true);
    body.addEventListener("keyup", unSteer, true);

    var steerDirection = "ahead";
    var leftPressed = false;
    var rightPressed = false;

    function steer(event){

        if (event.keyCode === 37){
            leftPressed = true;
            steerDirection = "left";
        } else if (event.keyCode === 39){
            rightPressed = true;
            steerDirection = "right";
        }

        __WEBPACK_IMPORTED_MODULE_0__webSocket1__["a" /* default */].sendMessage("directionUpdate", steerDirection);
    }

    function unSteer(event){
        if (event.keyCode === 37) {

            leftPressed = false;
            if (rightPressed) {
                steerDirection = "right";
            } else {
                steerDirection = "ahead";
            }
        } else if (event.keyCode === 39){

            rightPressed = false;
            if (leftPressed){
                steerDirection = "left";
            } else {
                steerDirection = "ahead";
            }
        }

        __WEBPACK_IMPORTED_MODULE_0__webSocket1__["a" /* default */].sendMessage("directionUpdate", steerDirection);
    }

    return module;
})();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var webSocketModule = (function(){

    var module = {};

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

        playersListModule.updateListOfPlayers();

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


    module.sendMessage = sendMessage;
    return module;
})();

/* harmony default export */ __webpack_exports__["a"] = webSocketModule;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(0);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);