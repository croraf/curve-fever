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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webSocket__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__playersList__ = __webpack_require__(3);





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
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawOnGlass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drawPlayer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restartRound__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__playersList__ = __webpack_require__(3);








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
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playersList__ = __webpack_require__(3);





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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./containerWithList.css", function() {
			var newContent = require("!!./../../../../node_modules/css-loader/index.js!./containerWithList.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./roundScreen.css", function() {
			var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./roundScreen.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./style1.css", function() {
			var newContent = require("!!./../../../../node_modules/css-loader/index.js!./style1.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webSocket__ = __webpack_require__(4);




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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".myContainer {\r\n    position: relative;\r\n\tmargin-top: 30px;\r\n}\r\n\r\n#playersListCollumn {\r\n\twidth: 20%;\r\n\tmargin-left: 10%;\r\n}\r\n\r\n#playersList {\r\n\theight: 520px;\r\n\toverflow-y: auto;\r\n\tborder: 1px solid white;\r\n\tborder-right: 0px;\r\n}\r\n\r\n#playersList a {\r\n\tcolor: white;\r\n\tbackground-color: black;\r\n\tpadding:5px;\r\n\tfont-family: \"Roboto\";\r\n}\r\n\r\n#playersList a:hover {\r\n\tbackground-color: rgb(70,70,70);\r\n\tcursor:pointer;\r\n}\r\n\r\n.scrollbar-style-2::-webkit-scrollbar-track\r\n{\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tborder-radius: 10px;\r\n\tbackground-color: darkgray;\r\n}\r\n\r\n.scrollbar-style-2::-webkit-scrollbar\r\n{\r\n\twidth: 12px;\r\n\tbackground-color: black;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.scrollbar-style-2::-webkit-scrollbar-thumb\r\n{\r\n\tborder-radius: 10px;\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n\tbackground-color: white;\r\n}\r\n\r\n.glowingShadow {\r\n\r\n\tborder-radius: 8px;\r\n\r\n\tbox-shadow: 0px 0px 20px 0px #fafafa,\r\n\t\t\t\t0 0px 14px 2px #9e9e9e,\r\n\t\t\t\t0 0px 5px -3px #9e9e9e;\r\n}\r\n\r\n.collectionItem {\r\n\r\n\tbackground-color: black;\r\n\tpadding: 0px;\r\n}", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\r\n#playersListCollumn {\r\n    margin-left: 8%;\r\n    width: 18%;\r\n}\r\n\r\n#playersList {\r\n    height: 200px;\r\n}\r\n\r\n#playersListCollumn > a {\r\n\tcolor: darkkhaki;\r\n}\r\n\r\n#playersListCollumn > h5 {\r\n\tcolor: darkkhaki;\r\n}\r\n\r\n#chat {\r\n    height: 240px;\r\n    overflow-y: auto;\r\n    border: 1px solid white;\r\n    border-right: 0px;\r\n    padding-left: 10px;\r\n    padding-top: 5px;\r\n    font-family: \"Roboto\";\r\n}\r\n\r\n#chat i {\r\n    font-family: 'Abril Fatface';\r\n}\r\n\r\n#chatInputBox {\r\n    height: 50px;\r\n    overflow-y: auto;\r\n    border: 1px solid white;\r\n    border-right: 0px;\r\n}\r\n\r\n#chatForm input{\r\n    margin: 0px;\r\n    border-style: none;\r\n    box-shadow: none;\r\n    padding-left: 10px;\r\n    font-family: \"Roboto\";\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n#boardCollumn {\r\n\t/*needed positioning for absolute positioning of childs*/\r\n\tposition: absolute;\r\n\tleft: 29%;\r\n\ttop: 0%;\r\n\r\n}\r\n\r\n#board{\r\n\tposition: absolute;\r\n    top: 35px;\r\n\tborder: 1px solid white;\r\n\t/*background-image: url(\"tableTop.jpg\");*/\r\n\t/*background-size: 600px, 520px;*/\r\n\twidth: 600px;\r\n\theight: 520px;\r\n\tz-index: 0;\r\n\t/*cursor: crosshair;*/\r\n}\r\n\r\n#glass {\r\n    position: absolute;\r\n    top: 35px;\r\n    /*background-image: url(\"tableTop.jpg\");*/\r\n    /*background-size: 600px, 520px;*/\r\n    width: 600px;\r\n    height: 520px;\r\n    z-index: 1;\r\n    /*cursor: crosshair;*/\r\n}\r\n\r\n#snakeImageColumn {\r\n    position: absolute;\r\n    top: 40px;\r\n    left: 630px;\r\n    background-image: url(" + __webpack_require__(15) + ");\r\n    width: 230px;\r\n    height: 520px;\r\n}\r\n\r\n#controlRow {\r\n    position: absolute;\r\n    top: 570px;\r\n    width: 600px;\r\n}\r\n\r\n.controlRowElement{\r\n    position:absolute;\r\n    text-align:center;\r\n\r\n}\r\n\r\n#restart {\r\n    left: 0%;\r\n    width:10%;\r\n    cursor: pointer;\r\n    color: darkkhaki;\r\n}\r\n\r\n#currentPlayer {\r\n    left: 40%;\r\n    color: white;\r\n    width: 20%;\r\n    border: 1px darkkhaki solid;\r\n}\r\n\r\n#mute {\r\n    right: 0%;\r\n    width: 10%;\r\n    cursor: pointer;\r\n    color: darkkhaki;\r\n}\r\n\r\n\r\n/*#positionDataBox {\r\n    position: absolute;\r\n    left: 240px;\r\n    top: 590px;\r\n    color: white;\r\n    width: 100px;\r\n    height: 300px;\r\n    border: 1px white solid;\r\n    text-align: center;\r\n}*/", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "body {\r\n    background: black;\r\n    color: white;\r\n}\r\n\r\n.error {\r\n    color: Red;\r\n    font-style: italic;\r\n}\r\n\r\na:visited {\r\n    color: #79a5f7;\r\n}\r\n\r\n\r\n\r\ninput:-webkit-autofill,\r\ninput:-webkit-autofill:hover,\r\ninput:-webkit-autofill:focus,\r\ninput:-webkit-autofill:active {\r\n    transition-delay: 9999s;\r\n    /*-webkit-transition: color 3s ease-out, background-color 3s ease-out;*/\r\n}\r\n\r\n@font-face{\r\n    font-family: 'Abril Fatface';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Abril Fatface'), local('AbrilFatface-Regular'), url(https://fonts.gstatic.com/s/abrilfatface/v8/X1g_KwGeBV3ajZIXQ9VnDn1PgMwFt2V-WJ2uOZ4WXLU.woff2) format('woff2');\r\n    unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n\r\nhtml {\r\n    font-family: \"Abril Fatface\";\r\n}\r\n\r\ninput[type=text] {\r\n    font-size:20px;\r\n}", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "dist/snakeImage.jpg";

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawOnGlass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawPlayer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webSocket__ = __webpack_require__(4);









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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_roundScreen_backgroundAudio_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_roundScreen_chat_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_roundScreen_directionListener_js__ = __webpack_require__(11);

var style1 = __webpack_require__(9);
var style2 = __webpack_require__(7);
var style3 = __webpack_require__(8);





    //import './static/roundScreen/webSocket.js'
        // import drawOnGlass
        // import drawPlayer
        // import restartRound
        // import playersList




/***/ })
/******/ ]);