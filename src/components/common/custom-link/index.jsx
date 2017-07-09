import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import style from './style.scss'

class CustomLink extends Component {
  setPath = (e) => {
    const history = this.props.history
    const to = this.props.to
    e.preventDefault()
    history.push(to)
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

export default withRouter(CustomLink);