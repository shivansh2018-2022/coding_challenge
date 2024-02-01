// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from './components/LoginPage/LoginPage';
import Dashboard from './components/dashboard/Dashboard';
import ReportPage from '../src/components/report/report'; // Import your Report page component
import store from '../src/Services/store'; // Import your Redux store

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/Dashboard" /> : <Navigate to="/Login" />} />
          {/* Route for the Login page */}
          <Route path="/Login" element={isAuthenticated ? <Navigate to="/Dashboard" /> : <LoginPage />} />

          {/* Route for the Dashboard */}
          <Route path="/Dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/Login" />} />

          {/* Route for the Report page */}
          <Route path="/Report" element={isAuthenticated ? <ReportPage /> : <Navigate to="/Login" />} />

          {/* Default route (navigate to Login if no matching route) */}
          <Route path="*" element={<Navigate to="/Login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
