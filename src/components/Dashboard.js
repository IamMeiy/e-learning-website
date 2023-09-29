import React from 'react';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { email } = useParams();
  return (
    <div>
    <h2>Welcome, {email}!</h2>
  </div>
  );
};

export default Dashboard;
