import React from 'react';
import ReactDOM from 'react-dom';

/*    var element = $("<div>").css(
                            {
                                "text-align": "center",
                                "color": "darkkhaki"
                            }
                        )
                    .html("[" + plainMessage + "]<br/>");*/

export default function (props){

    if (props.isSystemMessage){
        let styleProps = {
            textAlign: "center",
            color: "darkkhaki"
        };

        return(
            <div style={styleProps}> [{props.payload}] </div>
        );
    } else {
        let styleProps = {
            color: props.color,
            paddingLeft: "5px"
        };

        return(
            <div>
                <i style={styleProps}> {props.username}: </i>  <span>{props.payload}</span>
            </div>
        );
    }

};