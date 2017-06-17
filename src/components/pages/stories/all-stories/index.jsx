import React, { Component } from 'react';

import style from './style.scss'

import Card from './card'
import Title from '../../../common/title'

export default class AllStories extends Component {
  render() {
    return (
      <div className={style.container}>
        <Title text={'истории'}/>
        <div className={style.content}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    );
  }
}