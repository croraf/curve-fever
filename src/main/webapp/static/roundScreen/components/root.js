import React from 'react';
import ReactDOM from 'react-dom';

import BoardColumn from './BoardColumn';
import PlayerListColumn from './PlayerListColumn';
import BackgroundAudio from './BackgroundAudio';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import mainReducer from '../reducers/reducers';



let store = createStore (mainReducer);
store.subscribe(logger);
function logger(){
    console.log("store je pozvan");
    console.log("in action listener:" + store.getState().audio);
}




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
