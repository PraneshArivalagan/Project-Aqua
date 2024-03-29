import React, { useState } from 'react';
import "./Loginsignup.css";
import email_icon from '../Assets/mail.png';
import password_icon from '../Assets/password.png';
import { useNavigate } from 'react-router-dom';

const Loginsignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email.includes('@') || password.length < 6 ) {
      setError('Invalid email or password');
    } else {
      setError('');
      // Proceed with the login logic here
      navigate("/Signedpage")
    }
  };
  const navigate= useNavigate();
  

  function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    }

  return (
    <div className="container">
      <div className="Header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="EmailId"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="show-password" onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'} Password
          </button>
        </div>
        {error && <div className="error">{error}</div>}
      </div>
      <div className="forgot-password">Forgot password? <span>Click here</span></div>
      <div className="submit-container">
        <div className="submit" onClick={handleLogin}>Login</div>
      </div>
    </div>
  );
}

export default Loginsignup;
