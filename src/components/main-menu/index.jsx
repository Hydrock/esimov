import React, { Component } from 'react';
import style from './style.scss'

class MainMenu extends Component {
  render() {
    return (
      <div className={style.container}>
        <nav className={style.mainNav}>
          <ul className={style.mainNavUl}>
            <li className={style.mainNavUlItem}>
              <a href='#1' className={style.mainNavLink}>
                прайс
              </a>
            </li>
            <li className={style.mainNavUlItem}>
              <a href='#2' className={style.mainNavLink}>
                портфолио
              </a>
            </li>
            <li className={style.mainNavUlItem}>
              <a href='#3' className={style.mainNavLink}>
                календарь
              </a>
            </li>
            <li className={style.mainNavUlItem}>
              <a href='#4' className={style.mainNavLink}>
                контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MainMenu;