import React from 'react';
import ReactDOM from 'react-dom';

import RestartButtonComponent from './RestartButtonComponent';
import MuteComponent from './MuteComponent';
import GlassBoard from './GlassBoard';
import Board from './Board';

class BoardColumn extends React.Component{

    render(){

        return (
            <div id="boardColumn">
                <Board />
                <GlassBoard />

                <div id = "controlRow">

                    <RestartButtonComponent />

                    <div id = "currentPlayer"
                         className="controlRowElement" style={{color: playerColor}}>
                                {playerName}
                    </div>

                    <MuteComponent />

                </div>


                <div id = "snakeImageColumn">
                </div>
            </div>
        );
    }

}

export default BoardColumn;