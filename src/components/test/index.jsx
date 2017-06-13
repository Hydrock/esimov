import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Test extends Component {
  render() {
    return (
      <div>
        <Link to="/">Calendar</Link>
                <Link to="/calendar">Calendar</Link>
        <Link to="/about">About2</Link>
      </div>
    );
  }
}