import React, { Component } from 'react';
import store from '@src/store.js'
import { connect } from 'react-redux'
import CustomLink from '@src/components/common/custom-link'
import classnames from 'classnames'
import style from './style.scss'

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(previousState => {
      return { opened: nextProps.menuOpened }
    })
  }

  render() {
    const containerClassName = classnames(style.container, {
      [style.opened]: this.state.opened
    })
    return (
      <div className={containerClassName}>
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

function mapStateToProps(state) {
  return {
    menuOpened: state.menuOpened
  }
}

export default connect(mapStateToProps)(MainMenu)