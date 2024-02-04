import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./components/LoginPage/LoginPage";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/Dashboard" />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />
          <Route
            path="/Login"
            element={
              isAuthenticated ? <Navigate to="/Dashboard" /> : <LoginPage />
            }
          />
          <Route
            path="/Dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/Login" />}
          />
          <Route path="*" element={<Navigate to="/Login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
