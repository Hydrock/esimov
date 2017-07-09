import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import store from '@src/store.js'
import style from './style.scss'

class CustomLink extends Component {
  setPath = (e) => {
    const history = this.props.history
    const to = this.props.to
    e.preventDefault()
    store.dispatch({ type: 'SET_LOAD', obj: { loadState: 'loading' } })
    store.dispatch({ type: 'SET_PATH', obj: { path: this.props.to } })
    //history.push(to)
  }
  render () {
    return (
      <div 
        className={style.link} 
        href="https://codepen.io/Smitevils/pen/OgBEgG"
        onClick={this.setPath}
      >
        Link
      </div>
    )
  }
}

CustomLink.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  to: PropTypes.string.isRequired
};

export default withRouter(CustomLink);