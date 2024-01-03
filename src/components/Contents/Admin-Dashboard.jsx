import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [isAdminLoggedIn, setAdminLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is already logged in
    const adminToken = document.cookie.replace(/(?:(?:^|.*;\s*)admin_token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (adminToken) {
        setAdminLoggedIn(true);
    }
}, []);

  const handleLogout = () => {
    // Logout logic
    localStorage.removeItem('admin');
    setAdminLoggedIn(false);
    navigate('/admin-login');
  };

  if (!isAdminLoggedIn) {
    navigate('/admin-login');
    return null;
  }

  return (
    <div>
      <h1>Welcome to the Admin Dashboard!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
