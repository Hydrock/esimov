import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Route } from 'react-router-dom'
import style from './style.scss'

import AllStories from '@src/containers/pages/stories/all-stories'
import Story from '@src/containers/pages/stories/story'
import Calendar from '@src/components/pages/calendar'
import Contacts from '@src/components/pages/contacts'
import Prices from '@src/components/pages/prices'
import Portfolio from '@src/components/pages/portfolio'

class MainContainer extends Component {
  render() {
    return (
      <div className={style.container}>
        <Scrollbars>
          <Route path="/"/>
          <Route exact path="/stories" component={AllStories} />
          <Route exact path="/story" component={Story} />
          <Route path="/story/:id" component={Story} />
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