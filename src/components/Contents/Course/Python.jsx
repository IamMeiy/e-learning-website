import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../../context/ThemeContext';
import './Styles/Python.css';
import PythonOverview from './Python-Programming/PythonOverview';
import IntroductionToPython from './Python-Programming/IntroductionToPython';
import VariablesAndDataTypes from './Python-Programming/VariablesAndDataTypes';
import OperatorsInPython from './Python-Programming/OperatorsInPython';
import ControlFlowStatementsPython from './Python-Programming/ControlFlowStatementsPython';
import FunctionsInPython from './Python-Programming/FunctionsInPython';
import ListsInPython from './Python-Programming/ListsInPython';
import DictionariesInPython from './Python-Programming/DictionariesInPython';
import TuplesAndSetsInPython from './Python-Programming/TuplesAndSetsInPython';
import FileHandlingInPython from './Python-Programming/FileHandlingInPython';
import ErrorHandlingInPython from './Python-Programming/ErrorHandlingInPython';
import ObjectOrientedPython from './Python-Programming/ObjectOrientedPython';
import RegularExpressionsInPython from './Python-Programming/RegularExpressionsInPython';

const Python = () => {
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
  const rightSideRef = useRef(null);
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
      const response = await fetch('http://luffify.infinityfreeapp.com/authentication.php', {
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
    'overview', 'introduction', 'variables-data-types', 'operators', 
    'control-flow', 'functions', 'lists', 'dictionaries', 'tuples-sets', 
    'file-handling', 'error-handling', 'object-oriented-python', 
    'regular-expressions'
  ];

  const currentSection = location.pathname.split('/python/')[1] || 'overview';

  const goToNextSection = () => {
    const currentIndex = sections.indexOf(selectedSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    const nextSection = sections[nextIndex];
    navigate(`/courses/python/${nextSection}`);
  };

  const goToPrevSection = () => {
    const currentIndex = sections.indexOf(selectedSection);
    const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
    const prevSection = sections[prevIndex];
    navigate(`/courses/python/${prevSection}`);
  };

  const PythonSection = ({ section }) => {
    useEffect(() => {
      // Handle initial section based on URL or default to 'overview'
      const path = window.location.pathname.split('/python/')[1];
      setSelectedSection(path || 'overview');
      if (rightSideRef.current) {
        rightSideRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, [section]);

    switch (section) {
      case 'overview':
        return <PythonOverview />;
      case 'introduction':
        return <IntroductionToPython />;
      case 'variables-data-types':
        return <VariablesAndDataTypes />;
      case 'operators':
        return <OperatorsInPython />;
      case 'control-flow':
        return <ControlFlowStatementsPython />;
      case 'functions':
        return <FunctionsInPython />;
      case 'lists':
        return <ListsInPython />;
      case 'dictionaries':
        return <DictionariesInPython />;
      case 'tuples-sets':
        return <TuplesAndSetsInPython />;
      case 'file-handling':
        return <FileHandlingInPython />;
      case 'error-handling':
        return <ErrorHandlingInPython />;
      case 'object-oriented-python':
        return <ObjectOrientedPython />;
      case 'regular-expressions':
        return <RegularExpressionsInPython />;
      default:
        return null;
    }
  };

  return (
    <div className="Python-container">
      <div className="Python-left-side">
        <nav className="Python-navbar">
          <ul>
            <li>
              <Link to="/dashboard">Home</Link>
            </li>
            {sections.map(section => (
              <li key={section} className={currentSection === section ? 'active' : ''}>
                <Link to={`/courses/python/${section}`} onClick={() => handleSectionChange(section)}>
                  {section.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="Python-right-side" ref={rightSideRef}>
        <h1 className='Title'>Python-Programming</h1>
        <Routes>
          {sections.map(section => (
            <Route
              key={section}
              path={`/courses/python/${section}`}
              element={<PythonSection section={section} />}
            />
          ))}
        </Routes>
        {sections.map(section => (
          selectedSection === section && <PythonSection key={section} section={section} />
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

        <div className="Python-bottom-buttons">
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

export default Python;
