import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeContent = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from local storage when the component mounts
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    // Clear user information from local storage
    localStorage.removeItem('user');
    // Redirect to the home page or login page
    navigate('/');
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>You are not authenticated. Please log in.</p>
      )}
    </div>
  );
};

export default HomeContent;
