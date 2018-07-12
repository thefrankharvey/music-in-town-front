import React, { Component } from 'react';
import './App.css';
import MyEventContainer from './MyEventContainer'


class EventCard extends Component {
  render() {
    console.log(this.props.myEvents)
    let {datetime, lineup} = this.props.event
    let dateSlice = datetime.slice(5,10)
    let monthNames = ["whatever", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    if (!this.props.myEventsClicked) {

    return (

      <div className="row" style={{color:"white"}}>
        <div id="dateSpan" className="col-sm">
          <div style={{height:'12px'}}></div>
          <span id="month" style={{marginTop:'40px !important'}}>{monthNames[parseInt(dateSlice.slice(0,2))]}</span>
          <span id="day"> {parseInt(dateSlice.slice(3,5))}</span>
          <br/>
      </div>

        <div id='venue' className="col-6">
          <br/>
          {this.props.event.venue.name}
        </div>
        <div id='city' className="col-sm">
          <br/>
          {this.props.event.venue.city}, {this.props.event.venue.region, this.props.event.venue.country}
        </div>

          <div >
            <br/>
            <br/>
            <button id='plus' className="addButton" id={this.props.event.id} onClick={(e) => this.props.addToMyEvents(e)}>Add Show</button>
          </div>

    </div>

    );
  } else {
    return (

      <div className="row" style={{color:"white"}}>
        <div id="dateSpan" className="col-sm">
          <div style={{height:'12px'}}></div>
          <span id="month" style={{marginTop:'40px !important'}}>{monthNames[parseInt(dateSlice.slice(0,2))]}</span>
          <span id="day"> {parseInt(dateSlice.slice(3,5))}</span>
          <br/>
      </div>

        <div id='venue' className="col-4">
          <br/>
          {this.props.event.venue.name}
        </div>

        <div id='band-name' className="col-sm">
          {this.props.event.lineup[0]}
        </div>

        <div id='city' className="col-sm">
          <br/>
          {this.props.event.venue.city}, {this.props.event.venue.region, this.props.event.venue.country}
        </div>

          <div >
            <br/>
            <br/>
            <button id='remove' className="removeButton" id={this.props.event.id} onClick={(e) => this.props.removeFromMyEvents(e)}>Remove</button>
          </div>

    </div>

    );
  }
  }
}

export default EventCard;
