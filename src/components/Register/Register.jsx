import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Register({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }
  
  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(name, email, password);
  }

  return (
    <div className='register'>
      <div className="register__container">
        
      </div>
    </div>
  );
}