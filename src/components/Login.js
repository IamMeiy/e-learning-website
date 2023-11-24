import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    login: true,
  });
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Clear the message after 3 seconds
    const timer = setTimeout(() => {
      setMessage('');
    }, 3000);

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts
    };
  }, [message]);

  const handleTogglePassword = () => {
    // Toggle the password visibility state
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8000/authentication.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data.status === 'success') {
          // Save user information in local storage to stay logged in
          localStorage.setItem('user', JSON.stringify({ id: data.user_id, email: formData.email, name: data.user_name}));
          setMessage('Login successful.');
          navigate('/dashboard');
        } else {
          setMessage(data.message);
        }
      } else {
        setMessage('Login failed. Please try again.');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2 className='login-title'>Login</h2>
        {message && <p className='login-message'>{message}</p>}
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleInputChange}
            required
            autoComplete='new-email'
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="show-password-checkbox">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={handleTogglePassword}
            id="showPasswordCheckbox"
          />
          <label htmlFor="showPasswordCheckbox">Show Password</label>
        </div>
        <div className='login-button'>
          <button type='submit'>Login</button>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;