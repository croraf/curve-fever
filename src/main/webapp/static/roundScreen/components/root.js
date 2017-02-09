import React from 'react';
import ReactDOM from 'react-dom';

import BoardColumn from './BoardColumn';
import PlayerListColumn from './PlayerListColumn';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import mainReducer from './reducers';


function BackgroundAudio(){
    return (
                <audio id= "backgroundAudio">
                            {/*Playing of songs done with js*/}
                            Your browser does not support the audio element.
               </audio>
           );
}


let store = createStore (mainReducer);

function logger(){
    console.log("store je pozvan");
    console.log("in action listener:" + store.getState().audio);
}

store.subscribe(logger);

export {store};

ReactDOM.render(
     <Provider store={store}>
         <div className = "myContainer">

             <PlayerListColumn />

             <BoardColumn />

             <BackgroundAudio />

         </div>
     </Provider>
     ,


     document.getElementById('root')
);
