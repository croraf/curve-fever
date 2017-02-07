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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webSocket__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__playersList__ = __webpack_require__(1);





$("#chatForm").submit(function (e) {
    e.preventDefault();

    var text = $('input[name=text]').val();

    if (text === "") {
        return;
    } else {
        __WEBPACK_IMPORTED_MODULE_0__webSocket__["a" /* default */].sendMessage("chatMessage", text);
        $('input[name=text]').val("");
    }

});

function writeSystemMessageToChatBox(plainMessage){

    var element = $("<div>").css(
                                    {
                                        "text-align": "center",
                                        "color": "darkkhaki"
                                    }
                                )
                            .html("[" + plainMessage + "]<br/>");

    appendElementToChatBox(element);
}

function writeMessageToChatBox(receivedMessage){

    var username = receivedMessage.username;

    var usernameText =  $("<i>").html(username + ": ").css("color", __WEBPACK_IMPORTED_MODULE_1__playersList__["a" /* default */].allPlayers[username].color);

    var element = usernameText.add($("<span>").html(receivedMessage.chatMessagePayload + "<br/>"));

    appendElementToChatBox(element);
}

function appendElementToChatBox(element){

    $("#chat").append(element);
    $("#chat").scrollTop($("#chat")[0].scrollHeight);
}



/* harmony default export */ __webpack_exports__["a"] = {
    writeMessageToChatBox: writeMessageToChatBox,
    writeSystemMessageToChatBox: writeSystemMessageToChatBox
};



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat__ = __webpack_require__(0);




var allPlayers = {};


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
    __WEBPACK_IMPORTED_MODULE_0__chat__["a" /* default */].writeSystemMessageToChatBox(user.name + " connected");
}

function removeUser(user){
    delete allPlayers[user.name];
    updateListOfPlayers();
    __WEBPACK_IMPORTED_MODULE_0__chat__["a" /* default */].writeSystemMessageToChatBox(user.name + " disconnected");
}

function addPreviousUsers(previousUsers){

    Object.keys(previousUsers).forEach(function(username){
        allPlayers[username] = previousUsers[username];
    });
}



/* harmony default export */ __webpack_exports__["a"] = {
    updateListOfPlayers: updateListOfPlayers,
    removeUser: removeUser,
    addUser: addUser,
    addPreviousUsers: addPreviousUsers,
    allPlayers: allPlayers
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawOnGlass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drawPlayer__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restartRound__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__playersList__ = __webpack_require__(1);








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
            __WEBPACK_IMPORTED_MODULE_4__playersList__["a" /* default */].removeUser(user);
            break;
        case "userConnected":
            var user = message.genericPayload;
            __WEBPACK_IMPORTED_MODULE_4__playersList__["a" /* default */].addUser(user);
            break;
        case "previousUsers":
            var previousUsers = message.genericPayload;
            __WEBPACK_IMPORTED_MODULE_4__playersList__["a" /* default */].addPreviousUsers(previousUsers);
            break;
        case "positionsUpdate":
            positionsUpdate(message.genericPayload);
            break;
        case "addItem":
            __WEBPACK_IMPORTED_MODULE_0__drawOnGlass__["a" /* default */].addItem(message.genericPayload);
            break;
        case "itemPickup":
            __WEBPACK_IMPORTED_MODULE_0__drawOnGlass__["a" /* default */].itemPickup(message.genericPayload);
            break;
        case "chatMessage":
            __WEBPACK_IMPORTED_MODULE_1__chat__["a" /* default */].writeMessageToChatBox(message.genericPayload);
            break;
        case "restartConfirmed":
            __WEBPACK_IMPORTED_MODULE_3__restartRound__["a" /* default */].restartRound();
            break;
        default:
            console.log("websocket: unrecognized websocket message type");
    }

    __WEBPACK_IMPORTED_MODULE_4__playersList__["a" /* default */].updateListOfPlayers();

};



function positionsUpdate(locationUpdates){

    Object.keys(locationUpdates).forEach(function(userName){

            var positionUpdateForOnePlayer = locationUpdates[userName];

            if (positionUpdateForOnePlayer === null) {

                        console.log("coordinate su null!!!!!!")
                        return;
            }

            __WEBPACK_IMPORTED_MODULE_2__drawPlayer__["a" /* default */].drawPlayer(userName, positionUpdateForOnePlayer);

    });
}


