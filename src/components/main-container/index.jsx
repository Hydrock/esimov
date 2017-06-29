import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Route } from 'react-router-dom'
import style from './style.scss'

import AllStories from '../pages/stories/all-stories'
import Calendar from '../pages/calendar'
import Contacts from '../pages/contacts'

class MainContainer extends Component {
  render() {
    return (
        <div className={style.container}>
          <Scrollbars>
            <Route path="/"/>
            <Route path="/stories" component={AllStories}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/contacts" component={Contacts}/>
          </Scrollbars>
        </div>
    );
  }
}

export default MainContainer;