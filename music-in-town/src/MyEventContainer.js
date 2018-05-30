import React, { Component } from 'react';
import './App.css';
import EventCard from './EventCard'

class MyEventContainer extends Component {

render(){

  return(

  <div>
  <h1>My Shows</h1>
  {this.props.myEvents.map(event => <EventCard event={event} />)}
  </div>
)
}

}

export default MyEventContainer;
