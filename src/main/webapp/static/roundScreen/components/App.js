import React from 'react';
import ReactDOM from 'react-dom';

import BoardColumn from './BoardColumn';
import PlayerListColumn from './PlayerListColumn';
import BackgroundAudio from './BackgroundAudio';


class App extends React.Component{

    render(){
        return (
            <div className = "myContainer">

                 <PlayerListColumn />

                 <BoardColumn />

                 <BackgroundAudio />

             </div>
        );
    }

}

export default App;