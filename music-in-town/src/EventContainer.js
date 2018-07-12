import React, {Component} from 'react';
import './App.css';
import EventCard from './EventCard'
class EventContainer extends Component {

  handleSearch = (event) => {
    if(event.target.value === 'See all') {
      this.props.changeEvents(this.props.allEvents)
    } else {
      let events = this.props.events.filter((show) => {
        return show.venue.city === event.target.value.slice(0, event.target.value.length - 6)
      })
      this.props.changeEvents(events)
    }
  }

  render() {

    let events = this.props.events;
    let optionItems = events.map((event) => <option key={event.venue.city}>{event.venue.city}  {event.datetime.slice(5, 10)}</option>)

    return (
      <div className="container">
        {this.props.events.length ? <div>
              <div id="upcomingShowsContainer" className="row">
                <div className="col-sm">

                  <form >
                    <select onChange={this.handleSearch} className="selectDrop">
                      <option value="" disabled="disabled" selected="selected">
                        Sort by City</option>
                      <option>See all</option>
                      {optionItems}
                    </select>
                  </form>

                </div>
              </div>

              {this.props.events.map(event => <EventCard event={event} addToMyEvents={this.props.addToMyEvents} myEventsClicked={this.props.myEventsClicked}/>)}
            </div>
          : <div></div>}
    </div>);
  }
}

export default EventContainer;
