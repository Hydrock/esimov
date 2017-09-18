import React, { Component } from 'react'
import style from './style.scss'

import blotchImg from  '@src/assets/img/blotch/blotch-1.jpg'
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
        <div className={style.priceCardPhotoWrap}>
          <div className={style.priceCardPhoto} style={styleBox}>
          </div>
        </div>
      </div>
    )
  }
}