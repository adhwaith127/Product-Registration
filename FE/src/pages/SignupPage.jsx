import React from "react";
import '../styles/SignupPage.css'


export default function SignupPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup submitted");
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
            />
            <span className="signup-form__icon">
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
            />
            <span className="signup-form__icon">
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