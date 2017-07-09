import React, { Component } from 'react';
import Card from './card'
import Title from '@src/components/common/title'
import style from './style.scss'

import CustomLink from '@src/components/common/custom-link'

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
          <CustomLink to='/prices' text='Ссылка'/>
        </div>
      </div>
    );
  }
}
