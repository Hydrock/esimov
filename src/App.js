import React, { Component } from 'react';
import './App.css';

import MainMenu from './components/main-menu'
import Logo from './components/logo'
import MainContainer from './components/main-container'
import MainSlider from './components/main-slider'
import Curtain from './components/curtain'

import './assets/fonts/fonts.scss';

class App extends Component {
  render() {
    return (
      <div className='app'>
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */ }
        <MainSlider/>
        <Logo/>
        <MainMenu/>
        <Curtain/>
      </div>
    );
  }
}

export default App;
