import React from 'react';
import { connect } from 'react-redux';

import {toggleMute} from '../actions/toggleMute';



let MuteComponent = function({musicOnOff, muteClickHandler}){

    let musicIcon;
    if (musicOnOff === "ON") {
        musicIcon = "volume_up";
    }
    else {
        musicIcon = "volume_off";
    }

    return (
        <div id = "muteContainer" className="controlRowElement" >
            <i className="material-icons" onClick={muteClickHandler}>
                {musicIcon}
            </i>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
               muteClickHandler: () => dispatch(toggleMute())
         };
}

const mapStateToProps = (state) => {
  return {
               musicOnOff: state.audio
         };
}

MuteComponent = connect(mapStateToProps, mapDispatchToProps)(MuteComponent);

export default MuteComponent;

