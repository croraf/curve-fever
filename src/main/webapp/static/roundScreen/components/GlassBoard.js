import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';


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

    componentDidUpdate(){
        this.ctx = this.glassDOM.getContext("2d");
        this.ctx.strokeStyle = "#FFFFFF";
    }

    componentWillReceiveProps(nextProps){
        var itemImage = itemImageSlow;
        var item = (nextProps.items)[nextProps.items.length-1];

        this.ctx.beginPath();
        this.ctx.drawImage(itemImage, item.position.x-itemRadius, item.position.y-itemRadius, itemRadius*2, itemRadius*2);
        this.ctx.stroke();
    }

    render(){

        return (
            <canvas id="glass" width="600" height="520"
                    ref={(glassDOM) => {this.glassDOM = glassDOM;} }
            ></canvas>
        );
    }

}

let mapStateToProps = (state) => ({
    items: state.items,
    isStarting: state.isStarting
});


let GlassBoardContainer = connect(mapStateToProps, undefined)(GlassBoard);
export default GlassBoardContainer;