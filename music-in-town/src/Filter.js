import React, { Component } from 'react';
import './App.css';

class Filter extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleKeyPress}>
          <label>
            Band:
            <input type='text' onChange={this.props.getBand}/>
          </label>
          <input type='submit' value='Submit'/>
        </form>
        <br></br>
      </div>
    );
  }
}

export default Filter;
