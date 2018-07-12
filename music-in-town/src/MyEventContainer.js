import React, { Component } from 'react';
import './App.css';
import EventCard from './EventCard'

class MyEventContainer extends Component {

render(){

  return(

  <div style={{display:'block', margin:'auto', width:'75%'}}>
  <h1 id="my-events-title">My Events</h1>
  {this.props.myEvents.map(event => <EventCard event={event} />)}
  </div>
)
}

}

export default MyEventContainer;
