import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../../context/ThemeContext';
import './Styles/C.css';
import CProgrammingOverview from './C-Programming/CProgrammingOverview';
import IntroductionToC from './C-Programming/IntroductionToC';
import DataTypes from './C-Programming/DataTypes';
import Constants from './C-Programming/Constants';
import Operators from './C-Programming/Operators';
import Booleans from './C-Programming/Booleans';
import Variables from './C-Programming/Variables';
import Syntax from './C-Programming/Syntax';
import Output from './C-Programming/Output';
import Comments from './C-Programming/Comments';
import IfElse from './C-Programming/IfElse';
import SwitchComponent from './C-Programming/Switch';
import WhileLoop from './C-Programming/WhileLoop';
import ForLoop from './C-Programming/ForLoop';
import BreakContinue from './C-Programming/BreakContinue';
import Arrays from './C-Programming/Arrays';
import Strings from './C-Programming/Strings';
import Pointers from './C-Programming/Pointers';
import Structure from './C-Programming/Structure';
import Functions from './C-Programming/Functions';

const C = () => {
  const [showDoubtForm, setShowDoubtForm] = useState(false);
  const [user,setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [doubtSubmitMessage, setDoubtSubmitMessage] = useState({
    message: '',
    type: '', // 'success' or 'error'
  });
  const [formData, setFormData] = useState({
    id: '',
    email: '',
    courseName: '',
    topic: '',
    description: '',
    password: '',
    submitDoubt : true,
  });
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState('overview');
  const { theme, toggleTheme } = useTheme();

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleDoubtButtonClick = () => {
    setShowDoubtForm(true);
    const titleElement = document.querySelector('.heading');
    const courseNameElement = document.querySelector('.Title');

    const titleValue = titleElement ? titleElement.textContent : '';
    const courseNameValue = courseNameElement ? courseNameElement.textContent : '';

    setFormData({
      id: user ? user.id : '',
      email: user ? user.email : '',
      courseName: courseNameValue,
      topic: titleValue,
      description: '',
      password: '',
      submitDoubt: true,
    });
  };

  const handleTogglePassword = () => {
    // Toggle the password visibility state
    setShowPassword(!showPassword);
  };

  const handleCloseDoubtForm = () => {
    setShowDoubtForm(false);

    setFormData({
      id : '',
      email: '',
      courseName: '',
      topic: '',
      description: '',
      password: '',
    });
  };

  const handleDoubtSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.trim() === '') {
      setDoubtSubmitMessage('Password cannot be empty.');
      return;
    }
    try {
      const response = await fetch('http://localhost:8000/authentication.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });
  
      if (response.ok) {
        const result = await response.json();
        if (result.status === 'success') {
          setDoubtSubmitMessage({
            message: result.message,
            type: 'success',
        });
        // Set a timeout to clear the message after 3 seconds
        setTimeout(() => {
          setDoubtSubmitMessage({
            message: '',
            type: '',
          });
          // Close the doubt form
          setShowDoubtForm(false);
        }, 3000);
      }else{
        setDoubtSubmitMessage({
          message: 'Incorrect password. Please try again.',
          type: 'error',
        });
      }
      } else {
        setDoubtSubmitMessage({
          message: 'Failed to submit doubt',
          type: 'error',
        });
      }
  
    } catch (error) {
      setDoubtSubmitMessage({
        message: `Error: ${error.message}`,
        type: 'error',
      });
    }
  };

  useEffect(() => {
    // Close the doubtSubmitMessage after 3 seconds
    if (doubtSubmitMessage) {
      const timer = setTimeout(() => {
        setDoubtSubmitMessage('');
      }, 3000);

      return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }
  }, [doubtSubmitMessage]);

  
  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const sections = [
    'overview', 'introduction', 'datatypes', 'constants', 'operators',
    'booleans', 'variables', 'syntax', 'output', 'comments', 'ifelse',
    'switch', 'whileloop', 'forloop', 'breakcontinue', 'arrays', 'strings',
    'pointers', 'structure', 'functions'
  ];

  const currentSection = location.pathname.split('/c/')[1] || 'overview';

  const goToNextSection = () => {
    const currentIndex = sections.indexOf(selectedSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    const nextSection = sections[nextIndex];
    navigate(`/courses/c/${nextSection}`);
  };

  const goToPrevSection = () => {
    const currentIndex = sections.indexOf(selectedSection);
    const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
    const prevSection = sections[prevIndex];
    navigate(`/courses/c/${prevSection}`);
  };

  const CSection = ({ section }) => {
    useEffect(() => {
      // Handle initial section based on URL or default to 'overview'
      const path = window.location.pathname.split('/c/')[1];
      setSelectedSection(path || 'overview');
    }, [section]);

    switch (section) {
      case 'overview':
        return <CProgrammingOverview />;
      case 'introduction':
        return <IntroductionToC />;
      case 'datatypes':
        return <DataTypes />;
      case 'constants':
        return <Constants />;
      case 'operators':
        return <Operators />;
      case 'booleans':
        return <Booleans />;
      case 'variables':
        return <Variables />;
      case 'syntax':
        return <Syntax />;
      case 'output':
        return <Output />;
      case 'comments':
        return <Comments />;
      case 'ifelse':
        return <IfElse />;
      case 'switch':
        return <SwitchComponent />;
      case 'whileloop':
        return <WhileLoop />;
      case 'forloop':
        return <ForLoop />;
      case 'breakcontinue':
        return <BreakContinue />;
      case 'arrays':
        return <Arrays />;
      case 'strings':
        return <Strings />;
      case 'pointers':
        return <Pointers />;
      case 'structure':
        return <Structure />;
      case 'functions':
        return <Functions />;
      default:
        return null;
    }
  };

  return (
    <div className="C-container">
      <div className="C-left-side">
        <nav className="C-navbar">
          <ul>
            <li>
              <Link to="/dashboard">Home</Link>
            </li>
            {sections.map(section => (
              <li key={section} className={currentSection === section ? 'active' : ''}>
                <Link to={`/courses/c/${section}`} onClick={() => handleSectionChange(section)}>
                  {section.replace(/([A-Z])/g, ' $1').trim()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="C-right-side">
        <h1 className='Title'>C-Programming</h1>
        <Routes>
          {sections.map(section => (
            <Route
              key={section}
              path={`/courses/c/${section}`}
              element={<CSection section={section} />}
            />
          ))}
        </Routes>
        {sections.map(section => (
          selectedSection === section && <CSection key={section} section={section} />
        ))}
        <div className='doubt-button'>
        <button onClick={handleDoubtButtonClick} className="doubt-button">
          Doubt
        </button>

        {/* Doubt Form */}
        {showDoubtForm && (
          <div className="doubt-form-container">
            <div className="doubt-form">
              <h2>Doubt Submission Form</h2>
              <label htmlFor="courseName">Course Name:</label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                value={formData.courseName}
                onChange={handleInputChange}
              />

              <label htmlFor="topic">Topic:</label>
              <input
                type="text"
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
              />

              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
              <label htmlFor="password">Password:</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
                <div className="form-group">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={handleTogglePassword}
                  id="showPasswordCheckbox"
                />
                <label htmlFor="showPasswordCheckbox">Show Password</label>
              </div>
              {doubtSubmitMessage.message && (
              <div
                className={`doubt-submit-message ${doubtSubmitMessage.type}`}
              >
                {doubtSubmitMessage.message}
              </div>
            )}
              <div className="doubt-form-buttons">
                <button onClick={handleDoubtSubmit}>Submit Doubt</button>
                <button onClick={handleCloseDoubtForm}>Close</button>
              </div>
            </div>
          </div>
        )}

        </div>
        <div className="C-bottom-buttons">
          <button onClick={goToPrevSection} className={`prev-button`}>
            Prev
          </button>
          <button onClick={goToNextSection} className={`next-button`}>
            Next
          </button>
        </div>
      </div>
      <div className="mode-switch" onClick={toggleTheme}>
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </div>
    </div>
  );
};

export default C;