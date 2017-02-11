import React from 'react';
import ReactDOM from 'react-dom';

import ChatComponent from './ChatComponent';
import ListOfPlayersComponent from './ListOfPlayersComponent';

export default function PlayerListColumn (){
    return (
                <div id="playersListColumn">

                        <h5 className="center-align">In game</h5>

                        <ListOfPlayersComponent />

                        <ChatComponent />

                        <a href="services/round/exit">Log out</a>
                </div>
            );
}
