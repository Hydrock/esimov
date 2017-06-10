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
        <MainSlider/>
        <Logo/>
        <MainContainer/>
        <MainMenu/>
        <Curtain/>
      </div>
    );
  }
}

export default App;
