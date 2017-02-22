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
            <div style={styleProps}> [{props.payload}] <br /> </div>
        );
    } else {
        let styleProps = {
            color: props.color
        };

        return(
            <div>
                <i style={styleProps}>{props.username}:    </i><span>{props.payload}<br /></span>
            </div>
        );
    }

};