import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/admin-dashboard.css';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const AdminDashboard = () => {
  const [isAdminLoggedIn, setAdminLoggedIn] = useState(false);
  const [adminData, setAdminData] = useState(null);
  const [userDetails, setUserDetails] = useState([]);
  const [doubtList, setDoubtList] = useState([]);
  const [activeTab, setActiveTab] = useState('userDetails');
  const [updateMessage, setUpdateMessage] = useState('');
  const [currentFilterStatus, setCurrentFilterStatus] = useState('All');
  const [filteredDoubtList, setFilteredDoubtList] = useState([]);
  const navigate = useNavigate();

  const refreshData = async () => {
    await fetchUserDetails();
    await fetchDoubtList();
    applyFilter(currentFilterStatus);
  };

  useInterval(() => {
    refreshData();
  }, 1000);

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
            setAdminLoggedIn(true);
            setAdminData({
              adminId: data.adminId,
              adminUsername: data.adminUsername,
            });
            fetchUserDetails();
            fetchDoubtList();
          } else {
            setAdminLoggedIn(false);
            if (!isAdminLoggedIn) {
              localStorage.removeItem('adminSessionId');
              navigate('/admin-login');
            }
          }
        } else {
          console.error('Failed to check admin session. HTTP Status:', response.status);
        }
      } catch (error) {
        console.error('Error while checking admin session:', error);
      }
    };

    checkAdminSession();
  }, [isAdminLoggedIn, navigate]);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8000/admin-logout.php', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();

        if (data.status === 'success') {
          setAdminLoggedIn(false);
          localStorage.removeItem('adminSessionId');
          navigate('/admin-login');
        } else {
          console.error('Failed to logout:', data.message);
        }
      } else {
        console.error('Failed to logout. HTTP Status:', response.status);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleStatusChange = async (doubtId, newStatus) => {
    try {
      const response = await fetch('http://localhost:8000/update-doubt-status.php', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          doubtId,
          newStatus,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.status === 'success') {
          setDoubtList((prevDoubtList) =>
            prevDoubtList.map((doubt) =>
              doubt.id === doubtId ? { ...doubt, status: newStatus } : doubt
            )
          );

          // Update the filtered list as well
          setFilteredDoubtList((prevFilteredDoubtList) =>
            prevFilteredDoubtList.map((doubt) =>
              doubt.id === doubtId ? { ...doubt, status: newStatus } : doubt
            )
          );

          setUpdateMessage('Status updated successfully.');

          setTimeout(() => {
            setUpdateMessage('');
          }, 3000);
        } else {
          console.error('Failed to update doubt status:', data.message);
        }
      } else {
        console.error('Failed to update doubt status. HTTP Status:', response.status);
      }
    } catch (error) {
      console.error('Error during doubt status update:', error);
    }
  };

  const fetchUserDetails = async () => {
    try {
      const response = await fetch('http://localhost:8000/get-user-details.php', {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
      });

      if (response.ok) {
        const data = await response.json();
        setUserDetails(data.userDetails);
      } else {
        console.error('Failed to fetch user details. HTTP Status:', response.status);
      }
    } catch (error) {
      console.error('Error while fetching user details:', error);
    }
  };

  const fetchDoubtList = async () => {
    try {
      const response = await fetch('http://localhost:8000/get-doubt-list.php', {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
      });

      if (response.ok) {
        const data = await response.json();
        setDoubtList(data.doubtList);
        setFilteredDoubtList(data.doubtList);
      } else {
        console.error('Failed to fetch doubt list. HTTP Status:', response.status);
      }
    } catch (error) {
      console.error('Error while fetching doubt list:', error);
    }
  };

  

  const applyFilter = () => {
    if (currentFilterStatus === 'All') {
      setFilteredDoubtList(doubtList);
    } else {
      const filtered = doubtList.filter((doubt) => doubt.status === currentFilterStatus);
      setFilteredDoubtList(filtered);
    }
  };


  return (
    <div className='admin-dashboard-container'>
      <div className="admin-header">
        <h1 className='admin-dashboard-header'>Welcome, {adminData?.adminUsername}!</h1>
        <button onClick={handleLogout} className="admin-logout-button">
          Logout
        </button>
      </div>
      <div className="admin-tabs">
        <button onClick={() => setActiveTab('userDetails')}>User Details</button>
        <button onClick={() => setActiveTab('doubtList')}>Doubt List</button>
      </div>
      {activeTab === 'userDetails' && (
        <div id="userDetailsTable">
          <h2>User Details</h2>
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              {userDetails.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'doubtList' && (
        <div id="doubtListTable">
          <h2>Doubt List</h2>
          <div className="filter-section">
            <label>Filter by Status:</label>
            <select
              value={currentFilterStatus}
              onChange={(e) => setCurrentFilterStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Resolved">Resolved</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          {updateMessage && (
              <div className="update-message">
                {updateMessage}
              </div>
            )}
          <table>
            <thead>
              <tr>
                <th>Doubt ID</th>
                <th>User ID</th>
                <th>User Email</th>
                <th>Course Name</th>
                <th>Topic</th>
                <th>Description</th>
                <th>Status</th>
                <th>Submitted Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDoubtList.map((doubt) => (
                <tr key={doubt.id}>
                  <td>{doubt.id}</td>
                  <td>{doubt.user_id}</td>
                  <td>{doubt.user_email}</td>
                  <td>{doubt.course_name}</td>
                  <td>{doubt.topic}</td>
                  <td>{doubt.description}</td>
                  <td>{doubt.status}</td>
                  <td>{doubt.submitted_date}</td>
                  <td>
                      <div>
                        <select value={doubt.status} onChange={(e) => handleStatusChange(doubt.id, e.target.value)}>
                          <option value="Pending">Pending</option>
                          <option value="Resolved">Resolved</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;