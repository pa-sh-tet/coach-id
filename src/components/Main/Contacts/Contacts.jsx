import React from 'react';
import { Link } from 'react-router-dom';
import vk_icon from '../../../images/vk.png';

export default function Contacts () {
  return (
    <section className='contacts' id='contacts'>
      <div className="contacts__container">
        <h2 className='contacts__title'>Контакты</h2>
        <div className="contacts__items">
          <div className="contacts__item">
            <span className='contacts__icon'>
              <img src={vk_icon} alt="" className='contacts__img' />
            </span>
            <h4 className='contacts__subtitle'>
              Группа Вконтакте
            </h4>
            <p className='contacts__description'>
              Наша группа Вконтакте, в которой вы можете
              сделать заказ, увидеть новости и новые работы
            </p>
            <Link className='contacts__link'>Перейти</Link>
          </div>
          <div className="contacts__item">
            <span className='contacts__icon'>
              <img src="" alt="" className='contacts__img' />
            </span>
            <h4 className='contacts__subtitle'>
              WhatsApp
            </h4>
            <p className='contacts__description'>
              Свяжитесь с нами в WhatsApp, для
              дальнейшего сотрудничества и заказов
            </p>
            <Link className='contacts__link'>
              +7 (***) *** **-**
            </Link>
          </div>
          <div className="contacts__item">
            <span className='contacts__icon'>
              <img src="" alt="" className='contacts__img' />
            </span>
            <h4 className='contacts__subtitle'>
              Instagram
            </h4>
            <p className='contacts__description'>
              Аккаунт в Instagram, в котором вы можете увидеть
              примеры наших работ и многое другое.
            </p>
            <Link className='contacts__link'>Перейти</Link>
          </div>
        </div>
      </div>
    </section>
  )
}