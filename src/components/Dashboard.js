// Dashboard.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faInfoCircle, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import HomeContent from './Contents/HomeContent';
import CoursesContent from './Contents/CourseContent';
import AboutContent from './Contents/AboutContent';
import ContactContent from './Contents/ContactContent';
import './css/Dashboard.css';

const Dashboard = () => {
  const { content } = useParams();
  const [selectedNavItem, setSelectedNavItem] = useState(content || 'home');
  const [user, setUser] = useState(null);
  const [navBarHidden, setNavBarHidden] = useState(false);

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

  return (
    <div>
      {user ? (
        <div className={`dashboard-container ${navBarHidden ? 'nav-hidden' : ''}`}>
          <button
            className="toggle-navbar-button"
            onClick={toggleNavBar}
            style={{ marginLeft: navBarHidden ? '0' : '200px', position: 'fixed', left: '20px', top: '20px' }}
          >
            {navBarHidden ? '☰' : null }
          </button>
          <nav className={`dashboard-nav ${navBarHidden ? 'hidden' : '' }`}>
            <ul>
            <li className="close-nav" onClick={toggleNavBar}>
                <FontAwesomeIcon icon={faTimes} />
              </li>
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
            </ul>
          </nav>
          <div className="dashboard-content">{renderContent()}</div>
        </div>
      ) : (
        <p>You are not authenticated. Please log in.</p>
      )}
    </div>
  );
};

export default Dashboard;
