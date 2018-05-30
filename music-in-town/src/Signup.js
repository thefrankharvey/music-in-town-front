import React, { Component } from 'react';
import './App.css';
import { NavLink, Route, Switch } from 'react-router-dom'
import App from './App'


class Signup extends Component {

  render() {

  return (
      <div>
        <div>
        <label>
          <h3>NameFuck: </h3>
        </label>
          <input type='text'></input>
            <label>
              <h3>EmailFuck: </h3>
            </label>
            <input type='text'></input>
            <NavLink to={'/app'}>
              <button>Submit</button>
            </NavLink>

            <Switch>
              <Route path='/app' component={ App }></Route>
            </Switch>
            
        </div>
      </div>
    )
  }
}

export default Signup;
