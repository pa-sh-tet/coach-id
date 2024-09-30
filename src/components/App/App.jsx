import './App.css';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Constructor from '../Constructor/Constructor';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
// import { auth } from '../../utils/Auth.js';
import avatarImage from '../../images/promo_grid_1.jpg';

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useState([
    {
      name: 'sd',
      email: 'sd',
      password: 'sd',
      avatar: avatarImage,
      phoneNumber: '+79541231489',
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile", {replace: true});
    }
  }, []);

  // useEffect(() => {
  //   setCurrentUser(user);
  //   // if (isLoggedIn) {
  //   //   Promise.all([ mainApi.getUserInfo(), mainApi.getSaveMovies() ])
  //   //     .then(([user, movies]) => {
  //   //       setCurrentUser(user);
  //   //       setSaveMovies(movies);
  //   //     })
  //   //     .catch((error) => {
  //   //       console.log(error);
  //   //     })
  //   //   }
  // }, [isLoggedIn]);

  function signOut () {
    setIsLoggedIn(false);
    navigate("/", {replace: true});
  }

  function handleRegister(name, email, password) {
    const newUser = { name, email, password };
    setCurrentUser(newUser);
    setUsers([...users, newUser]);
    setIsLoggedIn(true);
    navigate("/profile", {replace: true});
    // auth.register(name, email, password)
    //   .then((res) => {
    //     if (res) {
    //       setIsSuccess(true);
    //       setIsInfoPopupOpen(true);
    //       navigate("/signin", {replace: true});   
    //     } else {
    //       setIsSuccess(false);
    //       setIsInfoPopupOpen(true);    
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setIsSuccess(false);
    //     setIsInfoPopupOpen(true);
    //   })
  }
  

  function handleLogin(email, password) {
    // Find the user in the users array
    const user = users.find((u) => u.email === email && u.password === password);
  
    if (user) {
      // Set the current user and login status
      setCurrentUser(user);
      setIsLoggedIn(true);
      navigate("/profile", { replace: true });
    } else {
      // Display an error message or handle the case where the user is not found
      alert("Invalid email or password");
    }
  }

  const handleUpdateUser = (newUserInfo) => {
    // mainApi.patchUserInfo(newUserInfo)
      // .then((newData) => {
        setCurrentUser(newUserInfo);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  }
  

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Routes>
          <Route path="/signup"
            element={<Register
              onRegister={handleRegister}
            />}>
          </Route>
          <Route path="/signin"
            element={<Login
              onLogin={handleLogin}
            />}>
          </Route>
          <Route path="/"
            element={
              <>
                <Header isLoggedIn={isLoggedIn}/>
                <Main isLoggedIn={isLoggedIn} />
                <Footer />
              </>
            }>
          </Route>
          <Route path="/profile"
            element={
              <>
                <Header
                  isLoggedIn={isLoggedIn}
                />
                <Profile 
                  signOut={signOut}
                  onUpdateUser={handleUpdateUser}
                />
                <Footer />
              </> 
            }>
          </Route>
          <Route path="/constructor"
            element={
              <>
                <Header isLoggedIn={isLoggedIn}/>
                <Constructor />
                <Footer />
              </>
            }>
          </Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;