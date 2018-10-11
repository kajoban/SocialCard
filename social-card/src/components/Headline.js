import React from 'react';

const Headline = (props) => {
    return(
        <div id="headlineBody">
            <img id="logo" src={props.picture} alt="logo"></img>
        </div>
    )
}

export default Headline;