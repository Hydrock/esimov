import React, { Component } from 'react';
import style from './style.scss'
import classnames from 'classnames'

export default class Curtain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opening: false
    }
  }

  setOpenState = () => {
    this.setState(previousState => {
      return { opening: !previousState.opening };
    })
  }

  setAnimationClass () {
    return this.state.opening ? style.opening : style.closing
  }

  render () {
    return (
      <div className={style.container} onClick={this.setOpenState}>
        <div className={classnames(style.transitionLayer, style.visible, this.setAnimationClass())}>
            <div className={style.layer}></div>
        </div>
      </div>
    )
  }
}