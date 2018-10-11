import React from 'react';

const Message = (props) => {
    return(
        <div id="message">
            <h3>{props.headline}</h3>
            <p>{props.message}</p>
            <a href={props.url}>
            <p>{props.urlDisplayName}</p>
            </a>
        </div>
    )
}

export default Message;