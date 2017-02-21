import React from 'react';
import ReactDOM from 'react-dom';

import RestartButtonComponent from './RestartButtonComponent';
import MuteComponent from './MuteComponent';
import GlassBoard from './GlassBoard';

class BoardColumn extends React.Component{

    render(){

        return (
            <div id="boardColumn">
                <canvas id="board" width="600" height="520" className="glowingShadow"></canvas>
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