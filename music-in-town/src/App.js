import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventContainer from './EventContainer'
import UserContainer from './UserContainer'
import Filter from './Filter'
const TheKey = process.env.REACT_APP_BANDS_IN_TOWN_API_KEY
const TheURL = process.env.REACT_APP_URL

class App extends Component {
  state = {
    band: [],
    events: []
  }

   renderBandEvents = (band) => {
     console.log(band)
     fetch(TheURL + band + TheKey)
     .then(x => x.json())
     .then((data) => {
     console.log(data)
   })

     fetch(TheURL + band + '/events' + TheKey)
     .then(x => x.json())
     .then((events) => {
       console.log(events)
     })
   }

   getBand = (event) => {
     this.setState({
       band: event.target.value
     })
   }

   handleKeyPress = (event) => {
     event.preventDefault()
     this.renderBandEvents(this.state.band)
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Welcome....to Bands.....I mean...Music in Town!
        </p>
        <Filter getBand={this.getBand} handleKeyPress={this.handleKeyPress}/>
        <EventContainer />
        <UserContainer />
      </div>
    );
  }
}

export default App;
