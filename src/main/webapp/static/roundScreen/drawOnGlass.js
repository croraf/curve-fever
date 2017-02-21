
import './components/root';

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

export default {
    itemPickup: itemPickup,
    drawStartRoundScreen: drawStartRoundScreen,
    addItem: addItem
};
