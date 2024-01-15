import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../../context/ThemeContext';
import './Styles/JAVA.css'
import IntroductionToJava from './Java-Programming/IntroductionToJava';
import HistoryOfJava from './Java-Programming/HistoryOfJava';
import SettingUpJavaDevelopmentEnvironment from './Java-Programming/SettingUpJavaDevelopmentEnvironment';
import HelloWorldProgramInJava from './Java-Programming/HelloWorldProgramInJava';
import UnderstandingJavaVirtualMachine from './Java-Programming/UnderstandingJavaVirtualMachine';
import DataTypesInJava from './Java-Programming/DataTypesInJava';
import VariablesAndTheirDeclaration from './Java-Programming/VariablesAndTheirDeclaration';
import OperatorsInJava from './Java-Programming/OperatorsInJava';
import ExpressionsAndStatements from './Java-Programming/ExpressionsAndStatements';
import ControlFlowStatements from './Java-Programming/ControlFlowStatements';
import IfElse from './Java-Programming/IfStatement';
import Switch from './Java-Programming/SwitchStatement';
import WhileLoop from './Java-Programming/WhileLoop';
import ForLoop from './Java-Programming/ForLoop';
import ArraysInJava from './Java-Programming/ArraysInJava';
import StringsAndStringManipulation from './Java-Programming/StringsAndStringManipulation';
import IntroductionToMethodsFunctions from './Java-Programming/IntroductionToMethodsFunctions';
import ObjectOrientedProgrammingConcepts from './Java-Programming/ObjectOrientedProgrammingConcepts';
import ClassesAndObjectsInJava from './Java-Programming/ClassesAndObjectsInJava';
import InheritanceAndPolymorphism from './Java-Programming/InheritanceAndPolymorphism';
import EncapsulationAndAbstraction from './Java-Programming/EncapsulationAndAbstraction';
import InterfacesAndAbstractClasses from './Java-Programming/InterfacesAndAbstractClasses';
import ExceptionHandlingInJava from './Java-Programming/ExceptionHandlingInJava';
import FileHandlingInJava from './Java-Programming/FileHandlingInJava';
import IntroductionToJavaCollectionsFramework from './Java-Programming/IntroductionToJavaCollectionsFramework';
import ListsSetsAndMaps from './Java-Programming/ListsSetsAndMaps';
import IteratorsAndForeachLoop from './Java-Programming/IteratorsAndForeachLoop';
import SortingAndSearchingInCollections from './Java-Programming/SortingAndSearchingInCollections';

const Java = () => {
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
  const [selectedSection, setSelectedSection] = useState('introduction');
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
    'introduction',
    'history',
    'setup',
    'hello-world',
    'jvm',
    'datatypes',
    'variables',
    'operators',
    'expressions',
    'control-flow',
    'if-else',
    'switch',
    'while-loop',
    'for-loop',
    'arrays',
    'strings',
    'methods-functions',
    'oop-concepts',
    'classes-objects',
    'inheritance-polymorphism',
    'encapsulation-abstraction',
    'interfaces-abstract-classes',
    'exception-handling',
    'file-handling',
    'collections-framework',
    'lists-sets-maps',
    'iterators-foreach-loop',
    'sorting-searching',
  ];

  const currentSection = location.pathname.split('/java/')[1] || 'introduction';

  const goToNextSection = () => {
    const currentIndex = sections.indexOf(selectedSection);
    const nextIndex = currentIndex + 1 >= sections.length ? 0 : currentIndex + 1;
    const nextSection = sections[nextIndex];

    navigate(`/courses/java/${nextSection}`);
  };

  const goToPrevSection = () => {
    const currentIndex = sections.indexOf(selectedSection);
    const prevIndex = currentIndex - 1 < 0 ? sections.length - 1 : currentIndex - 1;
    const prevSection = sections[prevIndex];

    navigate(`/courses/java/${prevSection}`);
  };

  const JavaSection = ({ section }) => {
    useEffect(() => {
      // Handle initial section based on URL or default to 'introduction'
      const path = window.location.pathname.split('/java/')[1];
      setSelectedSection(path || 'introduction');
      if (rightSideRef.current) {
        rightSideRef.current.scrollTo({ top: 0,  behavior: 'smooth'});
      }
    }, [section]);
    switch (section) {
      case 'introduction':
        return <IntroductionToJava />;
      case 'history':
        return <HistoryOfJava />;
      case 'setup':
        return <SettingUpJavaDevelopmentEnvironment />;
      case 'hello-world':
        return <HelloWorldProgramInJava />;
      case 'jvm':
        return <UnderstandingJavaVirtualMachine />;
      case 'datatypes':
        return <DataTypesInJava />;
      case 'variables':
        return <VariablesAndTheirDeclaration />;
      case 'operators':
        return <OperatorsInJava />;
      case 'expressions':
        return <ExpressionsAndStatements />;
      case 'control-flow':
        return <ControlFlowStatements />;
      case 'if-else':
        return <IfElse />;
      case 'switch':
        return <Switch />;
      case 'while-loop':
        return <WhileLoop />;
      case 'for-loop':
        return <ForLoop />;
      case 'arrays':
        return <ArraysInJava />;
      case 'strings':
        return <StringsAndStringManipulation />;
      case 'methods-functions':
        return <IntroductionToMethodsFunctions />;
      case 'oop-concepts':
        return <ObjectOrientedProgrammingConcepts />;
      case 'classes-objects':
        return <ClassesAndObjectsInJava />;
      case 'inheritance-polymorphism':
        return <InheritanceAndPolymorphism />;
      case 'encapsulation-abstraction':
        return <EncapsulationAndAbstraction />;
      case 'interfaces-abstract-classes':
        return <InterfacesAndAbstractClasses />;
      case 'exception-handling':
        return <ExceptionHandlingInJava />;
      case 'file-handling':
        return <FileHandlingInJava />;
      case 'collections-framework':
        return <IntroductionToJavaCollectionsFramework />;
      case 'lists-sets-maps':
        return <ListsSetsAndMaps />;
      case 'iterators-foreach-loop':
        return <IteratorsAndForeachLoop />;
      case 'sorting-searching':
        return <SortingAndSearchingInCollections />;
      default:
        return null;
      
    }
  };
  
  return (
    <div className="Java-container">
      <div className="Java-left-side">
        <nav className="Java-navbar">
          <ul>
            <li>
              <Link to="/dashboard">Home</Link>
            </li>
            {sections.map((section) => (
              <li key={section} className={currentSection === section ? 'active' : ''}>
                <Link to={`/courses/java/${section}`} onClick={() => handleSectionChange(section)}>
                  {section.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="Java-right-side" ref={rightSideRef}>
        <h1 className='Title'>Java-Programming</h1>
      <Routes>
          {sections.map((section) => (
            <Route
              key={section}
              path={`/courses/java/${section}`}
              element={<JavaSection section={section} />}
            />
          ))}
        </Routes>
        {sections.map((section) => (
          selectedSection === section && <JavaSection key={section} section={section} />
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

        <div className="Java-bottom-buttons">
          <button onClick={goToPrevSection} className="prev-button">
            Prev
          </button>
          <button onClick={goToNextSection} className="next-button">
            Next
          </button>
        </div>
      </div>
      <div className="mode-switch" onClick={() => toggleTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))}>
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </div>
    </div>
  );
};


export default Java;
