import React, { Component } from 'react'
import store from '@src/store.js'
import { connect } from 'react-redux'
import style from './style.scss'
import classnames from 'classnames'

class Curtain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opening: false
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps.loadState == 'loading') {
      this.setOpenStateTrue()
      setTimeout(() => {this.setOpenStateFalse()}, 2000)
    }
  }

  setOpenStateTrue = () => {
    this.setState(previousState => {
      return { opening: true }
    })
  }

  setOpenStateFalse = () => {
    this.setState(previousState => {
      return { opening: false }
    })
  }

  setOpenState = () => {
    this.setState(previousState => {
      return { opening: !previousState.opening }
    })
  }

  setAnimationClass () {
    return this.state.opening ? style.opening : style.closing
  }

  render () {
    console.log(this.props.loadState)
    return (
      <div className={style.container} onClick={this.setOpenState}>
        <div className={classnames(style.transitionLayer, style.visible, this.setAnimationClass())}>
            <div className={style.layer}></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loadState: state.loadState
  }
}

export default connect(mapStateToProps)(Curtain)