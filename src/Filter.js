import React, { Component } from 'react';
import './App.css';

class Filter extends Component {

  render() {
    return (
      <div>

        <form onSubmit={this.props.handleKeyPress}>

          <div className="boxbox row" >
            <input className="search col-sm-9" type="text" onChange={this.props.getBand} placeholder='Search a Band'/>
            <input className="submit col-sm-2" type="submit" value="GO" style={{marginLeft:'49px'}}/>
          </div>

          </form>

          <br></br>


      </div>
    );
  }
}



export default Filter;
