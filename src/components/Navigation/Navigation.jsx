import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export default function Navigation({ openMenu }) {
  const location = useLocation();

  return (
    <nav className="header__navigation">
      <div className="header__links">
        <Link to="/" className={`header__link header__main link ${location.pathname === "/" && 'header__main_active'}`}>
          Главная
        </Link>
        <Link to="/profile" className={`header__link header__profile link ${location.pathname === "/" && 'header__link_black'} ${location.pathname === "/profile" && 'header__link_active'}`}>
          Профиль
        </Link>
        <Link to="/constructor" className={`header__link header__constructor link ${location.pathname === "/" && 'header__link_black'} ${location.pathname === "/constructor" && 'header__link_active'}`}>
          Конструктор
        </Link>
      </div>
      {/* <Link to="/profile" className="header__profile link">
        <div className="header__profile-logo"></div>
        <div className="header__profile-text">
          Аккаунт
        </div>
      </Link> */}
      {/* <button className='header__menu' onClick={openMenu}></button> */}
    </nav>
  )
}