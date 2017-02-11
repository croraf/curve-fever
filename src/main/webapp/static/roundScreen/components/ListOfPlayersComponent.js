import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

function ConnectedPlayerRow (props){

    let styleProperties = {
        color: props.color,
    };
    return (
        <a style={styleProperties} className="collection-item">{props.username} : {props.coins} </a>

    );
}


let ListOfPlayersComponent = function ({connectedPlayers}){

    let connectedPlayersComponent = [];

    Object.keys(connectedPlayers).forEach((username)=>{
        connectedPlayersComponent.push(
            <ConnectedPlayerRow key={username} username={username}
                                coins={connectedPlayers[username].coins}
                                color={connectedPlayers[username].color} />
        );
    });

    return (
                <div id = "playersList" className="glowingShadow center-align collection scrollbar-style-2">
                    {connectedPlayersComponent}
                </div>
            );
};

let mapStateToProps = (state) => ({
      connectedPlayers : state.listOfPlayers
});

ListOfPlayersComponent = connect(mapStateToProps, undefined)(ListOfPlayersComponent);

export default ListOfPlayersComponent;