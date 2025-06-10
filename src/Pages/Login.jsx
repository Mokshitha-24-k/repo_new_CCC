import React, { useState } from "react";
import "./Login.css";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

const togglePassword = () => {
  setShowPassword((prev) => prev);
};
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) =>
        user.username === username && user.password === password
    );

    if (matchedUser) {
      alert("Login successful!");
     
      navigate('/Layout');
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="image">
          <img src="/loginImg.jpg" alt="Login Visual" />
        </div>

        <div className="login-main">
          <h2>Log in</h2>

          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
         <div className="password-input-wrapper">
         <input
         type={showPassword ? "text" : "password"}
         placeholder="Password"
         className="login-input"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
        <span className="eye-icon" onClick={togglePassword}>
        {showPassword ? <FaEye /> : <FaEyeSlash />}
        </span>
        </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>

          <button className="login-button" onClick={handleLogin}>Log in</button>

          <Link className="create-account" to="/Signup">Create an account</Link>

          <p>Or login with:</p>
          <div className="social-buttons">
            <a className="google-btn" href="https://www.google.com/" target='_blank' rel="noopener noreferrer">
              <FcGoogle size={25} />
            </a>
            <a className="linkedin-btn" href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer" >
              <FaLinkedin size={25} color="#0077B5" />
            </a>
            <a button className="github-btn" href="https://github.com/login" target="_blank" rel="noopener noreferrer" >
              <FaGithub size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
