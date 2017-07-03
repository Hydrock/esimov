import React, { Component } from 'react';
import style from './style.scss'

export default class Calendar extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.iframeConatainer + ' iframe-calendar'}>
          <iframe id="iframe-calendar" src="https://calendar.google.com/calendar/htmlembed?src=%23contacts%40group.v.calendar.google.com&ctz=Europe/Moscow" title="dsf" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
        </div>
      </div>
    );
  }
}