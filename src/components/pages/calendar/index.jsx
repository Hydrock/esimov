/** @jsx h */
import { h, Component } from 'preact';
import style from './style.scss'

export default class Calendar extends Component {
  render() {
    return (
      <div class={style.container}>
        <div class={style.iframeConatainer + ' iframe-calendar'}>
          <iframe id="iframe-calendar" src="https://calendar.google.com/calendar/htmlembed?src=%23contacts%40group.v.calendar.google.com&ctz=Europe/Moscow" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
      </div>
    );
  }
}