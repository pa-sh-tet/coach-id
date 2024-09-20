import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import NavTab from './NavTab/NavTab';

export default function Header ({ isLoggedIn }) {
  const location = useLocation();

  return (
    <header id='header' className={`header ${location.pathname === '/' ? 'header__main' : 'header__profile'}`}>
      <div className='header__container'>
        {/* <Link to="/" className="header__logo link" />
        <NavTab />
        <Link to='/signin' className="header__login-button link">Войти</Link>
        <Link to="/" className="header__logo link" /> */}
        {isLoggedIn ? (
          <>
            <Link to="/" className="header__logo link" />
            <Navigation />
            <Link to='/' className="header__login-button link">Выйти</Link>
          </>
        ) : (
          <>
            <Link to="/" className="header__logo link" />
            <NavTab />
            <Link to='/signin' className="header__login-button link">Войти</Link>
          </>
          // <div className='header__buttons'>
          //   <Link to='/signup' className="header__auth link">Регистрация</Link>
          //   <Link to='/signin' className="header__login link">Войти</Link>
          // </div>
        )}
      </div>
    </header>
  )
}