import React from 'react';
import ReactDOM from 'react-dom';

import RestartButtonComponent from './RestartButtonComponent';
import MuteComponent from './MuteComponent';




export default function BoardColumn(){
    return (
                <div id="boardCollumn">
                    <canvas id="board" width="600" height="520" className="glowingShadow"></canvas>
                    <canvas id="glass" width="600" height="520"></canvas>

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