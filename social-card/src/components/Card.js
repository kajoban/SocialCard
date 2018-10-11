import React  from 'react';
import Headline from './Headline.js'
import Message from './Message.js'

const Card = (props) => {
    return(
        <div id="card">
            <Headline 
            headline={props.headline} 
            picture={props.picture}
            />
            <Message
                headline={props.headline}
                message={props.message}
                url={props.url}
                urlDisplayName={props.urlDisplayName}
            />
        </div>
    )
}

export default Card;