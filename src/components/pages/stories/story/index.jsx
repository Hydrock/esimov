import React, { Component } from 'react';
import style from './style.scss'

export default class Story extends Component {
  render() {
    var data = this.props.stories && this.props.stories.stories && this.props.stories.stories.data || []
    var storyId = this.props.match.params.id
    var loadData;
    data.forEach(function(item, i, arr) {
      if (item.id == storyId) {
        loadData = item
      }
    });
    
    return (
      <div className={style.box}>
        <div className={style.titleWrap}>
          <img
            src={loadData.acf.storyLogo}
            className={style.cardTitleImage}
            alt=''
            className={style.titleImage}
          />
        </div>
        <div className={style.colLeft}>
          <img src={loadData.acf.generalImage} className={style.image1}/>
          <img src={loadData.acf.image1} className={style.image1}/>
        </div>
        <div className={style.rightCol} dangerouslySetInnerHTML={{__html: loadData.acf.fullText}} />
      </div>
    );
  }
}