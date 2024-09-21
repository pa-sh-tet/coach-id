import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import NavTab from './NavTab/NavTab';

export default function Header ({ isLoggedIn }) {
  const location = useLocation();

  return (
    <header id='header' className={`header ${location.pathname === '/' ? 'header__main' : 'header__profile'}`}>
      <div className='header__container'>
        <Link to="/" className="header__logo link" />
        {isLoggedIn ? (
          <>
            <Navigation />
            {/* <button className="header__login-button link" onClick={signOut}>Выйти</button> */}
          </>
        ) : (
          <>
            <NavTab />
            <Link to='/signin' className="header__login-button link">Войти</Link>
          </>
        )}
      </div>
    </header>
  )
}