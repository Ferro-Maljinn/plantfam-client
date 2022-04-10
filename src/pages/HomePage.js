import React, { useEffect, useState } from "react";
import "./HomePage.css";

import axios from "axios";
import { API_URL } from "../config";

import PlantCard from "../components/PlantCard"

// import PlantDetail from "../components/PlantDetail"
// import { useNavigate } from "react-router";

export default function HomePage() {
  // const navigate = useNavigate();

  const [allPlants, setAllPlants] = useState(null);

  // TODO 
  // const handleAddPlant = async (event) => {
  //   try {
  //     const response = await axios.get(`${API_URL}/plantform`);
  //     console.log(response);
  //     navigate("/plantform");
  //   } catch (err) {
  //     console.error(err, "error from handleAddPlant");
  //     console.log(err.response.data, "error from handleAddPlant");
  //     if (err.response.status === 401) {
  //       navigate("/login");
  //     }
  //   }
  // };

  useEffect(() => {
    async function plantsList() {
      let res = await axios.get(`${API_URL}/listPlants`);
      setAllPlants(res.data);
    }
    plantsList();
  }, []);
  if (allPlants === null) {
    return <p>No Plants to display or error...</p>;
  }
  return (
    <div className="plants-container">
      {allPlants.map((plant, i) => {
        return (
          <PlantCard plant={plant} key={plant.englishName + i} />
        );
      })}
    </div>
  );
}
