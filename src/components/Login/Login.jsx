import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }
  
  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password)
  }

  return (
    <div className='login'>
      <div className="login__container">
        <div className='login__box'>
          <Link className='login__button-back link' to='/'></Link>
          <div className='login__img'></div>
          <h2 className='login__title'>Рады видеть!</h2>
          <form className='login__form' onSubmit={handleSubmit}>
            <label htmlFor="email" className='login__label'>Почта</label>
            <input 
              type="text"
              className='login__input'
              placeholder='Введите Вашу почту'
              minLength="2"
              maxLength="40"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label htmlFor="password" className='login__label'>Пароль</label>
            <input
              type="text"
              className='login__input'
              placeholder='Введите Ваш пароль'
              minLength="2"
              maxLength="40"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button type='submit' className='login__submit-button link'>Войти</button>
            <p className='login__versus'>ИЛИ</p>
            <Link className='login__link link'>Войти через Вконтакте</Link>
            <Link className='login__link link'>Войти по номеру телефона</Link>
            <p className='login__login-text'>Ещё не зарегистрированы?
              <Link to='/signup' className='login__login-link link'>Регистрация</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}