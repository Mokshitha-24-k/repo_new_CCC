import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

import Layout from './Layout';
import Login from './Pages/Login';
import Signup from './Pages/Signup/Signup';
import DashBoardLayout from './DashBoard/DashBoardLayout';
import Home from './Pages/HomePage/Home';

function Routing() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonStyle = {
    position: 'fixed',
    top: 15,
    right: 120, 
    padding: '8px 16px',
    backgroundColor: theme === 'light' ? '#000' : '#fff',
    color: theme === 'light' ? '#fff' : '#000',
    zIndex: 1000,
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <Router>
     
      <button onClick={toggleTheme} style={buttonStyle}>
        {theme === 'light' ? '🌙 ' : '🌞 '}
      </button>

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/DashBoardLayout" element={<DashBoardLayout />} />
      </Routes>
    </Router>
  );
}

export default Routing;
