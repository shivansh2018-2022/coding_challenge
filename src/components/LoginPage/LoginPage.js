// LoginPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../../Services/Actions/actions'; // Create this action

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      // Make an API request to send username and password
      const response = await fetch('https://tl4zomomo1.execute-api.ap-southeast-2.amazonaws.com/dev1/case-study-login'
      , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        
        // Update Redux state with authentication data
        dispatch(authenticateUser(data.authorizationCode, username));
        
        // Redirect to a protected route (e.g., dashboard)
        // You may use a library like react-router for routing.
      } else {
        // Handle login error (e.g., show an error message)
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
