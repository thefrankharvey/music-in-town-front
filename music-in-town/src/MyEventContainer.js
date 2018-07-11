import React, { Component } from 'react';
import './App.css';
import EventCard from './EventCard'

class MyEventContainer extends Component {

render(){

  return(

  <div style={{position:'fixed',right:'0',top:'0', background:'transparent', fontSize:'11pt'}}>
  <h1>My Shows</h1>
  {this.props.myEvents.map(event => <EventCard event={event} />)}
  </div>
)
}

}

export default MyEventContainer;
