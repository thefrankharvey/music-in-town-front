import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventContainer from './EventContainer'
import MyEventContainer from './MyEventContainer'
import Filter from './Filter'
const TheKey = process.env.REACT_APP_BANDS_IN_TOWN_API_KEY
const TheURL = process.env.REACT_APP_URL

class App extends Component {
  state = {
    band: [],
    events: [],
    myEvents: [],
  }

   renderBandEvents = (band) => {
     fetch(TheURL + band + TheKey)
     .then(x => x.json())
     .then((band) => {
     this.setState({
       band: band
     })
   })

     fetch(TheURL + band + '/events' + TheKey)
     .then(x => x.json())
     .then((events) => {
       this.setState({
         events: events
       })
     })
   }
     showMyEvents = () => {
       this.setState({
         clicked: !this.state.clicked
       })
     }
     
   changeEvents = (events) => {
     this.setState({
       events: events
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

   addToMyEvents = (e) => {
      console.log(e.target)
      let addEvent = this.state.events.find(event => event.id === e.target.id)
      console.log(addEvent)
      this.setState({
       myEvents: [...this.state.myEvents, addEvent]
      })
    }

  render() {
      return (
        <div className="App">
          <header>
            <h1 className="App-title"></h1>
          </header>
          <p className="App-intro">
            Welcome....to Bands.....I mean...Music in Town!
          </p>
          <Filter getBand={this.getBand} handleKeyPress={this.handleKeyPress}/>
          <div>
          <img src={this.state.band.image_url}></img>
        </div>
          <EventContainer band={this.state.band} events={this.state.events} changeEvents={this.changeEvents } addToMyEvents={this.addToMyEvents}/>
          <MyEventContainer className="myEventContainer" myEvents={this.state.myEvents} />
        </div>
      );

  }
}

export default App;
