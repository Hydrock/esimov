import React, { Component } from 'react';
import Title from '../../common/title'

import style from './style.scss'

//import overlayImg from '../../../../src/assets/img/other/black_overlay.png'

//import overlayImg from './assets/img/other/black_overlay.png'

export default class Contacts extends Component {
  render() {
    return (
      <div className={style.container}>
        <Title text={'контакты'}/>
        <div className={style.content}>
          <div className={style.textContainer}>
            
          </div>
          <div className={style.imageContainer}>
            
          </div>
        </div>
      </div>
    );
  }
}