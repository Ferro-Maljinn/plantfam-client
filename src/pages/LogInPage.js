import React from "react";
import "./LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { API_URL } from "../config";

const defaultFormState = {
  name: "",
  password: "",
};

export default function LogInPage({ setLoggedIn }) {
  const navigate = useNavigate();

  const [logInState, setLoginState] = useState(defaultFormState);
  const [error, setError] = useState(null);

  const handleLoginInput = (event) => {
    setLoginState({ ...logInState, [event.target.name]: event.target.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const user = await axios.post(`${API_URL}/login`, logInState, {
        withCredentials: true,
      });
      setLoginState(defaultFormState);
      user && setLoggedIn(true);
      navigate("/");
    } catch (err) {
      setError("Username or password wrong, please try again");
    }
  };

  return (
    <div>
      <div className="title">
        <h2>Log In</h2>
      </div>

      <div className="form-and-image-container-row">
        <form className="form-container">
          <div className="input-container">
            <label>Username:</label>
            <input
              name="name"
              type="text"
              value={logInState.name}
              onChange={handleLoginInput}
            />
          </div>

          <div className="input-container">
            <label>Password:</label>
            <input
              name="password"
              type="password"
              value={logInState.password}
              onChange={handleLoginInput}
            />
          </div>

          <div className="input-container-row">
            <label for="remember">Remeber me</label>

            <input
              className="remember"
              type="checkbox"
              id="remember"
              name="remember"
              checked
            />
          </div>

          {error && <h5 className="error">{error}</h5>}

          <button
            className="add-plant-btn"
            onClick={handleLogin}
            type="primary"
            htmlType="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
