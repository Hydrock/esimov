import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Route } from 'react-router-dom'
import style from './style.scss'
import Calendar from '../pages/calendar'

class MainContainer extends Component {
  render() {
    return (
        <div className={style.container}>
          <Scrollbars>
            <Route path="/"/>
            <Route path="/calendar" component={Calendar}/>
          </Scrollbars>
        </div>
    );
  }
}

export default MainContainer;