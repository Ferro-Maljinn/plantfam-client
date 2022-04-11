import React, { useEffect, useState } from "react";
import "./HomePage.css";

import axios from "axios";
import { API_URL } from "../config";

import PlantCard from "../components/PlantCard"

// import PlantDetail from "../components/PlantDetail"
// import { useNavigate } from "react-router";

export default function HomePage({ allPlants }) {

  return (
    <div className="plants-container">
      {allPlants.map((plant, i) => {
        return <PlantCard plant={plant} key={plant.englishName + i} />;
      })}
    </div>
  );
}
