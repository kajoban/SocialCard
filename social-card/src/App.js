import React, { Component } from 'react';
import './App.css';
import cardData from './cardData.js'
import Card from './components/Card.js'
import picture from './react.jpg'

class App extends Component {
  render(){
    return(
      <Card
        headline={cardData.headline}
        message={cardData.message}
        url={cardData.url}
        urlDisplayName={cardData.urlDisplayName}
        picture={picture}
      />
    )
  }
}

export default App;
