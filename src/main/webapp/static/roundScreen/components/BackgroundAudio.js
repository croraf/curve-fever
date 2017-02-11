import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';



var songsList = [
    "static/roundScreen/songs/TheCurseOfMonkeyIsland.mp3",
    "static/roundScreen/songs/05 - Following The Shop Keeper.mp3",
    "static/roundScreen/songs/14 - Monkey Island.mp3",
    "static/roundScreen/songs/24 - Monkey Island - Remix.mp3"
];

let currentSongIndex = 3;

class BackgroundAudio extends React.Component{

    constructor(props){
        super (props);

        this.playNextSong = this.playNextSong.bind(this);
        this.startSong = this.startSong.bind(this);
    }


    playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % songsList.length;

        this.startSong(currentSongIndex);
    }

    startSong(index){

        this.audioDOM.src = songsList[index];
        this.audioDOM.play();
    }

    componentDidMount(){

        this.audioDOM.volume = 1.0;

        this.audioDOM.onended = this.playNextSong;
        this.startSong(currentSongIndex);
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.musicOnOff === 'OFF') {
            this.audioDOM.pause();
        } else {
            this.audioDOM.play();
        }
    }

    componentWillUnmount(){
        this.audioDOM.pause();
    }


    render() {

        return (

             <audio
                     id= "backgroundAudio"
                     ref = {(audio) => { this.audioDOM = audio; }}
             >

                  Your browser does not support the audio element.
             </audio>
        );
    }


};

const mapStateToProps = (state) => {
  return {
               musicOnOff: state.audio
         };
}

export default connect(mapStateToProps)(BackgroundAudio);