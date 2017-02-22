import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import {requestRestartAction} from '../actions/requestRestartAction';
import {myWebSocketModule} from '../webSocket';

class RestartButtonComponent extends React.Component {

    render(){

        if (playerName === "rafa"){
            return  (
                        <div id = "restart" className="controlRowElement" onClick={this.props.requestRestartCallback}>
                                RESTART
                        </div>
                    );
        } else {
            return null;
        }
    }

}

let mapDispatchToProps = (dispatch) => ({
    requestRestartCallback: () => {
        dispatch(requestRestartAction());
        myWebSocketModule.sendMessage("restart", null);
    }
});

export default connect(undefined, mapDispatchToProps)(RestartButtonComponent);