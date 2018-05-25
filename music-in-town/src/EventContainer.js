import React, { Component } from 'react';
import './App.css';
import EventCard from './EventCard'

class EventContainer extends Component {

  state = {
    query: []
  }

  handleSearch = (event) => {
    console.log(event.target.value)
    let foundEvents = this.props.events.filter(event => {
      return event.venue.city === event.target.value
    })
  }

  handleFilter = (query) => {
    let foundEvents = this.props.events.filter(event => {
      return event.venue.city
    })
  }

  render() {
    let events = this.props.events;
    let optionItems = events.map((event) =>
             <option key={event.venue.city}>{event.venue.city}</option>
         );

    return (
      <div>
      <h2>Upcoming Shows</h2>
        <form >
          <label>
            Sort by city:
            <select onChange={this.handleSearch}>
              {optionItems}
            </select>
          </label>
        </form>
      {this.props.events.map(event => <EventCard  event={event} />)}
      </div>
    );
  }
}

export default EventContainer;
