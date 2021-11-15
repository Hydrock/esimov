import React, { Component } from 'react'
import PropTypes from 'prop-types';
import style from './style.scss'

import * as actions from '@src/actions/index.js'

class CustomLink extends Component {
  setPath (e) {
    e.preventDefault()
    actions.setLoad('loading')
    actions.setPath(this.props.to)
  }
  render () {
    return (
      <a 
        className={style.link} 
        href="/"
        onClick={this.setPath.bind(this)}
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