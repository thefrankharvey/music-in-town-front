import React, { Component } from 'react';
import './App.css';

class Filter extends Component {

  render() {
    return (
      <div>

        <form onSubmit={this.props.handleKeyPress}>

          <label className='label'>
            Search for a Band:
          </label>

          <div className='input'>
            <input type='text' onChange={this.props.getBand} placeholder='Band Name'/>
          </div>

          <div className='submit'>
            <input type='submit' value='Submit'/>
          </div>
          
        </form>

        <br></br>

      </div>
    );
  }
}

export default Filter;
