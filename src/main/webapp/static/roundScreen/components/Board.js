import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

class Board extends React.Component{

    componentDidMount(){
        this.ctx = this.boardDOM.getContext("2d");
    }

    componentWillReceiveProps(nextProps){

        if (nextProps.roundState === "round_restarting"){

            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        }
    }

    render(){

        return (
             <canvas id="board" width="600" height="520" className="glowingShadow"
                     ref={(boardDOM) => {this.boardDOM = boardDOM;} }>
             </canvas>
        );
    }

}

let mapStateToProps = (state) => ({
    roundState: state.roundState
});


let BoardContainer = connect(mapStateToProps, undefined)(Board);
export default BoardContainer;