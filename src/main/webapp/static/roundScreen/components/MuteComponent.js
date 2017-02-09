import React from 'react';
import { connect } from 'react-redux';

import {toggleMute} from '../actions/actions';


let MuteComponent = function({muteClickHandler}){

    return (
        <div id = "mute" className="controlRowElement" >
            <i className="material-icons" onClick={muteClickHandler}>
                volume_up
            </i>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
               muteClickHandler: () => dispatch(toggleMute())
         };
}

MuteComponent = connect(undefined, mapDispatchToProps)(MuteComponent);

export default MuteComponent;

