import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../images/promo_grid_1.jpg';

export default function Profile() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='profile'>
      <div className='profile__container'>
        <div className='profile__info'>
          <img className='profile__avatar' src={avatar} alt="Profile avatar" />
          <p className='profile__name'>Имя</p>
        </div>
        <div className='profile__main'>
          <div className="profile__tab-box">
            <div
              className={`profile__tab ${activeTab === 0 ? 'profile__tab_active' : ''}`}
              onClick={() => handleTabClick(0)}
            >
              Личные данные
            </div>
            <div
              className={`profile__tab ${activeTab === 1 ? 'profile__tab_active' : ''}`}
              onClick={() => handleTabClick(1)}
            >
              История заказов
            </div>
          </div>
          <div className="profile__content-box">
            {activeTab === 0 && (
              <div className="profile__content">
                <h2 className='profile__title'>Личные данные</h2>
                <div className="profile__content-item">
                  <label htmlFor="name" className='profile__label'>Имя</label>
                  <input type="text" id="name" className='profile__input' />
                  <label htmlFor="email" className='profile__label'>Email</label>
                  <input type="email" id="email" className='profile__input' />
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="profile__content">
                <h2 className='profile__title'>История заказов</h2>
                {/* Здесь можно вывести список заказов */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
