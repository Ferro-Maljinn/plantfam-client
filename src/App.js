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
import Plantdetails from "./components/PlantDetails";

axios.defaults.withCredentials = true;

export default function App() {
  const navigate = useNavigate();
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(true);
  const [allPlants, setAllPlants] = useState([]);
  const [search, setSearch] = useState("");

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

// maybe searchdplant by name
  const searchedPlant = allPlants.filter((elem) => {
    console.log(elem, "elem")
    console.log(elem.englishName, "elem eng name")
    return elem.englishName.toLowerCase().includes(search.toLowerCase());
  });

  // and then searchedplantbylocation
  // const searchedPlantByLocation = allPlants.filter((elem) => {
  //   console.log(elem, "elem")
  //   console.log(elem.location, "elem location")
  //   return elem.location.toLowerCase().includes(search.toLowerCase());
  // });

  console.log(searchedPlant, "searched plant")
  console.log(search, "search")

  const handlelogout = async (event) => {
    await axios.post(`${API_URL}/logout`);
    navigate("/");
  };

  return (
    <div>
      <CustomNavbar
        handlelogout={handlelogout}
        userIsLoggedIn={userIsLoggedIn}
        setUserIsLoggedIn={setUserIsLoggedIn}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<HomePage searchedPlant={searchedPlant} allPlants={allPlants} />} />
        <Route path="/:plantId" element={<Plantdetails />} />

        {userIsLoggedIn ? (
          <>
            <Route path="/profilePage" element={<ProfilePage />} />
            <Route path="/add-plant" element={<AddPlantPage allPlants={allPlants} setAllPlants={setAllPlants} />} />
          </>
        ) : (
          <>
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
