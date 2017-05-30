import React, { Component } from 'react';
import classnames from 'classnames';
import style from './style.scss'

class MainContainer extends Component {
  randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

  getStyle() {
    var number = this.randomInteger(1, 3)
    return classnames(style.container, style[`bg-${number}`])
  }

  render() {
    return (
      <div className={this.getStyle()}>
        
      </div>
    );
  }
}

export default MainContainer;