import React, { Component } from 'react';
import style from './style.scss'
import overlayImg from '@src/assets/img/other/black_overlay.png'
import CustomLink from '@src/components/common/custom-link'

import * as actions from '@src/actions/index.js'

export default class Card extends Component {
  setActiveStory = () => {
    const { storyId } = this.props
    actions.setLoad('loading')
    actions.setPath(`/story/${storyId}`)
  }
  render() {
    const { generalImage, shortText, storyLogo } = this.props
    return (
      <div className={style.card} onClick={this.setActiveStory}>
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
            src={storyLogo}
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