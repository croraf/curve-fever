import {combineReducers} from 'redux';

import audio from './audio';
import chat from './chat';
import listOfPlayers from './listOfPlayers';


/*custom root reducer to share listOfPlayers state to other reducers*/
export default (state = {}, action) => ({
    audio: audio(state.audio, action),
    chat: chat(state.chat, action, state.listOfPlayers),
    listOfPlayers: listOfPlayers(state.listOfPlayers, action),
});
