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

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const user = {
    name: 'Pavel',
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile", {replace: true});
    }
  }, []);

  useEffect(() => {
    setCurrentUser(user);
    // if (isLoggedIn) {
    //   Promise.all([ mainApi.getUserInfo(), mainApi.getSaveMovies() ])
    //     .then(([user, movies]) => {
    //       setCurrentUser(user);
    //       setSaveMovies(movies);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    //   }
  }, [isLoggedIn]);

  // const handleRegister = () => {

  // }

  // const handleLogin = () => {

  // }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Routes>
          <Route path="/signup"
            element={<Register
              // onRegister={handleRegister}
            />}>
          </Route>
          <Route path="/signin"
            element={<Login
              // onRegister={handleRegister}
            />}>
          </Route>
          {/* <Route path="/signup"
            element={isLoggedIn
            ? <Navigate to="/" replace />
            : 
            <Register
              // onRegister={handleRegister}
            />}>
          </Route> */}
          {/* <Route path="/signin"
            element={isLoggedIn
            ? <Navigate to="/" replace />
            : <Login
              // onLogin={handleLogin}
            />}>
          </Route> */}
          <Route path="/"
            element={
              <>
                <Header isLoggedIn={isLoggedIn}/>
                <Main />
                <Footer />
              </>
            }>
          </Route>
          <Route path="/profile"
            element={
              <>
                <Header isLoggedIn={isLoggedIn}/>
                <Profile />
                <Footer />
              </> 
            }>
          </Route>
          {/* <Route path="/constructor"
            element={
              <>
                <Header isLoggedIn={isLoggedIn}/>
                <Constructor />
                <Footer />
              </>
            }>
          </Route> */}
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;