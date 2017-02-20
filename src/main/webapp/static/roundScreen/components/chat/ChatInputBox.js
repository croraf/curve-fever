import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import sendChatMessage from '../../actions/sendChatMessage.js';

import webSocket from '../../webSocket.js';

class ChatInputBox extends React.Component{
    /*constructor(props){
        super(props);
        this.handleChatChange = this.handleChatChange.bind(this);
        this.handleChatSubmit = this.handleChatSubmit.bind(this);
        this.onChatSubmit = this.props.onChatSubmit;
        this.state = {
            chatText: ""
        };
    }

    handleChatChange(e) {
        this.setState({chatText: e.target.value});
    }

    handleChatSubmit(e) {
        e.preventDefault();
        this.onChatSubmit(this.state.chatText);
        this.setState({chatText: ""});
    }*/

    render(){

        return (
            <div id = "chatInputBox" className="glowingShadow collection scrollbar-style-2">

                <form id = "chatForm" onSubmit={this.props.onChatSubmit}>
                     <input type="text" name="text" maxLength={maxLengthVariable}
                            autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                     />
                </form>
            </div>
        );
    }

}

let mapDispatchToProps = (dispatch) => ({
        onChatSubmit: (event) => {
            let form = $(event.target);
            dispatch(sendChatMessage());
            webSocket.sendMessage("chatMessage", form.find(input[type="text"]).val());
            form[0].reset();
            event.preventDefault();
        }
});

ChatInputBox = connect(undefined, mapDispatchToProps)(ChatInputBox);

export default ChatInputBox;