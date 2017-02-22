import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import {startRoundAction} from '../actions/startRoundAction';


var itemImageSlow = $("<img>")
                            .attr("src", "static/roundScreen/images/turtle2mini.png")
                            .attr("width", itemRadius*2)
                            .attr("height", itemRadius*2)[0];

var itemImageFast = $("<img>")
                            .attr("src", "static/roundScreen/images/cheetahMini.png")
                            .attr("width", itemRadius*2)
                            .attr("height", itemRadius*2)[0];

var itemRadius = 12;

class GlassBoard extends React.Component{

    componentDidMount(){
        this.ctx = this.glassDOM.getContext("2d");
        this.ctx.strokeStyle = "#FFFFFF";
    }

    componentWillReceiveProps(nextProps){

        if (nextProps.roundState === "round_restarting"){
            drawStartRoundScreen(this.ctx, nextProps.startRoundCallback);
        } else{

            clearGlassCanvas(this.ctx);
            nextProps.items.forEach( (item) => {
                    drawItem(this.ctx, item);
                }
            );

        }
    }

    render(){

        return (
            <canvas id="glass" width="600" height="520"
                    ref={(glassDOM) => {this.glassDOM = glassDOM;} }
            ></canvas>
        );
    }

}

let mapDispatchToProps = (dispatch) => ({
    startRoundCallback: () => dispatch(startRoundAction())
});

let mapStateToProps = (state) => ({
    items: state.items,
    roundState: state.roundState
});


let GlassBoardContainer = connect(mapStateToProps, mapDispatchToProps)(GlassBoard);
export default GlassBoardContainer;



function drawStartRoundScreen(ctx, startRoundCallback){

    ctx.font = '48px serif';
    ctx.strokeStyle = "darkkhaki";

    function drawCount(count){

        clearGlassCanvas(ctx);

        ctx.strokeText(count, ctx.canvas.width / 2, ctx.canvas.height / 2);

        if (count === 0) {
            clearGlassCanvas(ctx);
            startRoundCallback();
        } else {
            setTimeout(drawCount, 1000, count-1);
        }
    }

    drawCount(5);
}

function clearGlassCanvas(ctx){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
};

function drawItem(ctx, item){

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

    ctx.beginPath();
    //ctx2.arc(item.x, item.y, itemRadius, 0, 2*Math.PI);
    ctx.drawImage(itemImage, item.position.x-itemRadius, item.position.y-itemRadius, itemRadius*2, itemRadius*2);
    ctx.stroke();
}