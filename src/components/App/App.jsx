import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { CurrentDataPostContext } from "../../contexts/CurrentDataPostContext";
import { CurrentDataSdecContext } from "../../contexts/CurrentDataSdecContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Constructor from "../Constructor/Constructor";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
// import { auth } from '../../utils/Auth.js';
import avatarImage from "../../images/promo_grid_1.jpg";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    name: "sd",
    email: "sd",
    password: "sd",
    avatar: avatarImage,
    phoneNumber: "+79541231489",
  });
  
  const [currentDataPost, setCurrentDataPost] = useState({
    name: "sd",
    surname: "sd",
    patronymic: "sd",
    phoneNumber: "+79541231489",
    index: "sd",
    city: "sd",
    street: "sd",
    building: "sd",
    flat: "sd",
  }); // Текущие данные доставки по почте
  
  const [currentDataSdec, setCurrentDataSdec] = useState({
    name: "sd",
    surname: "sd",
    patronymic: "sd",
    phoneNumber: "+79541231489",
    index: "sd",
    city: "sd",
    street: "sd",
    building: "sd",
    flat: "sd",
  }); // Текущие данные доставки по СДЭК

  const [users, setUsers] = useState([
    {
      name: "sd",
      email: "sd",
      password: "sd",
      avatar: avatarImage,
      phoneNumber: "+79541231489",
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/constructor", { replace: true });
    }
  }, []);

  function signOut() {
    setIsLoggedIn(false); // TODO полностью реализовать выход из профиля
    navigate("/", { replace: true });
  }

  function handleRegister(name, email, password) {
    const newUser = { name, email, password };
    setCurrentUser(newUser);
    setUsers([...users, newUser]);
    setIsLoggedIn(true);
    navigate("/profile", { replace: true });
  }

  function handleLogin(email, password) { // TODO полностью реализовать вход
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
      navigate("/profile", { replace: true });
    } else {
      alert("Invalid email or password");
    }
  }

  const handleUpdateUser = (newUserInfo) => {
    setCurrentUser(newUserInfo);
  };

  const handleUpdateDataPost = (newPostData) => {
    setCurrentDataPost(newPostData);
  };

  const handleUpdateDataSdec = (newSdecData) => {
    setCurrentDataSdec(newSdecData);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentDataPostContext.Provider value={currentDataPost}>
        <CurrentDataSdecContext.Provider value={CurrentDataSdecContext}>
          <div className="app">
            <Routes>
              <Route
                path="/signup"
                element={<Register onRegister={handleRegister} />}
              ></Route>
              <Route
                path="/signin"
                element={<Login onLogin={handleLogin} />}
              ></Route>
              <Route
                path="/"
                element={
                  <>
                    <Header isLoggedIn={isLoggedIn} />
                    <Main isLoggedIn={isLoggedIn} />
                    <Footer />
                  </>
                }
              ></Route>
              <Route
                path="/profile"
                element={
                  <>
                    <Header isLoggedIn={isLoggedIn} />
                    <Profile
                      signOut={signOut}
                      onUpdateUser={handleUpdateUser}
                      onUpdateDataPost={handleUpdateDataPost}
                      onUpdateDataSdec={handleUpdateDataSdec}
                    />
                    <Footer />
                  </>
                }
              ></Route>
              <Route
                path="/constructor"
                element={
                  <>
                    <Header isLoggedIn={isLoggedIn} />
                    <Constructor />
                    <Footer />
                  </>
                }
              ></Route>
            </Routes>
          </div>
        </CurrentDataSdecContext.Provider>
      </CurrentDataPostContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
