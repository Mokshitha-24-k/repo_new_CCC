import React, { useState } from 'react';
import "./Signup.css";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (!/^[a-zA-Z_]+$/.test(formData.username)) {
      newErrors.username = "Only letters and underscores allowed";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    const password = formData.password;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const upperCaseRegex = /[A-Z]/;

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 4 || password.length > 9) {
      newErrors.password = "Password must be 4 to 9 characters long";
    } else if (!upperCaseRegex.test(password)) {
      newErrors.password = "Include at least one uppercase letter";
    } else if (!specialCharRegex.test(password)) {
      newErrors.password = "Include at least one special character";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      const userExists = existingUsers.some(
        (user) => user.email === formData.email
      );

      if (userExists) {
        alert("User already exists with this email.");
      } else {
        const updatedUsers = [...existingUsers, formData];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        alert("Signup successful!");
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      }
    }
  };
  

  return (
    <form className="signup-container" onSubmit={handleSubmit}>
      <div className="signup-card">
        <div className="signup-main">
          <h2> Sign Up </h2>
        </div>

        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="signup-input"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error-text">{errors.username}</p>}

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="signup-input"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Enter a Password"
            className="signup-input"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="signup-input"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error-text">{errors.confirmPassword}</p>
          )}

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </div>

        <p>
          <Link className="LinktoLogin" to="/Login">
            Already have an account?
          </Link>
        </p>
        <p>Or Sign Up with :</p>

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
    </form>
  );
};

export default Signup;
