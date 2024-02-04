import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../Services/Actions/actions";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      // Make an API request to send username and password
      const response = await fetch(
        "https://tl4zomomo1.execute-api.ap-southeast-2.amazonaws.com/dev1/case-study-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        dispatch(authenticateUser(data.authorizationCode, username));
      } else {
        setLoginError("Wrong password or username");

        window.alert("Wrong username or password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="card">
      {" "}
      <h2 className="heading">Login</h2>
      {loginError && <div className="error-message">{loginError}</div>}{" "}
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
        <button className="loginbutton" type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
