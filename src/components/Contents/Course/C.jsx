import React, { useState, useEffect } from 'react';
import {useLocation, useNavigate, Route, Routes, Link } from 'react-router-dom';
import './Styles/C.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import dashboard from '../Dashboard/HomeContent';
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
import { useTheme } from '../../../context/ThemeContext';

const C = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState('overview');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Update selected section when location changes
    const section = location.pathname.split('/c/')[1];
    setSelectedSection(section || 'overview');
  }, [location.pathname]);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const goToNextSection = () => {
    const sectionNames = [
      'overview',
      'introduction',
      'datatypes',
      'constants',
      'operators',
      'booleans',
      'variables',
      'syntax',
      'output',
      'comments',
      'ifelse',
      'switch',
      'whileloop',
      'forloop',
      'breakcontinue',
      'arrays',
      'strings',
      'pointers',
      'structure',
      'functions',
      // Add more sections as needed
    ];
    const currentIndex = sectionNames.indexOf(selectedSection);
    const nextIndex = currentIndex + 1 >= sectionNames.length ? 0 : currentIndex + 1;
    const nextSection = sectionNames[nextIndex];

    // Navigate to the next section
    navigate(`/courses/c/${nextSection}`);
  };

  const goToPrevSection = () => {
    const sectionNames = [
      'overview',
      'introduction',
      'datatypes',
      'constants',
      'operators',
      'booleans',
      'variables',
      'syntax',
      'output',
      'comments',
      'ifelse',
      'switch',
      'whileloop',
      'forloop',
      'breakcontinue',
      'arrays',
      'strings',
      'pointers',
      'structure',
      'functions',
    ];
    const currentIndex = sectionNames.indexOf(selectedSection);
    const prevIndex = currentIndex - 1 < 0 ? sectionNames.length - 1 : currentIndex - 1;
    const prevSection = sectionNames[prevIndex];

    navigate(`/courses/c/${prevSection}`);
  };

  return (
    <div className={`container`}>
      <div className="left-side">
        <nav className="navbar">
        <ul>
            <li>
              <Link to="/dashboard">Home</Link>
            </li>
            <li className={selectedSection === 'overview' ? 'active' : ''}>
              <Link to="/courses/c/overview" onClick={() => handleSectionChange('overview')}>
                C Programming Overview
              </Link>
            </li>
            <li className={selectedSection === 'introduction' ? 'active' : ''}>
              <Link to="/courses/c/introduction" onClick={() => handleSectionChange('introduction')}>
                Introduction to C
              </Link>
            </li>
            <li className={selectedSection === 'datatypes' ? 'active' : ''}>
              <Link to="/courses/c/datatypes" onClick={() => handleSectionChange('datatypes')}>
                Data Types
              </Link>
            </li>
            <li className={selectedSection === 'constants' ? 'active' : ''}>
              <Link to="/courses/c/constants" onClick={() => handleSectionChange('constants')}>
                Constants
              </Link>
            </li>
            <li className={selectedSection === 'operators' ? 'active' : ''}>
              <Link to="/courses/c/operators" onClick={() => handleSectionChange('operators')}>
                Operators
              </Link>
            </li>
            <li className={selectedSection === 'booleans' ? 'active' : ''}>
              <Link to="/courses/c/booleans" onClick={() => handleSectionChange('booleans')}>
                Booleans
              </Link>
            </li>
            <li className={selectedSection === 'variables' ? 'active' : ''}>
              <Link to="/courses/c/variables" onClick={() => handleSectionChange('variables')}>
                Variables
              </Link>
            </li>
            <li className={selectedSection === 'syntax' ? 'active' : ''}>
              <Link to="/courses/c/syntax" onClick={() => handleSectionChange('syntax')}>
                Syntax
              </Link>
            </li>
            <li className={selectedSection === 'output' ? 'active' : ''}>
              <Link to="/courses/c/output" onClick={() => handleSectionChange('output')}>
                Output
              </Link>
            </li>
            <li className={selectedSection === 'comments' ? 'active' : ''}>
              <Link to="/courses/c/comments" onClick={() => handleSectionChange('comments')}>
                Comments
              </Link>
            </li>
            <li className={selectedSection === 'ifelse' ? 'active' : ''}>
              <Link to="/courses/c/ifelse" onClick={() => handleSectionChange('ifelse')}>
                If...Else
              </Link>
            </li>
            <li className={selectedSection === 'switch' ? 'active' : ''}>
              <Link to="/courses/c/switch" onClick={() => handleSectionChange('switch')}>
                Switch
              </Link>
            </li>
            <li className={selectedSection === 'whileloop' ? 'active' : ''}>
              <Link to="/courses/c/whileloop" onClick={() => handleSectionChange('whileloop')}>
                While Loop
              </Link>
            </li>
            <li className={selectedSection === 'forloop' ? 'active' : ''}>
              <Link to="/courses/c/forloop" onClick={() => handleSectionChange('forloop')}>
                For Loop
              </Link>
            </li>
            <li className={selectedSection === 'breakcontinue' ? 'active' : ''}>
              <Link to="/courses/c/breakcontinue" onClick={() => handleSectionChange('breakcontinue')}>
                Break/Continue
              </Link>
            </li>
            <li className={selectedSection === 'arrays' ? 'active' : ''}>
              <Link to="/courses/c/arrays" onClick={() => handleSectionChange('arrays')}>
                Arrays
              </Link>
            </li>
            <li className={selectedSection === 'strings' ? 'active' : ''}>
              <Link to="/courses/c/strings" onClick={() => handleSectionChange('strings')}>
                Strings
              </Link>
            </li>
            <li className={selectedSection === 'pointers' ? 'active' : ''}>
              <Link to="/courses/c/pointers" onClick={() => handleSectionChange('pointers')}>
                Pointers
              </Link>
            </li>
            <li className={selectedSection === 'structure' ? 'active' : ''}>
              <Link to="/courses/c/structure" onClick={() => handleSectionChange('structure')}>
                Structure
              </Link>
            </li>
            <li className={selectedSection === 'functions' ? 'active' : ''}>
              <Link to="/courses/c/functions" onClick={() => handleSectionChange('functions')}>
                Functions
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right-side">
        <Routes>
          <Route path='/dashboard' component ={dashboard} />
          <Route path="/courses/c/overview" component={CProgrammingOverview} />
          <Route path="/courses/c/introduction" component={IntroductionToC} />
          <Route path="/courses/c/datatypes" component={DataTypes} />
          <Route path="/courses/c/constants" component={Constants} />
          <Route path="/courses/c/operators" component={Operators} />
          <Route path="/courses/c/booleans" component={Booleans} />
          <Route path="/courses/c/variables" component={Variables} />
          <Route path="/courses/c/syntax" component={Syntax} />
          <Route path="/courses/c/output" component={Output} />
          <Route path="/courses/c/comments" component={Comments} />
          <Route path="/courses/c/ifelse" component={IfElse} />
          <Route path="/courses/c/switch" component={SwitchComponent} />
          <Route path="/courses/c/whileloop" component={WhileLoop} />
          <Route path="/courses/c/forloop" component={ForLoop} />
          <Route path="/courses/c/breakcontinue" component={BreakContinue} />
          <Route path="/courses/c/arrays" component={Arrays} />
          <Route path="/courses/c/strings" component={Strings} />
          <Route path="/courses/c/pointers" component={Pointers} />
          <Route path="/courses/c/structure" component={Structure} />
          <Route path="/courses/c/functions" component={Functions} />
        </Routes>
        {/* Render content based on selected section */}
        {selectedSection === 'overview' && <CProgrammingOverview />}
        {selectedSection === 'introduction' && <IntroductionToC />}
        {selectedSection === 'datatypes' && <DataTypes />}
        {selectedSection === 'constants' && <Constants />}
        {selectedSection === 'operators' && <Operators />}
        {selectedSection === 'booleans' && <Booleans />}
        {selectedSection === 'variables' && <Variables />}
        {selectedSection === 'syntax' && <Syntax />}
        {selectedSection === 'output' && <Output />}
        {selectedSection === 'comments' && <Comments />}
        {selectedSection === 'ifelse' && <IfElse />}
        {selectedSection === 'switch' && <SwitchComponent />}
        {selectedSection === 'whileloop' && <WhileLoop />}
        {selectedSection === 'forloop' && <ForLoop />}
        {selectedSection === 'breakcontinue' && <BreakContinue />}
        {selectedSection === 'arrays' && <Arrays />}
        {selectedSection === 'strings' && <Strings />}
        {selectedSection === 'pointers' && <Pointers />}
        {selectedSection === 'structure' && <Structure />}
        {selectedSection === 'functions' && <Functions />}
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
