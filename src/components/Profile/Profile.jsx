import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import avatarImg from "../../images/profile_avatar.png";
import React, { useState, useContext, useEffect } from "react";

export default function Profile({
  signOut,
  onUpdateUser,
  onUpdateDataPost,
  onUpdateDataSdec,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [isEditing, setIsEditing] = useState(false);
  
  // Данные по почте России
  const [isDataPostEditing, setIsDataPostEditing] = useState(false);
  const [namePost, setNamePost] = useState("");
  const [surnamePost, setSurnamePost] = useState("");
  const [patronymicPost, setPatronymicPost] = useState("");
  const [phoneNumberPost, setPhoneNumberPost] = useState("");
  const [indexPost, setIndexPost] = useState("");
  const [cityPost, setCityPost] = useState("");
  const [streetPost, setStreetPost] = useState("");
  const [buildingPost, setBuildingPost] = useState("");
  const [flatPost, setFlatPost] = useState("");

  // Данные по СДЭК
  const [isDataSdecEditing, setIsDataSdecEditing] = useState(false);
  const [nameSdec, setNameSdec] = useState("");
  const [surnameSdec, setSurnameSdec] = useState("");
  const [patronymicSdec, setPatronymicSdec] = useState("");
  const [phoneNumberSdec, setPhoneNumberSdec] = useState("");

  const [activeTab, setActiveTab] = useState(0);
  const currentUser = useContext(CurrentUserContext);

  const [userOrders, setUserOrders] = useState([
    {
      id: 1,
      product: {
        name: "Планшет Баскетбольный",
        price: 3000,
        image: "https://via.placeholder.com/150",
      },
      quantity: 2,
      createdAt: "2023-04-15",
    },
    {
      id: 2,
      product: {
        name: "Планшет Гандбольный",
        price: 3500,
        image: "https://via.placeholder.com/150",
      },
      quantity: 1,
      createdAt: "2023-03-20",
    },
  ]);

  const [deliveryTab, setDeliveryTab] = useState(0); // Начальное значение: Почта России

  // Обработчик клика по вкладочкам доставки
  const handleDeliveryTabClick = (tab) => {
    setDeliveryTab(tab);
  };

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
    setIsEmailValid(value.includes("@") && value.includes("."));
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

  function handleSubmitDataPost(event) { // TODO: Добавить проверку на валидность
    event.preventDefault();
    onUpdateDataPost({
      name: namePost,
      surname: surnamePost,
      patronymic: patronymicPost,
      phoneNumber: phoneNumberPost,
      index: indexPost,
      city: cityPost,
      street: streetPost,
      building: buildingPost,
      flat: flatPost,
    });
    setIsDataPostEditing(false);
  }

  function handleDataSdecSubmit(e) { // TODO: Добавить проверку на валидность
    e.preventDefault();
    onUpdateDataSdec({
      name: nameSdec,
      surname: surnameSdec,
      patronymic: patronymicSdec,
      phoneNumber: phoneNumberSdec,
    });
    setIsDataSdecEditing(false);
  }

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__info">
          <img
            className="profile__avatar"
            src={avatar || avatarImg}
            alt="Profile avatar"
          />
          <p className="profile__name">{name}</p>
          <button className="profile__signout-button link" onClick={signOut}>
            Выйти из аккаунта
          </button>
        </div>
        <div className="profile__main">
          <div className="profile__tab-box">
            <div
              className={`profile__tab ${
                activeTab === 0 ? "profile__tab_active" : ""
              }`}
              onClick={() => handleTabClick(0)}
            >
              Ваш кабинет
            </div>
            <div
              className={`profile__tab ${
                activeTab === 1 ? "profile__tab_active" : ""
              }`}
              onClick={() => handleTabClick(1)}
            >
              Данные доставки
            </div>
            <div
              className={`profile__tab ${
                activeTab === 2 ? "profile__tab_active" : ""
              }`}
              onClick={() => handleTabClick(2)}
            >
              История заказов
            </div>
          </div>
          <div className="profile__content-box">
            {activeTab === 0 && (
              <form className="profile__content_personal">
                <div className="profile__content-item">
                  <label htmlFor="name" className="profile__label">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Введите Ваше имя"
                    minLength="2"
                    maxLength="40"
                    className="profile__input"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="profile__content-item">
                  <label htmlFor="email" className="profile__label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Введите Вашу почту"
                    minLength="2"
                    maxLength="40"
                    className="profile__input"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="profile__content-item">
                  <label htmlFor="number" className="profile__label">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Введите Ваш номер телефона"
                    minLength="2"
                    maxLength="40"
                    className="profile__input"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </div>
                <button
                  onSubmit={handleSubmit}
                  className={`profile__save-button ${isEditing && "link"}`}
                  disabled={!isEditing}
                >
                  Сохранить
                </button>
              </form>
            )}
            {activeTab === 1 && (
              <div className="profile__content_personal">
                <p className="profile__subtitle">Выберите вид доставки</p>
                <ul className="profile__delivery-tabs">
                  <li
                    className={`profile__delivery-tab link ${
                      deliveryTab === 0 ? "profile__delivery-tab_active" : ""
                    }`}
                    onClick={() => handleDeliveryTabClick(0)}
                  >
                    Почта России
                  </li>
                  <li
                    className={`profile__delivery-tab link ${
                      deliveryTab === 1 ? "profile__delivery-tab_active" : ""
                    }`}
                    onClick={() => handleDeliveryTabClick(1)}
                  >
                    СДЭК
                  </li>
                </ul>
                {deliveryTab === 0 && (
                  <div className="profile__delivery-content">
                    <div className="profile__content-item">
                      <label htmlFor="name" className="profile__label">
                        Имя
                      </label>
                      <input
                        type="text"
                        id="namePost"
                        placeholder="Введите Имя"
                        minLength="2"
                        maxLength="40"
                        className="profile__input"
                        value={namePost}
                        onChange={(e) => setNamePost(e.target.value)}
                      />
                    </div>
                    <div className="profile__content-item">
                      <label htmlFor="name" className="profile__label">
                        Фамилия
                      </label>
                      <input
                        type="text"
                        id="surnamePost"
                        placeholder="Введите Фамилию"
                        minLength="2"
                        maxLength="40"
                        className="profile__input"
                        value={surnamePost}
                        onChange={(e) => setSurnamePost(e.target.value)}
                      />
                    </div>
                    <div className="profile__content-item">
                      <label htmlFor="name" className="profile__label">
                        Отчество
                      </label>
                      <input
                        type="text"
                        id="patronymicPost"
                        placeholder="Введите Отчество"
                        minLength="2"
                        maxLength="40"
                        className="profile__input"
                        value={patronymicPost}
                        onChange={(e) => setPatronymicPost(e.target.value)}
                      />
                    </div>
                    <div className="profile__content-item">
                      <label htmlFor="number" className="profile__label">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phoneNumberPost"
                        placeholder="Введите Номер телефона"
                        minLength="2"
                        maxLength="40"
                        className="profile__input"
                        value={phoneNumberPost}
                        onChange={(e) => setPhoneNumberPost(e.target.value)}
                      />
                    </div>
                    <div className="profile__content-item">
                      <label htmlFor="number" className="profile__label">
                        Индекс
                      </label>
                      <input
                        type="text"
                        id="indexPost"
                        placeholder="Введите Индекс"
                        minLength="2"
                        maxLength="40"
                        className="profile__input"
                        value={indexPost}
                        onChange={(e) => setIndexPost(e.target.value)}
                      />
                    </div>
                    <div className="profile__content-item">
                      <label htmlFor="number" className="profile__label">
                        Город
                      </label>
                      <input
                        type="text"
                        id="cityPost"
                        placeholder="Введите Город"
                        minLength="2"
                        maxLength="40"
                        className="profile__input"
                        value={cityPost}
                        onChange={(e) => setCityPost(e.target.value)}
                      />
                    </div>
                    <div className="profile__content-item">
                      <label htmlFor="number" className="profile__label">
                        Улица
                      </label>
                      <input
                        type="text"
                        id="streetPost"
                        placeholder="Введите Улицу"
                        minLength="2"
                        maxLength="40"
                        className="profile__input"
                        value={streetPost}
                        onChange={(e) => setStreetPost(e.target.value)}
                      />
                    </div>
                    <div className="profile__content-item">
                      <label htmlFor="number" className="profile__label">
                        Дом
                      </label>
                      <input
                        type="text"
                        id="buildingPost"
                        placeholder="Введите Дом"
                        minLength="2"
                        maxLength="40"
                        className="profile__input"
                        value={buildingPost}
                        onChange={(e) => setBuildingPost(e.target.value)}
                      />
                    </div>
                    <div className="profile__content-item">
                      <label htmlFor="number" className="profile__label">
                        Квартира/офис
                      </label>
                      <input
                        type="text"
                        id="flatPost"
                        placeholder="Введите Квартиру/офис"
                        minLength="2"
                        maxLength="40"
                        className="profile__input"
                        value={flatPost}
                        onChange={(e) => setFlatPost(e.target.value)}
                      />
                    </div>
                    <button
                      onSubmit={handleSubmitDataPost}
                      className={`profile__save-button ${
                        isDataPostEditing && "link"
                      }`}
                      disabled={!isDataPostEditing}
                    >
                      Сохранить
                    </button>
                  </div>
                )}
                {deliveryTab === 1 && (
                  <form className="profile__delivery-content">
                    <div className="profile__content-item">
                      <label htmlFor="name" className="profile__label">
                        Имя
                      </label>
                      <input
                        type="text"
                        id="nameSdec"
                        placeholder="Введите Имя"
                        minLength="2"
                        maxLength="40"
                        className="profile__input"
                        value={nameSdec}
                        onChange={(e) => setNameSdec(e.target.value)}
                      />
                    </div>
                    <div className="profile__content-item">
                      <label htmlFor="name" className="profile__label">
                        Фамилия
                      </label>
                      <input
                        type="text"
                        id="surnameSdec"
                        placeholder="Введите Фамилию"
                        minLength="2"
                        maxLength="40"
                        className="profile__input"
                        value={surnameSdec}
                        onChange={(e) => setSurnameSdec(e.target.value)}
                      />
                    </div>
                    <div className="profile__content-item">
                      <label htmlFor="name" className="profile__label">
                        Отчество
                      </label>
                      <input
                        type="text"
                        id="patronymicSdec"
                        placeholder="Введите Отчество"
                        minLength="2"
                        maxLength="40"
                        className="profile__input"
                        value={patronymicSdec}
                        onChange={(e) => setPatronymicSdec(e.target.value)}
                      />
                    </div>
                    <div className="profile__content-item">
                      <label htmlFor="number" className="profile__label">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phoneNumberSdec"
                        placeholder="Введите Номер телефона"
                        minLength="2"
                        maxLength="40"
                        className="profile__input"
                        value={phoneNumberSdec}
                        onChange={(e) => setPhoneNumberSdec(e.target.value)}
                      />
                    </div>
                    <button
                      onSubmit={handleDataSdecSubmit}
                      className={`profile__save-button ${
                        isDataSdecEditing && "link"
                      }`}
                      disabled={!isDataSdecEditing}
                    >
                      Сохранить
                    </button>
                  </form>
                )}
              </div>
            )}
            {activeTab === 2 && (
              <div className="profile__content_orders">
                {userOrders.map((order) => (
                  <div key={order.id} className="profile__order">
                    <img
                      src={order.product.image}
                      alt={order.product.name}
                      className="profile__order-image"
                    />
                    <h3 className="profile__order-name">
                      {order.product.name}
                    </h3>
                    <p className="profile__order-price">
                      Цена: {order.product.price} руб.
                    </p>
                    <p className="profile__order-quantity">
                      Количество: {order.quantity}
                    </p>
                    <p className="profile__order-date">
                      Дата заказа: {order.createdAt}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
