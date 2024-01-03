import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Admin from './components/AdminLogin'
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import CoursesRoute from './components/Contents/Dashboard/CourseRoute'; // Updated import
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import AdminDashboard from './components/Contents/Admin-Dashboard';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<Admin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/courses/*" element={<CoursesRoute />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
