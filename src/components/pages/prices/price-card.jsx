import React, { Component } from 'react'
import style from './style.scss'

import blotchImg from  '@src/assets/img/blotch/blotch-w.png'
import Img from  '@src/assets/img/other/img-1.jpg'

export default class PriceCard extends Component {
  // //'url(' + blotchImg + '),' + ' ' + 'url(' + Img + ')',
  render() {
    const img = this.props.img
    const styleBox = {
      //background: 'url(' + Img + '), #000',
    }
  
    return (
      <div className={style.priceCard}>
        <div className={style.imgContainer}>
          <img src={Img} alt="img" />
          <img src={blotchImg} alt="blotch" className={style.blotch} />
        </div>
        <div className={style.textContainer}>
          
        </div>
      </div>
    )
  }
}