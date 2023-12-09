import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CoursesContent.css';

const CoursesContent = () => {
  return (
    <div className="courses-content">
      <h2>Courses Offered</h2>
      <div className="course-links">
        <Link to="/courses/c" className="course-link">
          <div className="course-box">
            <span>C Programming</span>
          </div>
        </Link>
        <Link to="/courses/java" className="course-link">
          <div className="course-box">
            <span>Java Programming</span>
          </div>
        </Link>
        <Link to="/courses/python" className="course-link">
          <div className="course-box">
            <span>Python Programming</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CoursesContent;
