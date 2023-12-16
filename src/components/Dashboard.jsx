import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faInfoCircle, faEnvelope, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import HomeContent from './Contents/Dashboard/HomeContent';
import CoursesContent from './Contents/Dashboard/CourseContent';
import AboutContent from './Contents/Dashboard/AboutContent';
import ContactContent from './Contents/Dashboard/ContactContent';
import './Contents/css/Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [navBarHidden, setNavBarHidden] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    // Scroll to the top whenever the route changes
    window.scrollTo({top: 0,  behavior: 'smooth'});
  }, [location.pathname]);

  const toggleNavBar = () => {
    setNavBarHidden(!navBarHidden);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const handleLogin = () => {
    // Navigate to the login page
    navigate('/login');
  };

  return (
    <div>
      {user ? (
        <div className={`dashboard-container ${navBarHidden ? 'nav-hidden' : ''}`}>
          <button className="toggle-navbar-button" onClick={toggleNavBar}>
            {navBarHidden ? '☰' : '✕'}
          </button>
          <nav className={`dashboard-nav ${navBarHidden ? 'hidden' : ''}`}>
            <ul>
              <li onClick={() => navigate('/dashboard')}>
                <FontAwesomeIcon icon={faHome} /> Home
              </li>
              <li onClick={() => navigate('/dashboard/courses')}>
                <FontAwesomeIcon icon={faBook} /> Courses
              </li>
              <li onClick={() => navigate('/dashboard/about')}>
                <FontAwesomeIcon icon={faInfoCircle} /> About
              </li>
              <li onClick={() => navigate('/dashboard/contact')}>
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </li>
              <li onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOut} /> Logout
              </li>
            </ul>
          </nav>
          <div className="dashboard-content">
            <Routes>
              <Route path="home" element={<HomeContent />} />
              <Route path="courses" element={<CoursesContent />} />
              <Route path="about" element={<AboutContent />} />
              <Route path="contact" element={<ContactContent />} />
              <Route index element={<HomeContent />} />
            </Routes>
          </div>
          <div className="mode-switch" onClick={toggleTheme}>
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </div>
        </div>
      ) : (
        <div className="d-login-container">
          <p>You are not authenticated. Please log in.</p>
          <button className="d-login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
