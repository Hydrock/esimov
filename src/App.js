import React, { Component } from 'react';
import '@src/assets/fonts/fonts.scss';
import MainMenu from '@src/components/main-menu'
import Logo from '@src/components/logo'
import MainContainer from '@src/components/main-container'
import MainSlider from '@src/components/main-slider'
import Curtain from '@src/components/curtain'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='app'>
            <MainSlider/>
            <Logo/>
            <MainContainer/>
            <MainMenu/>
            <Curtain/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
