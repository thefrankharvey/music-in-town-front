import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventContainer from './EventContainer'
import UserContainer from './UserContainer'
import Filter from './Filter'

class App extends Component {
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
        <EventContainer />
        <UserContainer />
        <Filter />
      </div>
    );
  }
}

export default App;
