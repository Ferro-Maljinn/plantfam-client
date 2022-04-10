import React, { useEffect, useState } from "react";
import "./App.css";

// -------------- API IMPORTS
import { API_URL } from "./config";
import axios from "axios";

// -------------- NAVIGATION
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";

// -------------- PAGES
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import ProfilePage from "./pages/ProfilePage";

// -------------- COMPONENTS
import CustomNavbar from "./components/CustomNavbar";

axios.defaults.withCredentials = true;

export default function App() {
  const navigate = useNavigate();
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(true);

  const handlelogout = async (event) => {
    await axios.post("http://localhost:5000/api/logout");
    navigate("/");
  };

  return (
    <div>
      <CustomNavbar userIsLoggedIn={userIsLoggedIn} setUserIsLoggedIn={setUserIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {userIsLoggedIn ? (
          <Route path="/profile" element={<ProfilePage />} />
        ) : (
          <>
            <Route path="/signup" element={<SignUpPage setUserIsLoggedIn={setUserIsLoggedIn} />} />
            <Route path="/login" element={<LogInPage setUserIsLoggedIn={setUserIsLoggedIn} />} />
          </>
        )}
      </Routes>
    </div>
  );
}
