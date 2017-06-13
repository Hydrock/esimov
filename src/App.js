import React, { Component } from 'react';
import './App.css';
import './assets/fonts/fonts.scss';
import MainMenu from './components/main-menu'
import Logo from './components/logo'
import MainContainer from './components/main-container'
import MainSlider from './components/main-slider'
import Curtain from './components/curtain'
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
