import React from 'react';
import ReactDOM from 'react-dom';

export default function ChatComponent (){
    return (
                <div>
                    <div id = "chat" className="glowingShadow collection scrollbar-style-2"> </div>

                    <div id = "chatInputBox" className="glowingShadow collection scrollbar-style-2">

                        <form id = "chatForm">
                            <input type="text" name="text" maxLength={maxLengthVariable}
                                    autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
                        </form>
                    </div>
                </div>
            );
}

