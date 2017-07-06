import React, { Component } from 'react';
import Title from '@src/components/common/title'

import style from './style.scss'

import storyImg from '@src/assets/img/other/story.jpg'

export default class Contacts extends Component {
  render() {
    return (
      <div className={style.container}>
        <Title text={'контакты'}/>
        <div className={style.content}>
          <div className={style.textContainer}>
            
          </div>
          <div className={style.imageContainer}>
            <img
              src={storyImg}
              alt=''
            />
          </div>
        </div>
      </div>
    );
  }
}