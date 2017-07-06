import React, { Component } from 'react';
import style from './style.scss'
import img from '@src/assets/img/other/title.png'
import storyImg from '@src/assets/img/other/story.jpg'
import overlayImg from '@src/assets/img/other/black_overlay.png'

export default class Card extends Component {
  render() {
    return (
      <div className={style.card}>
        <div className={style.cardImageWrapper}>
          <img
            src={storyImg}
            className={style.cardImage}
            alt=''
          />
          <img
            src={overlayImg}
            className={style.overlayImage}
            alt=''
          />
          <img
            src={img}
            className={style.cardTitleImage}
            alt=''
          />
        </div>
        <div className={style.cardText}>
          Благодаря самому известному фотографу Оренбурга- сыну ветров, все чаще появляются спящие люди на улицах города. Свободные от стереотипов и всего остального мира они сами выбирают где, и когда им спать
        </div>
      </div>
    );
  }
}