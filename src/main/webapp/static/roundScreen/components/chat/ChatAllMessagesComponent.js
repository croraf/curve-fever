import React from 'react';
import ReactDOM from 'react-dom';
import ChatMessageComponent from './ChatMessageComponent';


class ChatAllMessagesComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        let allChatMessagesComponent = this.props.allChatMessages.map(
                (message, index) => (
                    <ChatMessageComponent key={index}
                                          username={message.username}
                                          color={message.color}
                                          payload={message.chatMessagePayload}
                    />
                )
        );

        return (
            <div  id = "chatAllMessages"
                  className="glowingShadow collection scrollbar-style-2"
                  ref = {(div) => this.chatOutDOM = div}>
                {allChatMessagesComponent}
            </div>
        );
    }

    componentDidUpdate(){
        $(this.chatOutDOM).scrollTop(this.chatOutDOM.scrollHeight);
    }

}

export default ChatAllMessagesComponent;