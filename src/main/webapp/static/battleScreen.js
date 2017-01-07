
$(function() {

    var backgroundAudio=document.getElementById("backgroundAudio");
    backgroundAudio.volume=0.1;
    //TODO temprorary disable play background on start
    backgroundAudio.play();

    var mute=$("#mute");

    mute.click( function(event) {

        backgroundAudio=document.getElementById("backgroundAudio");

        if (backgroundAudio.paused) {
            backgroundAudio.play();
            mute.html = "volume_up"
        } else {
            backgroundAudio.pause();
            mute.html = "volume_off"
        }
    });

    var canvas=document.getElementById("board");

    canvas.onclick = function(event) {

        var boardAudio=document.getElementById("boardAudio");
        boardAudio.volume = 0.4
        //TODO temporary disable narration
        //boardAudio.play();
    };

    var ctx = canvas.getContext("2d");

    canvas.onclick = function(event){

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
    var speed = 3.6;

    function drawCircle(){

        ctx.beginPath();
        ctx.arc(currentCoordX, currentCoordY, 5, 0, 2*Math.PI);
        ctx.stroke();

        if (steerDirection === "left"){
            direction = direction - Math.PI/24;
        } else if (steerDirection === "right"){
            direction = direction + Math.PI/24;
        }

        currentCoordX = (currentCoordX + speed*Math.cos(direction)) % canvas.width;
        if (currentCoordX < 0) { currentCoordX += canvas.width};
        currentCoordY = (currentCoordY + speed*Math.sin(direction)) % canvas.height;
        if (currentCoordY < 0) { currentCoordY += canvas.height};

        if (started === true) {
         
            setTimeout(drawCircle, 55);
        }
    }




    var body = document.getElementById("body");

    //TODO check what true means - its the bubling/capturing
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
    }
});

