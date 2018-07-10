import React, { Component } from 'react';
import './App.css';

class Filter extends Component {

  render() {
    return (
      <div>

        <form onSubmit={this.props.handleKeyPress}>

          <div className="boxbox">
            <input className="search" type="text" onChange={this.props.getBand} placeholder='Search a Band'/>
            <input className="submit" type="submit" value="GO"/>
          </div>

          </form>

          <br></br>


      </div>
    );
  }
}

export default Filter;
