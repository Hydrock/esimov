import React, { Component } from 'react'
import style from './style.scss'
import classnames from 'classnames'

import * as actions from '@src/actions/index.js'

export default class Curtain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opening: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const history = this.props.history
    if (nextProps.loadState === 'loading') {
      this.setOpenStateTrue()
      setTimeout(() => {
        actions.setLoad('loaded')
        actions.toggleMenu(false)
        history.push(nextProps.path)
        this.setOpenStateFalse()
      }, 1000)
    }
  }

  setOpenStateTrue () {
    this.setState(previousState => {
      return { opening: true }
    })
  }

  setOpenStateFalse () {
    this.setState(previousState => {
      return { opening: false }
    })
  }

  setOpenState () {
    this.setState(previousState => {
      return { opening: !previousState.opening }
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