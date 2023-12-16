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
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState('overview');
  const rightSideRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

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
