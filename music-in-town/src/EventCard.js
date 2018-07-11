import React, { Component } from 'react';
import './App.css';
import MyEventContainer from './MyEventContainer'


class EventCard extends Component {

  render() {
console.log(this.props)
    let {datetime, lineup} = this.props.event
    return (

      <div className="row" style={{color:"white"}}>
        <div className="col-sm">
          {datetime.slice(0, 10)}
        </div>
        <div className="col-sm">
          {this.props.event.venue.name}
        </div>
        <div className="col-sm">
          {this.props.event.venue.city}, {this.props.event.venue.region}
        </div>
        <button id={this.props.event.id} onClick={(e) => this.props.addToMyEvents(e)}>Add to My Shows</button>
      </div>
    
    );
  }
}

export default EventCard;
