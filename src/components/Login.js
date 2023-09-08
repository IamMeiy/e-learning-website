import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login/authentication logic here
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
  };

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2 className='login-title'>Login</h2>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='login-button'>
          <button type="submit">Login</button>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
