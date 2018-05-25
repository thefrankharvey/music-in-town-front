import React, { Component } from 'react';
import './App.css';

class EventCard extends Component {
  render() {
    return (
      <div>
        <div className="events">
          <h3> {this.props.event.venue.name}</h3>
          <p> {this.props.event.venue.city}, {this.props.event.venue.region}, {this.props.event.venue.country}</p>
          <p> Availability: {this.props.event.offers[0].status}</p>
          <p> When: {this.props.event.datetime}</p>
          <p> Who: {this.props.event.lineup}</p>
        </div>
    </div>
    );
  }
}

export default EventCard;
