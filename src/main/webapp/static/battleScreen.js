
window.onload = function() {

    var backgroundAudio=document.getElementById("backgroundAudio");
    backgroundAudio.volume=0.1;
    //TODO temprorary disable play background on start
    //backgroundAudio.play();

    var mute=document.getElementById("mute");

    mute.onclick = function(event) {

        backgroundAudio=document.getElementById("backgroundAudio");

        if (backgroundAudio.paused) {
            backgroundAudio.play();
        } else {
            backgroundAudio.pause();
        }
    };

    var board=document.getElementById("board");

    board.onclick = function(event) {

        var boardAudio=document.getElementById("boardAudio");
        boardAudio.volume = 0.4
        //TODO temporary disable narration
        //boardAudio.play();
    };


    var canvas = document.getElementById("board");
    var ctx = canvas.getContext("2d");

    canvas.onclick = function(event){

        var rect = canvas.getBoundingClientRect();
        var x = event.pageX - canvas.offsetLeft;
        var y = event.pageY - canvas.offsetTop;

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2*Math.PI);
        ctx.stroke();
    }

    //start functionality
    var start = document.getElementById("start");
    var started = false;
    start.onclick = function (event) {
        
        if (started){

                started = false;
        } else {

                started = true;
                drawCircle();

        }

    }

    var currentCoordX = 5;
    var currentCoordY = 5;
    var direction = Math.PI/3;
    var speed = 3.5;

    function drawCircle(){

        ctx.beginPath();
        ctx.arc(currentCoordX, currentCoordY, 5, 0, 2*Math.PI);
        ctx.stroke();

        if (steerDirection === "left"){
            direction = direction - Math.PI/16;
        } else if (steerDirection === "right"){
            direction = direction + Math.PI/16;
        }

        currentCoordX = (currentCoordX + speed*Math.cos(direction)) % canvas.width;
        currentCoordY = (currentCoordY + speed*Math.sin(direction)) % canvas.height;

        if (started === true) {
         
            setTimeout(drawCircle, 50);
        }
    }

    var body = document.getElementsByTagName("body");

    var steerDirection = "ahead";

    //TODO check what true means
    canvas.addEventListener("keydown", steer, true);
    canvas.addEventListener("keyup", unSteer, true);

    function steer(event){

        if (event.keyCode === 37){
            steerDirection = "left";
        } else if (event.keyCode === 39){
            steerDirection = "right";
        }

    }

    function unSteer(event){
        if (event.keyCode === 37 || event.keyCode === 39){
            steerDirection = "ahead";
        }
    }
};

