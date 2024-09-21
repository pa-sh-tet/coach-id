import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export default function Navigation({ openMenu }) {
  const location = useLocation();

  return (
    <nav className="header__navigation">
      <div className="header__links">
        <Link to="/" className={`header__link header__main link ${location.pathname === "/" && 'header__link_active'}`}>
          Главная
        </Link>
        <Link to="/profile" className={`header__link header__profile link ${location.pathname === "/profile" && 'header__link_active'}`}>
          Профиль
        </Link>
        <Link to="/constructor" className={`header__link header__constructor link ${location.pathname === "/constructor" && 'header__link_active'}`}>
          Конструктор
        </Link>
      </div>
    </nav>
  )
}