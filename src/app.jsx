import React, { Component } from 'react';
import '@src/assets/fonts/fonts.scss';
import '@src/styles/global.scss'
import MainMenu from '@src/containers/main-menu'
import Logo from '@src/components/logo'
import MainContainer from '@src/components/main-container'
import MainSlider from '@src/components/main-slider'
import Curtain from '@src/containers/curtain'
import MobileMenuButton from '@src/containers/mobile-menu-button'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@src/store.js'

class App extends Component {
  render() {
    const menuItems = [
      {
        to: '/prices',
        text: 'прайс'
      },
      {
        to: '/portfolio',
        text: 'портфолио'
      },
      {
        to: '/stories',
        text: 'истории'
      },
      {
        to: '/calendar',
        text: 'календарь'
      },
      {
        to: '/contacts',
        text: 'контакты'
      }
    ]
    const appStyle = {
      overflow: 'hidden',
      position: 'relative',
      height: '100vh'
    };
    return (
      <Provider store={store}>
        <Router>
          <div className='app' style={appStyle}>
            <Logo/>
            <MainContainer/>
            <MainMenu items={menuItems} />
            <MobileMenuButton/>
            <Curtain/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
