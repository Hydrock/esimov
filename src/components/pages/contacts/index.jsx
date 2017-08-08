import React, { Component } from 'react';
import Title from '@src/components/common/title'

import classnames from 'classnames'
import style from './style.scss'

import esimovImg from '@src/assets/img/other/esimov.jpg'

export default class Contacts extends Component {
  render() {
    const phoneClass = classnames(style.text, style.phone)
    const emailClass = classnames(style.text, style.email)
    return (
      <div className={style.container}>
        <Title text={'контакты'}/>
        <div className={style.content}>
          <div className={style.textContainer}>
            <h2 className={style.title}>i have some ideas</h2>
            <h3 className={style.subtitle}>
              телефон
            </h3>
            <p className={phoneClass}>
              555-434-787
            </p>
            <h3 className={style.subtitle}>
              email
            </h3>
            <p className={emailClass}>
              esimov@esimov.com
            </p>
          </div>
          <div className={style.imageContainer}>
            <div className={style.imageWrapper}>
              <div className={style.imageBorder}></div>
              <img src={esimovImg} alt="esimov" className={style.image}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}