/* harmony default export */ __webpack_exports__["a"] = {
    sendMessage: sendMessage
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var itemsLoopRefreshPeriod = 3000;
var glassCanvas=document.getElementById("glass");
var ctx2 = glassCanvas.getContext("2d");
ctx2.strokeStyle = "#FFFFFF";
var itemRadius = 12;

var itemsList = [];

//main drawing loop
function addItem(item){

    itemsList.push(item);
    drawItem(item);
}


function redrawItems(){

    ctx2.clearRect(0,0,glassCanvas.width, glassCanvas.height);

    itemsList.forEach(function(item){
        drawItem(item);
    });
}

var itemImageSlow = $("<img>")
                            .attr("src", "static/roundScreen/images/turtle2mini.png")
                            .attr("width", itemRadius*2)
                            .attr("height", itemRadius*2)[0];

var itemImageFast = $("<img>")
                            .attr("src", "static/roundScreen/images/cheetahMini.png")
                            .attr("width", itemRadius*2)
                            .attr("height", itemRadius*2)[0];

function drawItem(item){

    var itemImage;
    switch(item.type){
        case "slow":
            itemImage = itemImageSlow;
            break;
        case "fast":
            itemImage = itemImageFast;
            break;
        default:
            console.log("unrecognized item type");
    }

    ctx2.beginPath();
    //ctx2.arc(item.x, item.y, itemRadius, 0, 2*Math.PI);
    ctx2.drawImage(itemImage, item.position.x-itemRadius, item.position.y-itemRadius, itemRadius*2, itemRadius*2);
    ctx2.stroke();
}


function clearGlassCanvas(){
    ctx2.clearRect(0,0,glassCanvas.width, glassCanvas.height);
    itemsList = [];
};

function itemPickup(itemIndex){

    itemsList.splice(itemIndex, 1);
    redrawItems();
};

function drawStartRoundScreen(){

    ctx2.font = '48px serif';
    ctx2.strokeStyle = "darkkhaki";

    function drawCount(count){

        clearGlassCanvas();

        ctx2.strokeText(count, ctx2.canvas.width / 2, ctx2.canvas.height / 2);

        if (count === 0) {
            clearGlassCanvas();
        } else {
            setTimeout(drawCount, 1000, count-1);
        }
    }

    drawCount(5);
}

/* harmony default export */ __webpack_exports__["a"] = {
    itemPickup: itemPickup,
    drawStartRoundScreen: drawStartRoundScreen,
    addItem: addItem
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playersList__ = __webpack_require__(1);





var canvas=document.getElementById("board");
var ctx = canvas.getContext("2d");
var curveRadius = 4;

function drawPlayer(userName, playerCoordinates){

    ctx.strokeStyle = __WEBPACK_IMPORTED_MODULE_0__playersList__["a" /* default */].allPlayers[userName].color;
    ctx.beginPath();
    ctx.arc(playerCoordinates.x, playerCoordinates.y, curveRadius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.strokeStyle = "#FFFFFF";

}

function clearCanvas(){

    ctx.clearRect(0,0,canvas.width, canvas.height);
}

/* harmony default export */ __webpack_exports__["a"] = {
    drawPlayer: drawPlayer,
    clearCanvas: clearCanvas
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


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

/* unused harmony default export */ var _unused_webpack_default_export = {};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webSocket__ = __webpack_require__(2);




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

    __WEBPACK_IMPORTED_MODULE_0__webSocket__["a" /* default */].sendMessage("directionUpdate", steerDirection);
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

    __WEBPACK_IMPORTED_MODULE_0__webSocket__["a" /* default */].sendMessage("directionUpdate", steerDirection);
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawOnGlass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawPlayer__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webSocket__ = __webpack_require__(2);









$("#restart").click( function (event) {

    __WEBPACK_IMPORTED_MODULE_2__webSocket__["a" /* default */].sendMessage("restart", null);
});


function restartRound(){
    __WEBPACK_IMPORTED_MODULE_1__drawPlayer__["a" /* default */].clearCanvas();
    __WEBPACK_IMPORTED_MODULE_0__drawOnGlass__["a" /* default */].drawStartRoundScreen();
}

var module = {};
module.restartRound = restartRound;

/* harmony default export */ __webpack_exports__["a"] = {
    restartRound: restartRound
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_roundScreen_backgroundAudio_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_roundScreen_chat_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_roundScreen_directionListener_js__ = __webpack_require__(6);



    //import webSocket
        // import drawOnGlass
        // import drawPlayer
        // import restartRound
        // import playersList




/***/ })
/******/ ]);