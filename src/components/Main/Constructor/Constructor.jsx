import React from 'react';
import { Link } from 'react-router-dom';

export default function Сonstructor () {
  return (
    <section className='constructor' id='constructor'>
      <div className='constructor__container'>
        <div className='constructor__box'>
          <h3 className='constructor__title'>
            Создай свой тактический планшет
          </h3>
          <p className='constructor__description'>
            Вы можете создать свой собственный уникальный 
            планшет в нашем конструкторе!
          </p>
          <Link className='constructor__link'>Перейти</Link>
        </div>
      </div>
    </section>
  )
}