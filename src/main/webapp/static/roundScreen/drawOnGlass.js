
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

        redrawItems();

        setTimeout(itemsLoop, itemsLoopRefreshPeriod);
    }
    
    function redrawItems(){
        
        ctx2.clearRect(0,0,glassCanvas.width, glassCanvas.height);

        itemsList.forEach(function(item, i){

               ctx2.beginPath();
               ctx2.arc(item.x, item.y, itemRadius, 0, 2*Math.PI);
               ctx2.stroke();
        });
    }

    //start main loop
    itemsLoop();
    
    
    clearItems = function(){
        ctx2.clearRect(0,0,glassCanvas.width, glassCanvas.height);
        itemsList = [];
    };

    checkItemPickup = function(playerCoordinates){

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

    module.clearItems = clearItems;
    module.checkItemPickup = checkItemPickup;
    return module;
})();
