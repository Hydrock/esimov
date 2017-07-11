import React, { Component } from 'react'
import store from '@src/store.js'
import { connect } from 'react-redux'
import styles from './styles.scss'

class MobileMenuButton extends Component {
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

function mapStateToProps(state) {
  return {
    menuOpened: state.menuOpened
  }
}

export default connect(mapStateToProps)(MobileMenuButton)
