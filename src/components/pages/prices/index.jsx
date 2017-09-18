import React, { Component } from 'react'
import Title from '@src/components/common/title'
import style from './style.scss'

import PriceCard from  './price-card'

export default class Prices extends Component {
  render() {
    return (
      <div className={style.conatainer}>
        <Title text={'прайс'}/>
        <div className={style.contentContainer}>
          <PriceCard/>
        </div>
      </div>
    )
  }
}