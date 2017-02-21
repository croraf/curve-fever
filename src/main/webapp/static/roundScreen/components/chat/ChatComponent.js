import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import ChatAllMessagesComponent from './ChatAllMessagesComponent';
import ChatInputBox from './ChatInputBox';



const mapStateToProps = (state) => (
        {
              allChatMessages: state.chat.allReceivedChat
        }
);

let ChatAllMessagesComponentContainer = connect (mapStateToProps, undefined)(ChatAllMessagesComponent);


export default function ChatComponent (){
    return (
                <div>
                    <ChatAllMessagesComponentContainer />

                    <ChatInputBox />
                </div>
            );
}



