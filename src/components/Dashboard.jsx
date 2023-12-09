import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  const { content } = useParams();
  const [selectedNavItem, setSelectedNavItem] = useState(content || 'home');
  const [user, setUser] = useState(null);
  const [navBarHidden, setNavBarHidden] = useState(true);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleNavBar = () => {
    setNavBarHidden(!navBarHidden);
  };

  const renderContent = () => {
    switch (selectedNavItem) {
      case 'home':
        return <HomeContent />;
      case 'courses':
        return <CoursesContent />;
      case 'about':
        return <AboutContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return <HomeContent />;
    }
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
              <li onClick={() => setSelectedNavItem('home')}>
                <FontAwesomeIcon icon={faHome} /> Home
              </li>
              <li onClick={() => setSelectedNavItem('courses')}>
                <FontAwesomeIcon icon={faBook} /> Courses
              </li>
              <li onClick={() => setSelectedNavItem('about')}>
                <FontAwesomeIcon icon={faInfoCircle} /> About
              </li>
              <li onClick={() => setSelectedNavItem('contact')}>
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </li>
              <li onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOut} /> Logout
              </li>
            </ul>
          </nav>
          <div className="dashboard-content">{renderContent()}</div>
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
