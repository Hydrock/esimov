import React, { Component } from 'react'
import styles from './styles.scss'
import * as actions from '@src/actions/index.js'

export default class MobileMenuButton extends Component {
  toggleMenu = () => {
    actions.toggleMenu(!this.props.opened)
  }

  render () {
    return (
      <div 
        className={styles.button}
        onClick={this.toggleMenu}
      />
    )
  }
}
