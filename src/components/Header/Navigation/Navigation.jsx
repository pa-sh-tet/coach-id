import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export default function Navigation({ isLoggedIn, currentSection }) {
  const location = useLocation();
  const NavLink = ({ href, label, isActive }) => (
    <a className={`header__link ${isActive ? 'header__link_active' : ''}`} href={href}>
      {label}
    </a>
  );

  return (
    <>
      {isLoggedIn ? (
        <nav className="header__navigation">
          <div className="header__links">
            <Link to="/" className={`header__link ${location.pathname === "/" && 'header__link_active'}`}>
              Главная
            </Link>
            <Link to="/profile" className={`header__link ${location.pathname === "/profile" && 'header__link_active'}`}>
              Профиль
            </Link>
            <Link to="/constructor" className={`header__link ${location.pathname === "/constructor" && 'header__link_active'}`}>
              Конструктор
            </Link>
          </div>
        </nav>
      ) : (
        <div className='header__nav-tab'>
          <NavLink href="#benefit" label="Преимущества" isActive={currentSection === 'benefit'} />
          <NavLink href="#about-us" label="О нас" isActive={currentSection === 'about-us'} />
          <NavLink href="#portfolio" label="Портфолио" isActive={currentSection === 'portfolio'} />
          <NavLink href="#constructor-block" label="Конструктор" isActive={currentSection === 'constructor-block'} />
          <NavLink href="#contacts" label="Контакты" isActive={currentSection === 'contacts'} />
        </div>
      )}
    </>
  )
}