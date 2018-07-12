import React, { Component } from 'react';
import './App.css';
import EventCard from './EventCard'

class MyEventContainer extends Component {

render(){

  return(

  <div style={{display:'block', margin:'auto', width:'75%'}}>
  <h1 id="my-events-title">My Shows</h1>
  {this.props.myEvents.map(event => <EventCard removeFromMyEvents={this.props.removeFromMyEvents} myEventsClicked= {this.props.myEventsClicked} event={event} />)}
  </div>
)
}

}

export default MyEventContainer;
