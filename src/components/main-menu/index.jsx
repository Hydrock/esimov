import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import style from './style.scss'

import CustomLink from '@src/components/common/custom-link'

class MainMenu extends Component {
  render() {
    return (
      <div className={style.container}>
        <nav className={style.mainNav}>
          <ul className={style.mainNavUl}>
            <li className={style.mainNavUlItem}>
              { /*<Link to='/prices' className={style.mainNavLink}>
                прайс
              </Link>*/ }
              <CustomLink to='/prices' text='прайс' className={style.mainNavLink}/>
            </li>
            <li className={style.mainNavUlItem}>
              { /*<Link to='/portfolio' className={style.mainNavLink}>
                портфолио
              </Link>*/ }
              <CustomLink to='/portfolio' text='портфолио' className={style.mainNavLink}/>
            </li>
            <li className={style.mainNavUlItem}>
              { /*<Link to='/stories' className={style.mainNavLink}>
                истории
              </Link>*/ }
              <CustomLink to='/stories' text='истории' className={style.mainNavLink}/>
            </li>
            <li className={style.mainNavUlItem}>
              { /*<Link to="/calendar" className={style.mainNavLink}>
                календарь
              </Link> */ }
               <CustomLink to='/calendar' text='календарь' className={style.mainNavLink}/>
            </li>
            <li className={style.mainNavUlItem}>
              { /*<Link to="/contacts" className={style.mainNavLink}>
                контакты
              </Link> */ }
              <CustomLink to='/contacts' text='контакты' className={style.mainNavLink}/>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MainMenu;