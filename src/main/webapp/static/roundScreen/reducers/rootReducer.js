import {combineReducers} from 'redux';

import audio from './audio';
import chat from './chat';
import listOfPlayers from './listOfPlayers';
import items from './items';
import roundState from './roundState';
import steerDirection from './steerDirection';


/*custom root reducer to share listOfPlayers state to other reducers*/
export default (state = {}, action) => ({
    audio: audio(state.audio, action),
    chat: chat(state.chat, action, state.listOfPlayers),
    listOfPlayers: listOfPlayers(state.listOfPlayers, action),
    items: items(state.items, action),
    roundState: roundState(state.roundState, action),
    steerDirection: steerDirection(state.steerDirection, action)
});
