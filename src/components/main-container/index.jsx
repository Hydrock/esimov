import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Route } from 'react-router-dom'
import style from './style.scss'

import AllStories from '../pages/stories/all-stories'
import Story from '../pages/stories/story'
import Calendar from '../pages/calendar'
import Contacts from '../pages/contacts'
import Prices from '../pages/prices'
import Portfolio from '../pages/portfolio'

class MainContainer extends Component {
  render() {
    return (
      <div className={style.container}>
        <Scrollbars>
          <Route path="/"/>
          <Route exact path="/stories" component={AllStories} />
          <Route exact path="/stories/story" component={Story} />
          <Route path="/calendar" component={Calendar}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/prices" component={Prices}/>
          <Route path="/portfolio" component={Portfolio}/>
        </Scrollbars>
      </div>
    );
  }
}

export default MainContainer;