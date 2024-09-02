import React from 'react';

export default function Benefit () {

  return (
    <section className='benefit' id='benefit'>
      <div className='benefit__container'>
        <h2 className='benefit__title'>Наши преимущества</h2>
        <div className='benefit__columns'>
          <div className='benefit__item'>
            <div className='benefit__icon'></div>
            <h4 className='benefit__subtitle'>Дизайн</h4>
            <p className='benefit__description'>Индивидуальный дизайн для каждого клиента</p>
          </div>
          <div className='benefit__item'>
            <div className='benefit__icon'></div>
            <h4 className='benefit__subtitle'>Сроки</h4>
            <p className='benefit__description'>​Планшет будет готов через 7-10 дней после утверждения макета</p>
          </div>
          <div className='benefit__item'>
            <div className='benefit__icon'></div>
            <h4 className='benefit__subtitle'>Качество</h4>
            <p className='benefit__description'>Самые качественные материалы ради Вашего комфорта​</p>
          </div>
          <div className='benefit__item'>
            <div className='benefit__icon'></div>
            <h4 className='benefit__subtitle'>Доставка</h4>
            <p className='benefit__description'>​Бесплатная доставка Почтой России</p>
          </div>
        </div>
      </div>
    </section>
  )
}