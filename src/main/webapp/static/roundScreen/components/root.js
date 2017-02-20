import React from 'react';
import ReactDOM from 'react-dom';

import BoardColumn from './BoardColumn';
import PlayerListColumn from './PlayerListColumn';
import BackgroundAudio from './BackgroundAudio';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from '../reducers/rootReducer.js';


let store = createStore (rootReducer);
let next = store.dispatch;

store.dispatch = function (action) {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
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
