import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../config";
import { useParams } from "react-router";

function PlantDetailsPage() {
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
        <div>
          <h1>PlantDetailsPage</h1>
          <p>{plantDetails.englishName}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PlantDetailsPage;
