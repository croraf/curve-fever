import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import ChatAllMessagesComponent from './chat/ChatAllMessagesComponent';
import ChatInputBox from './chat/ChatInputBox';

/*function ChatMessageComponent(props){

    let styleProps = {
        color: props.color
    };

    return(
        <div>
            <i style={styleProps}>{props.username}:    </i><span>{props.payload}<br /></span>
        </div>
    );
}*/


/*class ChatOutputBox extends React.Component{

    constructor(props){
        super(props);
        this.allChatMessagesComponent = [];
    }


    componentWillUpdate(nextProps){
        let newMessage = nextProps.allChatMessages[nextProps.allChatMessages.length-1];
        let newChatMessageComponent = (
                                             <ChatMessageComponent key={nextProps.allChatMessages.length}
                                                                   username={newMessage.username}
                                                                   color={newMessage.color}
                                                                   payload={newMessage.chatMessagePayload}
                                             />
                                      );
        this.allChatMessagesComponent.push(newChatMessageComponent);
    }


    render(){

        return (
            <div  id = "chat"
                  className="glowingShadow collection scrollbar-style-2"
                  ref = {(div) => this.chatOutDOM = div}>
                {this.allChatMessagesComponent}
            </div>
        );
    }

    componentDidUpdate(){
        $(this.chatOutDOM).scrollTop(this.chatOutDOM.scrollHeight);
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
}*/

export default function ChatComponent (){
    return (
                <div>
                    <ChatAllMessagesComponent />

                    <ChatInputBox />
                </div>
            );
}

/*const mapStateToProps = (state) => (
        {
              allChatMessages: state.chat.allReceivedChat
        }
);


ChatOutputBox = connect (mapStateToProps, undefined)(ChatOutputBox);*/

