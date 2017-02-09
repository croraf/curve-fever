import React from 'react';
import ReactDOM from 'react-dom';

export default function PlayerListColumn (){
    return (
                <div id="playersListCollumn">

                        <h5 className="center-align">In game</h5>

                        <div id = "playersList" className="glowingShadow center-align collection scrollbar-style-2"></div>

                        <div id = "chat" className="glowingShadow collection scrollbar-style-2"> </div>

                        <div id = "chatInputBox" className="glowingShadow collection scrollbar-style-2">

                            <form id = "chatForm">
                                <input type="text" name="text" maxLength={maxLengthVariable}
                                        autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
                            </form>
                        </div>

                        <a href="services/round/exit">Log out</a>
                </div>
            );
}
