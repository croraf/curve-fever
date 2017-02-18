import React from 'react';
 import ReactDOM from 'react-dom';

 import { connect } from 'react-redux';

 import ChatOutputBox from './ChatOutputBox';
 import ChatInputBox from './ChatInputBox';



const mapStateToProps = (state) => (
        {
              allChatMessages: state.chat
        }
);

let ChatOutputBoxContainer = connect (mapStateToProps, undefined)(ChatOutputBox);


export default function ChatComponent (){
    return (
                <div>
                    <ChatOutputBoxContainer />

                    <ChatInputBox />
                </div>
            );
}



