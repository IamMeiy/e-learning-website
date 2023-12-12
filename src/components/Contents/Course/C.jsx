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
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState('overview');
  const { theme, toggleTheme } = useTheme();

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
    <div className="container">
      <div className="left-side">
        <nav className="navbar">
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
      <div className="right-side">
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

        <div className="bottom-buttons">
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
