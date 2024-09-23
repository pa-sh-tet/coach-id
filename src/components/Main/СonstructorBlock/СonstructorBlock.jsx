import React from 'react';
import { Link } from 'react-router-dom';

export default function СonstructorBlock ({ isLoggedIn }) {
  return (
    <section className='constructor-block' id='constructor-block'>
      <div className='constructor-block__container'>
        <div className='constructor-block__box'>
          <h3 className='constructor-block__title'>
            Создай свой тактический планшет
          </h3>
          <p className='constructor-block__description'>
            Вы можете создать свой собственный уникальный 
            планшет в нашем конструкторе!
          </p>
          <Link className='constructor-block__link link' to={isLoggedIn ? '/constructor' : '/signin'}>Перейти</Link>
        </div>
      </div>
    </section>
  )
}