import React, { useEffect, useState } from "react";
import "./App.css";

// -------------- API IMPORTS
import { API_URL } from "./config";
import axios from "axios";

// -------------- NAVIGATION
import { Routes, Route } from "react-router-dom";

// -------------- PAGES
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import ProfilePage from "./pages/ProfilePage";
import AddPlantPage from "./pages/AddPlantPage/AddPlantPage";

// -------------- COMPONENTS
import CustomNavbar from "./components/CustomNavbar";
import UpdatePlant from "./components/UpdatePlant";
import Comment from "./components/CommentFolder/Comment";
import PlantDetailsPage from "./pages/PlantDetailsPage";

axios.defaults.withCredentials = true;

export default function App() {

  const [allPlants, setAllPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    async function fetchUser() {
      try {
        let meFromDb = await axios.get(`${API_URL}/user/me`);
        setUser(meFromDb.data);
      } catch (e) {
        console.log(e.message)
      }
    }
    loggedIn && fetchUser();
  }, [loggedIn]);

  async function fetchPlants() {
    try {
      let res = await axios.get(`${API_URL}/plant/all`);
      setAllPlants(res.data);
    } catch (e) {
      console.log(e.message)
    }
  }


  useEffect(() => {
   
    fetchPlants();
  }, []);



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

  return (
    <div>
      <CustomNavbar
        search={search}
        setSearch={setSearch}
        user={user}
        setUser={setUser}
        setLoggedIn={setLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              searchedPlant={searchedPlant}
              allPlants={allPlants}
              setAllPlants={setAllPlants}
              user={user}
            />
          }
        />
        <Route path="/plant/:plantId" element={<UpdatePlant setAllPlants={setAllPlants} />} />

        {user ? (
          <>
            <Route
              index
              path="/profilepage"
              element={<ProfilePage user={user} allPlants={allPlants} />}
            />

            <Route
              path="/add-plant"
              element={
                <AddPlantPage
                  allPlants={allPlants}
                  setAllPlants={setAllPlants}
                  user={user}
                />
              }
            />
            <Route
              path="/comments/:plantId"
              element={<Comment user={user} />}
            />

            <Route
              path="/plantdetailspage/:plantId"
              element={<PlantDetailsPage user={user} />}
            />
          </>
        ) : (
          <>
            <Route path="/signup" element={<SignUpPage setUser={setUser} setLoggedIn={setLoggedIn} />} />
            <Route path="/login" element={<LogInPage setUser={setUser} setLoggedIn={setLoggedIn} />} />
          </>
        )}
      </Routes>
    </div>
  );
}
