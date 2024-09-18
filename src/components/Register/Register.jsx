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
          <h2 className='register__title'>Регистрация</h2>
          <form className='register__form'>
            
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
            <button className='register__submit-button link'>Зарегистрироваться</button>
            <p className='register__versus'>ИЛИ</p>
            <Link className='register__link'>
              Войти через Вконтакте
            </Link>
            <Link className='register__link'>Войти через номер телефона</Link>
            <p className='register__login-text'>Уже зарегистрированы?
              <Link to='/signin' className='register__login-link link'>Войти</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}