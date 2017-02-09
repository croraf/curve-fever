import React from 'react';
import ReactDOM from 'react-dom';

import toggleMute from './actions';

import {store} from './root';

function RestartButtonComponent () {

    if (playerName == "rafa"){
        return  (
                    <div id = "restart" className="controlRowElement">
                            RESTART
                    </div>
                );
    } else {
        return null;
    }
}

function handleMuteClick (){
    store.dispatch(toggleMute());
}

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

                        <div id = "mute" className="controlRowElement" onClick={handleMuteClick}>
                            <i className="material-icons">volume_up</i>
                        </div>

                    </div>

                    <div id = "snakeImageColumn">
                    </div>
                </div>
            );
}