import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Home.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated (you may use a different method for authentication)
    const isAuthenticated = localStorage.getItem('user') !== null;

    // If authenticated, navigate to the dashboard
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">E-Learning Website</h1>
      <p className="homepage-description">Welcome to our platform for online learning.</p>
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
