import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';

const Home = () => {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">E-Learning Website</h1>
      <p className="homepage-description">
        Welcome to our platform for online learning.
      </p>
      <div className="homepage-button">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
