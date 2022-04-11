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
import AddPlantPage from "./pages/AddPlantPage/AddPlantPage";

// -------------- COMPONENTS
import CustomNavbar from "./components/CustomNavbar";

axios.defaults.withCredentials = true;

export default function App() {
  const navigate = useNavigate();
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(true);
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    async function fetchPlantsList() {
      let res = await axios.get(`${API_URL}/`);
      console.log("logging res data", res.data);
      setAllPlants(res.data);
    }
    fetchPlantsList();
  }, []);
  if (allPlants === null) {
    return <p>No plants currently listed</p>;
  }

/*   const updateSinglePlant = async (idPlantUpdate, updatedPlant) => {
    try{
      	const response = await axios.post(`${API_URL}/plantform`);
        setAllPlants((oldPlants) => {
          return oldPlants.map((plant) => {
            if (idPlantUpdate === plant._id) {
              return updatedPlant;
            }
            return plant;
          });
        });
    }
    catch(err){
      console.log(err, "error from update single plant")
    }
  } */


  const handleAddPlant = async (event) => {
    try {
      const response = await axios.get(`${API_URL}/plantform`);
      console.log(response);
      navigate("/plantform");
    } catch (err) {
      console.error(err, "error from handleAddPlant");
      console.log(err.response.data, "error from handleAddPlant");
      if (err.response.status === 401) {
        navigate("/login");
      }
    }
  };

  const handlelogout = async (event) => {
    await axios.post(`${API_URL}/logout`);
    navigate("/");
  };

  return (
    <div>
      <CustomNavbar
        userIsLoggedIn={userIsLoggedIn}
        setUserIsLoggedIn={setUserIsLoggedIn}
      />
      <Routes>
        <Route path="/" element={<HomePage allPlants={allPlants} />} />

        {userIsLoggedIn ? (
          <>
            <Route path="/profilePage" element={<ProfilePage />} />
            <Route path="/add-plant" element={<AddPlantPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage allPlants={allPlants} />} />
            <Route
              path="/signup"
              element={<SignUpPage setUserIsLoggedIn={setUserIsLoggedIn} />}
            />
            <Route
              path="/login"
              element={<LogInPage setUserIsLoggedIn={setUserIsLoggedIn} />}
            />
          </>
        )}
      </Routes>
    </div>
  );
}
