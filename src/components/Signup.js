import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Signup.css';

const Signup = () => {
  const initialFormData = {
    email: '',
    uname: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Validate mobile number input to allow only numbers and ensure it has exactly 10 digits
    if (name === 'mobile') {
      const numericValue = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
      const trimmedValue = numericValue.slice(0, 10); // Limit to 10 digits
      setFormData({
        ...formData,
        [name]: trimmedValue,
      });
      setRegistrationError('');
      if (numericValue.length < 10) {
        // Display an error message if the mobile number doesn't have 10 digits
        setRegistrationError('Mobile number must have exactly 10 digits.');
      } else {
        // Clear the error message if the mobile number is valid
        setRegistrationError('');
      }
      return;
    }
  
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    // Toggle the password visibility state
    setShowPassword(!showPassword);
  };
    

  async function handleSubmit(e) {
    e.preventDefault();

    // Password and confirmPassword validation
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/signup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === 'success') {
          setMessage('Signup successful. You can now log in.');
          navigate('/login'); // Use navigate to redirect to the login page
        } else if (data.status === 'error') {
          if (data.message === 'Both email and mobile number are already registered.') {
            setRegistrationError('Both email and mobile number are already registered.');
          } else if (data.message === 'Email is already registered.') {
            setRegistrationError('Email is already registered.');
          } else if (data.message === 'Mobile number is already registered.') {
            setRegistrationError('Mobile number is already registered.');
          } else {
            setMessage(data.message);
          }
        }
      } else {
        setMessage('Signup failed. Please try again.');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  }

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Sign Up</h2>
        <p>Fill out the following information to create your account:</p>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="uname">Name:</label>
          <input
            type="text"
            id="uname"
            name="uname"
            placeholder="Enter your name"
            value={formData.uname}
            onChange={handleInputChange}
            required
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={handleInputChange}
            required
            autoComplete="tel"
          />
          {/* {registrationError && <p className="signup-message">{registrationError}</p>} */}
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
            autoComplete="new-password"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Re-enter Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Re-enter your password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            autoComplete="new-password"
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
        {message && <p className="signup-message">{message}</p>}
        {registrationError && <p className="signup-message">{registrationError}</p>}
        <div className="signup-button">
          <button type="submit">Sign Up</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
