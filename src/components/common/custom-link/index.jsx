import React, { Component } from 'react'
import PropTypes from 'prop-types';
import store from '@src/store.js'
import style from './style.scss'

class CustomLink extends Component {
  setPath = (e) => {
    e.preventDefault()
    store.dispatch({ type: 'SET_LOAD', obj: { loadState: 'loading' } })
    store.dispatch({ type: 'SET_PATH', obj: { path: this.props.to } })
  }
  render () {
    return (
      <a 
        className={style.link} 
        href="/"
        onClick={this.setPath}
      >
        { this.props.text }
      </a>
    )
  }
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default CustomLink;