import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import NavTab from './NavTab/NavTab';

export default function Header ({ isLoggedIn }) {
  const location = useLocation();

  return (
    <header id='header' className={`header ${location.pathname === '/' ? 'header__main' : 'header__profile'}`}>
      <div className='header__container'>
        <Link to="https://vk.com/coachid_boards" target='_blank' className="header__logo link" />
        {isLoggedIn ? (
          <>
            <Navigation />
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