import React, { Component } from 'react';
import style from './style.scss'
import img from '@src/assets/img/other/title.png'
//import storyImg from '@src/assets/img/other/story.jpg'
import overlayImg from '@src/assets/img/other/black_overlay.png'

export default class Card extends Component {
  render() {
    //console.log(this.props)
    const generalImage = this.props.generalImage
    const shortText = this.props.shortText
    return (
      <div className={style.card}>
        <div className={style.cardImageWrapper}>
          <img
            src={generalImage}
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
          {shortText}
        </div>
      </div>
    );
  }
}