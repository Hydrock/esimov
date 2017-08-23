import React, { Component } from 'react';
import Card from './card'
import Title from '@src/components/common/title'
import style from './style.scss'

import * as actions from '@src/actions/index.js'

export default class AllStories extends Component {

  componentWillMount () {
    actions.getStories()
  }

  renderCards() {
    var data = this.props.stories && this.props.stories.stories && this.props.stories.stories.data || []
    var result = data.map(function(item, i) {
      return (
        <Card
          key={i}
          storyId={item.id}
          generalImage={item.acf.generalImage}
          shortText={item.acf.shortText}
          storyLogo={item.acf.storyLogo}
        />
      )
    })
    return result
  }

  render() {
    return (
      <div className={style.container}>
        <Title text={'истории'}/>
        <div className={style.content}>
          {this.renderCards()}
        </div>
      </div>
    );
  }
}
