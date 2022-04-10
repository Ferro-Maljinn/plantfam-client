import React from "react";

// -------------- NAVIGATION
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

// -------------- API
import axios from "axios";
import { API_URL } from "../config";

axios.defaults.withCredentials = true;
export default function CustomNavbar({ userIsLoggedIn, setUserIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogOut = async (event) => {
    await axios.post(`${API_URL}/logout`);
    setUserIsLoggedIn(false);
    navigate("/");
  };

  return (
      

      <div>
        {userIsLoggedIn ? (
          <>
            <Link to="/"> Home </Link>
            <Link to="/profile"> Profile </Link>
            <button onClick={handleLogOut} type="primary">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup"> Signup </Link>
            <Link to="/login"> Login </Link>
          </>
        )}
      </div> 
  );
}
