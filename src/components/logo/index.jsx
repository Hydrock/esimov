import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import style from './style.scss'

class Logo extends Component {
  render() {
    return (
      <Link to="/" className={style.logo}/>
    );
  }
}

export default Logo;