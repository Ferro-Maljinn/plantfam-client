import React from "react";

// -------------- NAVIGATION
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Input } from 'antd';

// -------------- API
import axios from "axios";
import { API_URL } from "../config";

axios.defaults.withCredentials = true;

export default function CustomNavbar({ userIsLoggedIn, setUserIsLoggedIn, search, setSearch }) {
  const navigate = useNavigate();

  const handleLogOut = async (event) => {
    await axios.post(`${API_URL}/logout`);
    setUserIsLoggedIn(false);
    navigate("/");
  };

  const handleSearch = (event) => {
    setSearch(event.target.value)
    console.log(event.target.value, "event target value search")
  }


  return (
    <div>
      {userIsLoggedIn ? (
        <>
          <Link to="/"> Home </Link>
          <Link to="/profile"> Profile </Link>
          <Link to="/add-plant"> Create Plant </Link>

           <Input placeholder="Search" value={search} type="text" onChange={handleSearch} />
        
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
