import React from 'react';
import {Route, Link} from 'react-router-dom';
import ClassNames from 'classnames';

function Header() {
  var menus = [
    {
      name: 'TRANG CHỦ',
      to: '/',
      exact: true
    },
    {
      name: 'QUẢN LÝ SẢN PHẨM',
      to: '/products',
      exact: false
    }
  ];

  const HeaderLink = ({label, to, isExact}) => {
    return (
      <Route path={to} exact={isExact} children={
        ({match}) => {
          return (
            <li className={ClassNames('nav-item', {active: match && match.isExact})}>
              <Link className="nav-link" to={to}>{label}</Link>
            </li>
          )
        }
      } />
    )
  }

  function showHeaderLink(menus) {
    let results = null;
    if (menus.length > 0)
      results = menus.map((menu, index) => {
        return <HeaderLink key={index} label={menu.name} to={menu.to} exact={menu.exact} />
      })
    return results;
  }

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <ul className="nav navbar-nav">
          {showHeaderLink(menus)}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
