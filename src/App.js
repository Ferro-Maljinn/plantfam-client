import { API_URL } from "./config";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";
import Plantdetails from "./components/Plantdetails";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Plantform from "./components/Plantform";
import axios from "axios";
import { useNavigate } from "react-router";
axios.defaults.withCredentials = true;

function App() {
  const navigate = useNavigate();
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
    return <p>No plants currently listed></p>;
  }

  const updateSinglePlant = async (idPlantUpdate, updatedPlant) => {
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
  }


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
      <Navbar handlelogout={handlelogout} handleAddPlant={handleAddPlant} />
      <Routes>
        {/* <Layout> */}

        <Route path="/" element={<Home allPlants={allPlants} />} />
        <Route
          path="/plantform"
          // element={
          //   <Plantform allPlants={allPlants} setAllPlants={setAllPlants} />
          // }
        />

        <Route path="/signup" element={<SignUpForm />} />

        <Route path="/login" element={<LogInForm />} />

        <Route path="/plantdetails" element={<Plantdetails />} />

        {/* </Layout> */}
      </Routes>
    </div>
  );
}

export default App;
