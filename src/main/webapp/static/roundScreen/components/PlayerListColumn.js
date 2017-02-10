import React from 'react';
import ReactDOM from 'react-dom';

import ChatComponent from './ChatComponent';

export default function PlayerListColumn (){
    return (
                <div id="playersListColumn">

                        <h5 className="center-align">In game</h5>

                        <div id = "playersList" className="glowingShadow center-align collection scrollbar-style-2"></div>

                        <ChatComponent />

                        <a href="services/round/exit">Log out</a>
                </div>
            );
}
