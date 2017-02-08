import React from 'react';
import ReactDOM from 'react-dom';

import BoardColumn from './z_BoardColumn';
import PlayerListColumn from './z_PlayerListColumn';


ReactDOM.render(
     <div className = "myContainer">

         <PlayerListColumn />

         <BoardColumn />

     </div>
     ,


     document.getElementById('root')
);
