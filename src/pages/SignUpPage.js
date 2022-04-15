import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { API_URL } from "../config";

const defaultFormState = {
  name: "",
  email: "",
  password: "",
};

export default function SignUpForm({ setUser, setLoggedIn }) {
  const navigate = useNavigate();

  const [formState, setFormState] = useState(defaultFormState);

  const handleFormInput = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      let user = await axios.post(`${API_URL}/signup`, formState, {
        withCredentials: true,
      });
      setFormState(defaultFormState);

      setUser(user);
      setLoggedIn(true);
      navigate("/");
    } catch (err) {
      console.log(err.message);
      //display an error to the user here
    }
  };

  return (
    <div>
      <div className="title">
        <h2>Sign Up</h2>
      </div>

      <div className="form-and-image-container-row">
        <form className="form-container">
          <div className="input-container">
            <label>Username:</label>
            <input
              name="name"
              type="text"
              value={formState.name}
              onChange={handleFormInput}
              // TODO rules={[{ required: true, message: "Please input your username!" }]}
            />
          </div>

          <div className="input-container">
            <label>Email:</label>
            <input
              name="email"
              type="email"
              value={formState.email}
              onChange={handleFormInput}
            />
          </div>

          <div className="input-container">
            <label>Password:</label>
            <input
              name="password"
              value={formState.password}
              onChange={handleFormInput}
              type="password"
              // TODO rules={[{ required: true, message: "Please input your password!" }]}
            />
          </div>

          <button
            className="add-plant-btn"
            onClick={handleSignUp}
            type="primary"
            htmlType="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
