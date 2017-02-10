import React from 'react';
import ReactDOM from 'react-dom';

import BoardColumn from './BoardColumn';
import PlayerListColumn from './PlayerListColumn';
import BackgroundAudio from './BackgroundAudio';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {combineReducers} from 'redux';

import audioReducer from '../reducers/audioReducer';
import networkReducer from '../reducers/networkReducer';;


let store = createStore (combineReducers({audioReducer, networkReducer}));

store.subscribe(logger);

function logger(){
    console.log("store listener:" + store.getState());
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


export default store;
