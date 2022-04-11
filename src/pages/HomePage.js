import React, { useEffect, useState } from "react";
import "./HomePage.css";

import PlantCard from "../components/PlantCard"

// import PlantDetail from "../components/PlantDetail"
// import { useNavigate } from "react-router";

export default function HomePage({ allPlants }) {
console.log(allPlants, "Here are all plants")
  return (
    <div className="plants-container">
      {allPlants.map((plant, i) => {
        return <PlantCard plant={plant} key={plant.englishName + i} />;
      })}
    </div>
  );
}
