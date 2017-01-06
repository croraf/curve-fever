
window.onload = function() {

    var backgroundAudio=document.getElementById("backgroundAudio");
    backgroundAudio.volume=0.1;
    backgroundAudio.play();

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
        boardAudio.play();
    };


    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    //canvas.width = 903;
    //canvas.height = 657;
    var canvasImage = new Image();
    canvasImage.src = "/static/tableTop.jpg";
    canvasImage.onload = function () {
        
        //ctx.drawImage(canvasImage, 0, 0);
    }
};

