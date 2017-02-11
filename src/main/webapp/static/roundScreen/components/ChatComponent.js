import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

function ChatMessageComponent(props){

    let styleProps = {
        color: props.color
    };

    return(
        <div>
            <i style={styleProps}>{props.username}:    </i><span>{props.payload}<br /></span>
        </div>
    );
}


let allChatMessagesComponent = [];

class ChatOutputBox extends React.Component{

    constructor(){
        super(props)
        /* this.createChatMessage = this.createChatMessage.bind(this);*/
    }




    render(){
        let newChatMessageComponent =
              <ChatMessageComponent key={allChatMessagesComponent.length}
                                    username={this.props.lastReceivedChatMessage.username}
                                    color={this.props.listOfPlayers[this.props.lastReceivedChatMessage.username].color}
                                    payload={this.props.lastReceivedChatMessage.chatMessagePayload}/>;

        allChatMessagesComponent.push(newChatMessageComponent);

        return (
            <div id = "chat" className="glowingShadow collection scrollbar-style-2">
                {allChatMessagesComponent}
            </div>
        );
    }

}

function ChatInputBox(){

    return (
                <div id = "chatInputBox" className="glowingShadow collection scrollbar-style-2">

                    <form id = "chatForm">
                        <input type="text" name="text" maxLength={maxLengthVariable}
                                autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
                    </form>
                </div>
            );
}

export default function ChatComponent (){
    return (
                <div>
                    <ChatOutputBox />

                    <ChatInputBox />
                </div>
            );
}

const mapStateToProps = (state) => ({
               lastReceivedChatMessage: state.chat,
               listOfPlayers: state.listOfPlayers
});


ChatOutputBox = connect (mapStateToProps, undefined)(ChatOutputBox);

