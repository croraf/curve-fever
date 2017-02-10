import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import ReactAudioPlayer from './ReactAudioPlayer';

let BackgroundAudio = function BackgroundAudio({musicOnOff}){

    console.log(musicOnOff);

    return (<div>
                <ReactAudioPlayer
                  src="static/roundScreen/songs/24 - Monkey Island - Remix.mp3"
                  autoPlay
                />
                <audio id= "backgroundAudio">
                            {/*Playing of songs done with js*/}
                            Your browser does not support the audio element.
               </audio>
            </div>
           );
};

const mapStateToProps = (state) => {
  return {
               musicOnOff: state.audio
         };
}

export default connect(mapStateToProps)(BackgroundAudio);