import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    adminUsername: '',
    adminPassword: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

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
      });

      if (response.ok) {
          const data = await response.json();
          if (data.status === 'success') {
              // Store the token in an HTTP-only cookie
              document.cookie = `admin_token=${data.token}; path=/; Secure; HttpOnly`;

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
