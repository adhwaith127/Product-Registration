import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/LoginPage.css'; 
import axios from "axios";
import {togglePassword} from '../assets/js/auth' 

export default function LoginPage() {
  
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate=useNavigate();

  const [username,setUsername]= useState('');
  const [password,setPassword]= useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername && !trimmedPassword){
      window.alert("Please fill out all the fields")
      return;
    }
    else if(!trimmedUsername){
      window.alert("Please enter a valid username")
      return;
    }
    else if(!trimmedPassword){
      window.alert("Please enter a valid password")
      setPassword('')
      return;
    }

  const login_data={"username":trimmedUsername,"password":trimmedPassword}

  const response = await axios.post(`${BASE_URL}/login/`,login_data)
  navigate('/dashboard')
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-card__header">
          <h2 className="login-card__title">Login</h2>
          <p className="login-card__subtitle">Sign in to continue</p>
        </div>

        <form className="login-form">
          {/* Username Field */}
          <div className="login-form__field">
            <input
              type="text"
              className="login-form__input"
              placeholder="Username"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              />
            <span className="login-form__icon">
              <i className="fas fa-user"></i>
            </span>
          </div>

          {/* Password Field */}
          <div className="login-form__field">
            <input
              type="password"
              className="login-form__input"
              placeholder="Password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <span className="login-form__icon" onClick={()=>togglePassword("password")}>
              <i className="fas fa-lock"></i>
            </span>
          </div>

          {/* Submit Button */}
          <div className="login-form__actions">
            <button onClick={handleSubmit} className="login-form__submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}