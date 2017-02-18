import React from 'react';
import ReactDOM from 'react-dom';


export default function (props){

    let styleProps = {
        color: props.color
    };

    return(
        <div>
            <i style={styleProps}>{props.username}:    </i><span>{props.payload}<br /></span>
        </div>
    );
};