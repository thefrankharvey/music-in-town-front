import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import EventContainer from './EventContainer'
import MyEventContainer from './MyEventContainer'
import Filter from './Filter'
import {NavLink, Route, Switch} from 'react-router-dom'
const TheKey = process.env.REACT_APP_BANDS_IN_TOWN_API_KEY
const TheURL = process.env.REACT_APP_URL

class App extends Component {
  state = {
    band: [],
    events: [],
    allEvents: [],
    myEvents: [],
    myEventsClicked: false
  }

  renderBandEvents = (band) => {
    fetch(TheURL + band + TheKey).then(x => x.json()).then((band) => {
      this.setState({band: band})
    })

    fetch(TheURL + band + '/events' + TheKey).then(x => x.json()).then((events) => {
      this.setState({
        events: events,
        allEvents: events
      })
    })
  }

  changeEvents = (events) => {
    this.setState({events: events})
  }

  getBand = (event) => {
    this.setState({band: event.target.value})
  }

  handleKeyPress = (event) => {
    event.preventDefault()
    this.renderBandEvents(this.state.band)
  }

  addToMyEvents = (e) => {
    e.target.style.display = 'none';
    let addEvent = this.state.events.find(event => event.id === e.target.id)
    this.setState({
      myEvents: [
        ...this.state.myEvents,
        addEvent
      ]
    })
  }

  removeFromMyEvents = (e) => {
    let removeEvent = this.state.myEvents.filter(event => event.id !== e.target.id)
    this.setState({
      myEvents: removeEvent
    })
  }

  myEvents = (e) => {
    this.setState({myEventsClicked: true})
  }

  render() {

    if (!this.state.myEventsClicked) {
      return (
      <div className="App">
        <header>
          <h1 className="App-title"></h1>
        </header>
        <a href='http://localhost:3001/app'>
        <p className="App-intro">
          Concert World!
        </p>
        </a>
        <Filter getBand={this.getBand} handleKeyPress={this.handleKeyPress}/>
          <div className='my-events' onClick={this.myEvents}>
            <br></br>
            <div className="events-text">
              <span> S </span>
              <span> W </span>
              <span> O </span>
              <span> H </span>
              <span> S </span>
              <br/>
              <span> Y </span>
              <span> M </span>

            </div>
           </div>
        <div className="Band-photo">
          <img src={this.state.band.image_url} height='400'></img>
        </div>
        <EventContainer
          band={this.state.band}
          events={this.state.events}
          allEvents={this.state.allEvents}
          changeEvents={this.changeEvents}
          addToMyEvents={this.addToMyEvents}
          myEventsClicked={this.state.myEventsClicked}
          />
      </div>);
    } else {
      return (
      <div className="App">
        <header>
          <h1 className="App-title"></h1>
        </header>
        <a href='http://localhost:3001/app'>
          <p className="App-intro">
            Concert World!
          </p>
        </a>
        <div style={{
            marginLeft: '-25% !important'
          }}>
          <MyEventContainer removeFromMyEvents={this.removeFromMyEvents} myEventsClicked={this.state.myEventsClicked} className="myEventContainer" myEvents={this.state.myEvents}/>
        </div>
      </div>)
    }
  }
}

export default App;
