import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Plantform from "./components/Plantform";
import axios from "axios";
import { useNavigate } from "react-router";
axios.defaults.withCredentials = true;
import { API_URL } from "./config";

function App() {
  const navigate = useNavigate();

  const [allPlants, setAllPlants] = useState([]);

  // FETCH EXISTING PLANTS FROM DATABASE, BUGFIXING TO BE DONE

  // useEffect(() => {
  //   async function fetchAllPlants() {
  //     const response = await fetch(`${API_URL}/example`);
  //     const data = await response.json();
  //     if(!data) return;
  //     setAllPlants(data);
  //   }
  //   fetchAllPlants();
  // }, [])

  // const addNewPlant = (NewPlant) => {
  //   setAllPlants([...allPlants, NewPlant])
  // };

  const handleAddPlant = async (event) => {
    try {
      const response = await axios.get("http://localhost:5000/api/plantform");
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
    await axios.post("http://localhost:5000/api/logout");
    navigate("/");
  };

  return (
    <div>
      <Navbar handlelogout={handlelogout} handleAddPlant={handleAddPlant} />
      <Routes>
        {/* <Layout> */}

        <Route path="/" element={<Home />} />
        {/* CONNECTED TO FETCHING PLANTS FROM DB 

    {allPlants.map((plant, i) => {
      return <plantdetails key={plant.name + i} plant={plant} />
    })} */}

        <Route
          path="/plantform"
          element={
            <Plantform allPlants={allPlants} setAllPlants={setAllPlants} />
          }
        />

        <Route path="/signup" element={<SignUpForm />} />

        <Route path="/login" element={<LogInForm />} />
        {/* </Layout> */}
      </Routes>
    </div>
  );
}

export default App;
