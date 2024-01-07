import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contents/css/admin-login.css'

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    adminUsername: '',
    adminPassword: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Check if the user is already logged in, and redirect to admin dashboard
  useEffect(() => {
    const checkAdminSession = async () => {
      try {
        const response = await fetch('http://localhost:8000/check-admin-session.php', {
          method: 'POST',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();

          if (data.status === 'success') {
            navigate('/admin-dashboard');
          }
        } else {
          console.error('Failed to check admin session. HTTP Status:', response.status);
        }
      } catch (error) {
        console.error('Error while checking admin session:', error);
      }
    };

    checkAdminSession();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/admin-authentication.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
        credentials: 'include',  // Include credentials for cross-origin requests
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === 'success') {
          setMessage('Admin login successful.');
          navigate('/admin-dashboard');
        } else {
          setMessage(data.message || 'Invalid admin credentials.');
        }
      } else {
        setMessage('Failed to connect to the server. Please try again.');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className='admin-login-container'>
      <form className='admin-login-form' onSubmit={handleAdminLogin}>
        <h2 className='admin-login-title'>Admin Login</h2>
        {message && <p className='admin-login-message'>{message}</p>}
        <div>
          <label htmlFor='adminUsername'>Admin Username:</label>
          <input
            type='text'
            id='adminUsername'
            name='adminUsername'
            placeholder='Enter admin username'
            value={formData.adminUsername}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='adminPassword'>Admin Password:</label>
          <input
            type='password'
            id='adminPassword'
            name='adminPassword'
            placeholder='Enter admin password'
            value={formData.adminPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='admin-login-button'>
          <button type='submit'>Admin Login</button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
