import React, { Component } from 'react';
import CustomLink from '@src/components/common/custom-link'
import classnames from 'classnames'
import style from './style.scss'

export default class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(previousState => {
      return { opened: nextProps.opened }
    })
  }

  renderLinks (item, i) {
    return (
      <li className={style.mainNavUlItem} key={i}>
        <CustomLink to={item.to} text={item.text} className={style.mainNavLink}/>
      </li>
    )
  }

  render() {
    const containerClassName = classnames(style.container, {
      [style.opened]: this.state.opened
    })
    const items = this.props.items

    return (
      <div className={containerClassName}>
        <nav className={style.mainNav}>
          <ul className={style.mainNavUl}>
            { items.map(this.renderLinks, this) }
          </ul>
        </nav>
      </div>
    );
  }
}