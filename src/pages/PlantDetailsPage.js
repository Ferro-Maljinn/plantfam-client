import "./PlantDetailsPage.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../config";
import { useParams } from "react-router";


function PlantDetailsPage( { sideBar, setSideBar }) {
  const [plantDetails, setPlantDetails] = useState();
  const { plantId } = useParams();



  useEffect(() => {
    const fetchPlantDetails = async () => {
      const singlePlantDetails = await axios.get(
        `${API_URL}/plant/plantdetails/${plantId}`,
        {
          withCredentials: true,
        }
      );
      setPlantDetails(singlePlantDetails.data);
    };
    fetchPlantDetails();
  }, [plantId]);

  return (
    <div>
      {plantDetails ? (
        <div className="orgasm-border-gradient-containter">
        <div className="orgasm-border-gradient">
        <img className="plant-img" src={plantDetails.image} alt="Some Plant" />
        <h1>{plantDetails.englishName}</h1>
          <p>{plantDetails.latinName}</p>
          <p>{plantDetails.description}</p>
        </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PlantDetailsPage;
