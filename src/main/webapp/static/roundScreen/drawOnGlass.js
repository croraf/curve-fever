
var glassLoopRefreshPeriod = 20000;

(function (){

    var canvas=document.getElementById("glass");
    var ctx2 = canvas.getContext("2d");
    var curveRadius = 8;

    var i = 0;

    //main drawing loop
    function glassLoop(){

        i++;
        if (i === 10) {
            ctx2.clearRect(0,0,canvas.width, canvas.height);
            i = 0;
        }
        /*if (started === true){}*/

        var playerCoordinates = {
                             x : Math.random()*canvas.width,
                             y : Math.random()*canvas.height
                          };

        ctx2.strokeStyle = "#FFFFFF";
        ctx2.beginPath();
        ctx2.arc(playerCoordinates.x, playerCoordinates.y, curveRadius, 0, 2*Math.PI);
        ctx2.stroke();
        ctx2.strokeStyle = "#FFFFFF";


        setTimeout(glassLoop, glassLoopRefreshPeriod);
    }

    //start main game loop
    glassLoop();


})();
