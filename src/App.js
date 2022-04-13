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
import Comment from "./components/CommentFolder/Comment";

axios.defaults.withCredentials = true;

export default function App() {
  const navigate = useNavigate();
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(true);

  const [allPlants, setAllPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState();


  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(`${API_URL}/plant/all`);
      setAllPlants(res.data);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     let res = await axios.get(`${API_URL}/plant/all`);
  //     console.log("logging res data", res.data);
  //     setAllPlants(res.data.allPlants);
  //     setUser(res.data.currentUser)
  //   }
  //   fetchData();
  // }, []);

  // if (allPlants === null) {
  //   return <p>No plants currently listed</p>;
  // }

  useEffect(() => {
    async function fetchData() {
      if (user) {
        let meUser = await axios.get(`${API_URL}/user/${user._id}`);
        console.log("arrived");
        console.log(meUser);
      }
    }
    fetchData();
  }, [user]);

  if (allPlants === null) {
    return <p>No plants currently listed</p>;
  }

  // maybe searchdplant by name
  const searchedPlant = allPlants.filter((elem) => {
    return elem.englishName.toLowerCase().includes(search.toLowerCase());
  });

  // and then searchedplantbylocation
  // const searchedPlantByLocation = allPlants.filter((elem) => {
  //   console.log(elem, "elem")
  //   console.log(elem.location, "elem location")
  //   return elem.location.toLowerCase().includes(search.toLowerCase());
  // });

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
        <Route
          path="/"
          element={
            <HomePage searchedPlant={searchedPlant} allPlants={allPlants} />
          }
        />
        <Route path="/:plantId" element={<Plantdetails />} />

        {userIsLoggedIn ? (
          <>
            <Route
              path="/profilepage"
              element={<ProfilePage user={user} allPlants={allPlants} />}
            />
            <Route
              path="/add-plant"
              element={
                <AddPlantPage
                  allPlants={allPlants}
                  setAllPlants={setAllPlants}
                />
              }
            />
            <Route
              path="/comments/:plantId"
              element={<Comment user={user} />}
            />
          </>
        ) : (
          <>
            <Route
              path="/signup"
              element={<SignUpPage setUserIsLoggedIn={setUserIsLoggedIn} />}
            />
            <Route
              path="/login"
              element={
                <LogInPage
                  setUser={setUser}
                  setUserIsLoggedIn={setUserIsLoggedIn}
                />
              }
            />
          </>
        )}
      </Routes>
    </div>
  );
}
