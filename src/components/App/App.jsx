import './App.css';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Constructor from '../Constructor/Constructor';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile", {replace: true});
    }
  }, []);

  // const handleRegister = () => {

  // }

  // const handleLogin = () => {

  // }

  return (
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
        <Route path="/main"
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
  );
}

export default App;