import React, { Component } from 'react'
import store from '@src/store.js'
import { connect } from 'react-redux'
import style from './style.scss'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'

class Curtain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opening: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const history = this.props.history
    console.log(history)
    if (nextProps.loadState == 'loading') {
      this.setOpenStateTrue()
      setTimeout(() => {
        store.dispatch({ type: 'SET_LOAD', obj: { loadState: 'loaded' } })
        history.push(nextProps.path)
        this.setOpenStateFalse()
      }, 1000)
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
    loadState: state.loadState,
    path: state.path
  }
}

export default withRouter(connect(mapStateToProps)(Curtain))