import React, { Component } from 'react'
import Title from '@src/components/common/title'
import style from './style.scss'

export default class Portfolio extends Component {
  render() {
    return (
      <div className={style.container}>
        <Title text={'портфолио'}/>
      </div>
    )
  }
}