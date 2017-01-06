
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
};

