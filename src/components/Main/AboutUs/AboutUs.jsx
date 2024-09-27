import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs () {
  return (
    <section className='about-us' id='about-us'>
      <div className='about-us__container'>
        <div className='about-us__icon'></div>
        <div className='about-us__text'>
          <h3 className='about-us__title merriweather'>О нас</h3>
          <p className='about-us__description'>
            ​Производим тактические планшеты для разных видов спорта 
            с 2016-го.<br/> Нам доверяют любительские и профессиональные 
            клубы, лиги и федерации.
          </p>
          <Link className='about-us__link'>Подробнее</Link>
        </div>
      </div>
    </section>
  )
}