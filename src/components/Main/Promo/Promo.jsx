import React from 'react';

export default function Promo () {
  return (
    <section className='promo' id='promo'>
      <div className="promo__container">
        <div className='promo__img promo__img-1'></div>
        <div className='promo__text'>
          <h4 className='promo__title'>
            Лига ВТБ - с нами!
          ​</h4>
          <p className='promo__description'>
            Многие именитые тренеры сотруд​ничают с нами - в
            том числе тренеры команд Единой Лиги ВТБ.
          </p>
        </div>
        <div className='promo__img promo__img-2'></div>
        <div className='promo__img promo__img-3'></div>
      </div>
    </section>
  )
}