import React from "react";
import "./CustomNavbar.css";

// -------------- NAVIGATION
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
// import { Input } from "antd";


// -------------- API
import axios from "axios";
import { API_URL } from "../config";

axios.defaults.withCredentials = true;

export default function CustomNavbar({ search, setSearch, user, setUser, setLoggedIn }) {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await axios.post(`${API_URL}/logout`);
    setLoggedIn(false)
    setUser(null)
    navigate("/");
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value, "event target value search");
  };

  return (
    <div>
      {user ? (
        <div className={`nav-bar `}>
          <div className="link-wrapper">

            <Link className="link" to="/"> Home </Link>
            <Link className="link" to="/profilepage"> Profile </Link>
            <Link className="link" to="/add-plant"> Add Plant </Link>
            <div className="logout-container">
              <button className="btn-logout" onClick={handleLogOut} type="primary">

                Logout
              </button>
            </div>
          </div>


          <div className="search-wrapper">
            <input

              placeholder="Search"
              value={search}
              type="text"
              onChange={handleSearch}
            />

          </div>
          
        </div>
      ) : (
        <div className={`nav-bar `}>
        <div className="link-wrapper">
          <Link className={`link logged-out`} to="/signup"> Signup </Link>
          <Link className={`link logged-out`} to="/login"> Login </Link>
          

          </div>
          <hr className="divider"></hr>
        </div>
      )}
    </div>
  );
}
