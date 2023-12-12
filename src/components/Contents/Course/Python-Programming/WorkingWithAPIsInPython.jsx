import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Python.css';

const WorkingWithAPIsInPython = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch user data from a sample API
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        setUserData(response.data);
      } catch (err) {
        setError('Error fetching user data');
      }
    };

    // Call the function
    fetchUserData();
  }, []);

  return (
    <div className="section">
      <h2 className="heading">Working with APIs in Python</h2>

      {error && <p className="error">{error}</p>}

      {userData && (
        <div>
          <h3 className="subheading">User Information</h3>
          <p className="paragraph">
            Name: {userData.name}<br />
            Email: {userData.email}<br />
            Phone: {userData.phone}
          </p>
        </div>
      )}
    </div>
  );
};

export default WorkingWithAPIsInPython;
