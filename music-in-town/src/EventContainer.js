import React, { Component } from 'react';
import './App.css';
import EventCard from './EventCard'
class EventContainer extends Component {

  handleSearch = (event) => {
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


  return (



    <div className="container">
      {this.props.events.length ?

        <div >
  <div id="upcomingShowsContainer" className="row">
    <div className="col-sm">
      <p style={{color:"red"}}>Upcoming Shows</p>
    </div>
    <div className="col-sm">
      <form >
        <p>Sort By City:</p>
          <select onChange={this.handleSearch}>
            {optionItems}
          </select>
      </form>

    </div>
  </div>



      {this.props.events.map(event => <EventCard  event={event} addToMyEvents={this.props.addToMyEvents}/>)}
    </div> : <div> </div> }
    </div>
  );
  }
}

export default EventContainer;
