import React, { useState } from "react";
import '../styles/SignupPage.css'
import axios from "axios";
import { togglePassword } from "../assets/js/auth";
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {

    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const [username,setUsername]=useState('')
    const [mailid,setMailid]=useState('')
    const [password,setPassword]=useState('')
    const [cpassword,setCpassword]=useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedUsername = username.trim();
        const trimmedMailID = mailid.trim();
        const trimmedPassword = password.trim();
        const trimmedCPassword = cpassword.trim();

        if(!trimmedUsername || !trimmedMailID || !trimmedPassword || !trimmedCPassword){
            window.alert("Please fill out all the fields !!!")
            return;
        }
        if(trimmedPassword !== trimmedCPassword){
            window.alert("Both passwords are not similar")
            return;
        }

        const signup_data={"username":trimmedUsername,"mailid":trimmedMailID,"password":trimmedPassword,"cpassword":trimmedCPassword}

        const response=axios.post(`${BASE_URL}/signup/`,signup_data)
    };

  return (
    <div className="signup-page">
      <div className="signup-card">

        <div className="signup-card__header">
          <h2 className="signup-card__title">Sign Up</h2>
          <p className="signup-card__subtitle">Create your account</p>
        </div>

        <div className="signup-form">
          {/* Username Field */}
          <div className="signup-form__field">
            <input
              type="text"
              className="signup-form__input"
              placeholder="Username"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              />
            <span className="signup-form__icon">
              <i className="fas fa-user"></i>
            </span>
          </div>

          {/* Email Field */}
          <div className="signup-form__field">
            <input
              type="email"
              className="signup-form__input"
              placeholder="Email Address"
              id="email"
              name="email"
              required
              value={mailid}
              onChange={(e)=>setMailid(e.target.value)}
              />
            <span className="signup-form__icon">
              <i className="fas fa-envelope"></i>
            </span>
          </div>

          {/* Password Field */}
          <div className="signup-form__field">
            <input
              type="password"
              className="signup-form__input"
              placeholder="Password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />
            <span className="signup-form__icon" onClick={()=>togglePassword("password")}>
              <i className="fas fa-lock"></i>
            </span>
          </div>

          {/* Confirm Password Field */}
          <div className="signup-form__field">
            <input
              type="password"
              className="signup-form__input"
              placeholder="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={cpassword}
              onChange={(e)=>setCpassword(e.target.value)}
            />
            <span className="signup-form__icon" onClick={()=>togglePassword("confirmPassword")}>
              <i className="fas fa-lock"></i>
            </span>
          </div>

          {/* Submit Button */}
          <div className="signup-form__actions">
            <button onClick={handleSubmit} className="signup-form__submit">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}