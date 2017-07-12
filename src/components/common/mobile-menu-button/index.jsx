import React, { Component } from 'react'
import store from '@src/store.js'
import styles from './styles.scss'

export default class MobileMenuButton extends Component {
  toggleMenu = () => {
    store.dispatch({ type: 'TOGGLE_MENU', obj: { menuOpened: !this.props.menuOpened } })
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
