import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Register({ onRegister }) {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function handleNameChange(evt) {
  //   setName(evt.target.value);
  // }

  // function handleEmailChange(evt) {
  //   setEmail(evt.target.value);
  // }
  
  // function handlePasswordChange(evt) {
  //   setPassword(evt.target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   onRegister(name, email, password);
  // }

  return (
    <div className='register'>
      <div className="register__container">
        <div className='register__box'>
          <Link className='register__button-back link' to='/main'></Link>
          <div className='register__img'></div>
          <h2 className='register__title'>Регистрация</h2>
          <form className='register__form'>
            <label htmlFor="name" className='register__label'>Имя</label>
            <input 
              type="text"
              className='register__input'
              placeholder='Введите имя'
              minLength="2"
              maxLength="40"
              // value={name}
              // onChange={handleNameChange}
              required
            />
            <label htmlFor="password" className='register__label'>Пароль</label>
            <input
              type="text"
              className='register__input'
              placeholder='Введите пароль'
              minLength="2"
              maxLength="40"
              // value={name}
              // onChange={handleNameChange}
              required
            />
            <label htmlFor="password" className='register__label'>Повторите пароль</label>
            <input
              type="text"
              className='register__input'
              placeholder='Введите пароль повторно'
              minLength="2"
              maxLength="40"
              // value={name}
              // onChange={handleNameChange}
              required
            />
            <label htmlFor="email" className='register__label'>Почта</label>
            <input
              type="text"
              className='register__input'
              placeholder='Введите почту'
              minLength="2"
              maxLength="40"
              // value={name}
              // onChange={handleNameChange}
              required
            />
            <button className='register__submit-button link'>Зарегистрироваться</button>
            <p className='register__versus'>ИЛИ</p>
            <Link className='register__link link'>Войти через Вконтакте</Link>
            <Link className='register__link link'>Войти по номеру телефона</Link>
            <p className='register__login-text'>Уже зарегистрированы?
              <Link to='/signin' className='register__login-link link'>Войти</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}