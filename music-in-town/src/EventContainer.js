import React, { Component } from 'react';
import './App.css';
import EventCard from './EventCard'

class EventContainer extends Component {

  handleSearch = (event) => {
    console.log(event.target.value)
    let events = this.props.events.filter(
      (show) => {
        return show.venue.city === event.target.value
      }
    )
    this.props.changeEvents(events)
  }

  render() {

    let events = this.props.events;
    let optionItems = events.map((event) =>
             <option key={event.venue.city}>{event.venue.city}</option>
         );
    console.log(this.props.band);

    let theStuff = () => {

    }
  return (

    <div>
      {this.props.events.length ?
      <div>
        <h2>Upcoming Shows</h2>

      <div>
        <button>Go To My Shows</button>
      </div>
      <br></br>
        <form >
          <label>
            Sort by city:
            <select onChange={this.handleSearch}>
              {optionItems}
            </select>
          </label>
        </form>
      {this.props.events.map(event => <EventCard  event={event} />)}
    </div> : <div> </div> }
    </div>
  );
  }
}

export default EventContainer;
