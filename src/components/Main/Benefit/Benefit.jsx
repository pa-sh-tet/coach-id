import React from 'react';
import icon1 from '../../../images/icon1.png';
import icon2 from '../../../images/icon2.png';
import icon3 from '../../../images/icon3.png';
import icon4 from '../../../images/icon4.png';

export default function Benefit () {

  return (
    <section className='benefit' id='benefit'>
      <div className='benefit__container'>
        <h2 className='benefit__title'>Наши преимущества</h2>
        <div className='benefit__columns'>
          <div className='benefit__item'>
            <span className='benefit__icon' style={{ width: '50px', height: '50px', padding: '25px'}}>
              <img className='benefit__img'
               src={icon1}
               alt="icon1" />
            </span>
            <h4 className='benefit__subtitle'>Дизайн</h4>
            <p className='benefit__description'>Индивидуальный дизайн для каждого клиента</p>
          </div>
          <div className='benefit__item'>
            <span className='benefit__icon'>
              <img className='benefit__img'
               src={icon2}
               alt="icon2" />
            </span>
            <h4 className='benefit__subtitle'>Сроки</h4>
            <p className='benefit__description'>​Планшет будет готов через 7-10 дней после утверждения макета</p>
          </div>
          <div className='benefit__item'>
            <span className='benefit__icon'>
              <img className='benefit__img'
               src={icon3}
               alt="icon3" />
            </span>
            <h4 className='benefit__subtitle'>Качество</h4>
            <p className='benefit__description'>Самые качественные материалы ради Вашего комфорта​</p>
          </div>
          <div className='benefit__item'>
            <span className='benefit__icon' style={{ width: '70px', height: '70px', padding: '15px'}}>
              <img className='benefit__img'
               src={icon4}
               alt="icon4" />
            </span>
            <h4 className='benefit__subtitle'>Доставка</h4>
            <p className='benefit__description'>​Бесплатная доставка Почтой России</p>
          </div>
        </div>
      </div>
    </section>
  )
}