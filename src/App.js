import React, { useEffect, useState } from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Plantform from './components/Plantform';
import axios from 'axios';

function App() {
  const [allPlants, setAllPlants] = useState([]);

  // FETCH EXISTING PLANTS FROM DATABASE, BUGFIXING TO BE DONE 
 
  // useEffect(() => {
  //   async function fetchAllPlants() {
  //     const response = await fetch("http://localhost:5000/api");
  //     const data = await response.json();
  //     if(!data) return;
  //     setAllPlants(data);
  //   }
  //   fetchAllPlants();
  // }, [])

  // const addNewPlant = (NewPlant) => {
  //   setAllPlants([...allPlants, NewPlant])
  // };


  const handlelogout = async (event) => {
    //NOT YET WORKING BC SESSIONS DONT WORK YET (PROBABLY?) , BUT CONNECTED TO BUTTON
    
    // let response = await axios.post("http://localhost:5000/api/logout",  {withCredentials: true});
    console.log("this is logging out ")
  }


  return (
    <div>
   <Navbar handlelogout={handlelogout}/>
   <Routes>
    {/* <Layout> */}
   
    <Route path="/" element={<Home />} />
    {/* CONNECTED TO FETCHING PLANTS FROM DB 

    {allPlants.map((plant, i) => {
      return <plantdetails key={plant.name + i} plant={plant} />
    })} */}

      <Route path="/plantform" element={<Plantform allPlants={allPlants} setAllPlants={setAllPlants} />} />

      <Route path="/signup" element={<SignUpForm />} />
      
      <Route path="/login" element={<LogInForm />} />
    {/* </Layout> */}
    </Routes>
    </div>
  );
}

export default App;
