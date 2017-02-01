
var drawOnGlassModule = (function (){
    var module = {};

    var itemsLoopRefreshPeriod = 3000;
    var glassCanvas=document.getElementById("glass");
    var ctx2 = glassCanvas.getContext("2d");
    ctx2.strokeStyle = "#FFFFFF";
    var itemRadius = 12;
    
    var itemsList = [];

    //main drawing loop
    function itemsLoop(){

        var item = {
                      x : Math.random()*glassCanvas.width,
                      y : Math.random()*glassCanvas.height
                   };
                          
        itemsList.push(item);

        drawItem(item);

        setTimeout(itemsLoop, itemsLoopRefreshPeriod);
    }
    
    function redrawItems(){
        
        ctx2.clearRect(0,0,glassCanvas.width, glassCanvas.height);

        itemsList.forEach(function(item){
            drawItem(item);
        });
    }

    var image = $("<img>")
        .attr("src", "static/roundScreen/images/turtle2.png")
        .attr("width", itemRadius*2)
        .attr("height", itemRadius*2)[0];

    function drawItem(item){


        ctx2.beginPath();
        //ctx2.arc(item.x, item.y, itemRadius, 0, 2*Math.PI);
        ctx2.drawImage(image, item.x-itemRadius, item.y-itemRadius, itemRadius*2, itemRadius*2);
        ctx2.stroke();
    }

    //start main loop
    itemsLoop();
    
    
    clearGlassCanvas = function(){
        ctx2.clearRect(0,0,glassCanvas.width, glassCanvas.height);
        itemsList = [];
    };

    function checkItemPickup(playerCoordinates){

        var itemPickupHappened = false;

        itemsList.forEach(function(item, i){

            // todo take curve radius from somewhere
            if (Math.hypot(playerCoordinates.x - item.x, playerCoordinates.y - item.y) < itemRadius+4){
                itemsList.splice(i, 1);
                itemPickupHappened = true;
            }
        });

        if (itemPickupHappened === true){
            redrawItems();
        }
    };

    function drawStartRoundScreen(){

        ctx2.font = '48px serif';

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

    module.clearGlassCanvas = clearGlassCanvas;
    module.checkItemPickup = checkItemPickup;
    module.drawStartRoundScreen = drawStartRoundScreen;
    return module;
})();
