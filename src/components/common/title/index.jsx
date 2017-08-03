import React, { Component } from 'react';
import style from './style.scss'

export default class Title extends Component {
  render() {
    return (
      <h1 className={style.title}>
        {this.props.text}
      </h1>
    );
  }
}