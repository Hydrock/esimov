import React, { Component } from 'react';

import style from './style.scss'


export default class Card extends Component {
  render() {
    return (
      <div className={style.card}>
        <div className={style.cardImageWrapper}>
          <img
            src='http://i.annihil.us/u/prod/marvel/html_pages_assets/mmc-landing/images/cards/card-2-e4ef818a6a.jpg'
            className={style.cardImage}
          />
          <img className={style.cardTitleImage}/>
        </div>
        <div className={style.cardText}>
          Благодаря самому известному фотографу Оренбурга- сыну ветров, все чаще появляются спящие люди на улицах города. Свободные от стереотипов и всего остального мира они сами выбирают где, и когда им спать
        </div>
      </div>
    );
  }
}