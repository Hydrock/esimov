import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import style from './style.scss'

class MainMenu extends Component {
  render() {
    return (
      <div className={style.container}>
        <nav className={style.mainNav}>
          <ul className={style.mainNavUl}>
            <li className={style.mainNavUlItem}>
              <Link to='/prices' className={style.mainNavLink}>
                прайс
              </Link>
            </li>
            <li className={style.mainNavUlItem}>
              <Link to='/portfolio' className={style.mainNavLink}>
                портфолио
              </Link>
            </li>
            <li className={style.mainNavUlItem}>
              <Link to='/stories' className={style.mainNavLink}>
                истории
              </Link>
            </li>
            <li className={style.mainNavUlItem}>
              <Link to="/calendar" className={style.mainNavLink}>
                календарь
              </Link>
            </li>
            <li className={style.mainNavUlItem}>
              <Link to="/contacts" className={style.mainNavLink}>
                контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MainMenu;