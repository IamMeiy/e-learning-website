import React,{useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import C from '../Course/C';
import Java from '../Course/Java';
import Python from '../Course/Python';

const CourseRoute = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user details from local storage when the component mounts
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
        setUser(JSON.parse(storedUser));
        }
    }, []);
    return(
        <div>
        {user ? (
            <Routes>
                <Route path="c/*" element={<C />} />
                <Route path="java/*" element={<Java />} />
                <Route path="python/*" element={<Python />} />
            </Routes>
        ) : (
          <p>You are not authenticated. Please log in.</p>
        )}
      </div>
    );
};

export default CourseRoute;