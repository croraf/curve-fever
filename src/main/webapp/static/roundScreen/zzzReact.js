import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div>

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
  ,


   document.getElementById('playersListCollumn')
);

ReactDOM.render(
    <div>
        <canvas id="board" width="600" height="520" class="glowingShadow"></canvas>
    	<canvas id="glass" width="600" height="520"></canvas>

        <div id = "controlRow">


                <div id = "restart" class="controlRowElement">
                    RESTART
                </div>


            <div id = "currentPlayer"
                 class="controlRowElement"
                 style="color: ${player.color};">
                        ${player.name}
            </div>

            <div id = "mute" class="controlRowElement">
                <i class="material-icons">volume_up</i>
            </div>

        </div>

        <div id = "snakeImageColumn">
        </div>
    </div>
  ,


   document.getElementById('boardCollumn')
);