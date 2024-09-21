import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import avatarImg from '../../images/profile_avatar.png';
import React, { useState, useContext, useEffect } from 'react';

export default function Profile({ signOut, onUpdateUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const currentUser = useContext(CurrentUserContext);

  const [userOrders, setUserOrders] = useState([
    {
      id: 1,
      product: {
        name: 'Планшет Баскетбольный',
        price: 3000,
        image: 'https://via.placeholder.com/150'
      },
      quantity: 2,
      createdAt: '2023-04-15'
    },
    {
      id: 2,
      product: {
        name: 'Планшет Гандбольный',
        price: 3500,
        image: 'https://via.placeholder.com/150'
      },
      quantity: 1,
      createdAt: '2023-03-20'
    }
  ]);
  
  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    setAvatar(currentUser.avatar);
    setPhoneNumber(currentUser.phoneNumber);
  }, [currentUser]);

  function handleNameChange(e) {
    const value = e.target.value;
    setIsEditing(true);
    setName(value);
    setIsNameValid(value.length >= 2 && value.length <= 40);
  }

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);
    setIsEditing(true);
    setIsEmailValid(value.includes('@') && value.includes('.'));
  }

  function handlePhoneNumberChange(e) {
    const value = e.target.value;
    setPhoneNumber(value);
    setIsEditing(true);
    // setIsEmailValid(value.includes('@') && value.includes('.'));
  }

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (isNameValid && isEmailValid) {
      onUpdateUser({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
      });
      setIsEditing(false);
    }
  }

  return (
    <div className='profile'>
      <div className='profile__container'>
        <div className='profile__info'>
          <img className='profile__avatar' src={avatar || avatarImg} alt="Profile avatar" />
          <p className='profile__name'>{name}</p>
          <button className='profile__signout-button link' onClick={signOut}>Выйти из аккаунта</button>
        </div>
        <div className='profile__main'>
          <div className="profile__tab-box">
            <div
              className={`profile__tab ${activeTab === 0 ? 'profile__tab_active' : ''}`}
              onClick={() => handleTabClick(0)}
            >
              Ваш кабинет
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
              <form className="profile__content_personal">
                {/* <h2 className='profile__title'>Личные данные</h2> */}
                <div className="profile__content-item">
                  <label htmlFor="name" className='profile__label'>Имя</label>
                  <input
                    type="text"
                    id="name"
                    placeholder='Введите Ваше имя'
                    minLength="2"
                    maxLength="40"
                    className='profile__input'
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="profile__content-item">
                  <label htmlFor="email" className='profile__label'>Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder='Введите Вашу почту'
                    minLength="2"
                    maxLength="40"
                    className='profile__input'
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="profile__content-item">
                  <label htmlFor="number" className='profile__label'>Телефон</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder='Введите Ваш номер телефона'
                    minLength="2"
                    maxLength="40"
                    className='profile__input'
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </div>
                {/* <h2 className='profile__title'>Адрес доставки</h2> */}
                <button onSubmit={handleSubmit} className={`profile__save-button ${isEditing && 'link'}`} disabled={!isEditing}>Сохранить</button>
              </form>
            )}
            {activeTab === 1 && (
              <div className="profile__content_orders">
                {userOrders.map((order) => (
                  <div key={order.id} className="profile__order">
                    <img src={order.product.image} alt={order.product.name} className="profile__order-image" />
                    <h3 className="profile__order-name">{order.product.name}</h3>
                    <p className="profile__order-price">Цена: {order.product.price} руб.</p>
                    <p className="profile__order-quantity">Количество: {order.quantity}</p>
                    <p className="profile__order-date">Дата заказа: {order.createdAt}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
