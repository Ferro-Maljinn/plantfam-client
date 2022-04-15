import "./PlantDetailsPage.css";
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
    <div className="plant-details-container">
      {plantDetails ? (
        <div className="image-text-container">
          <img src={plantDetails.image} alt="Some Plant" />
          <div className={` details-page-gray-container`}>
            <h1>{plantDetails.englishName}</h1>
            <p>{plantDetails.latinName}</p>
          </div>

          <div className="plant-details-body">
            <div className="detail-property-container">
              <h4 className="box-title">Description:</h4>
              <p className="align-left">{plantDetails.description}</p>
            </div>
            <div className="detail-property-container">
              <h4 className="box-title">Height:</h4>
              <p className="align-left">{plantDetails.height} </p>
            </div>
            <div className="detail-property-container">
              <h4 className="box-ttitle">Light needed:</h4>
              <p className="align-left"> {plantDetails.light}</p>
            </div>
            <div className="detail-property-container">
              <h4 className="box-ttitle">Watering:</h4>
              <p className="align-left"> {plantDetails.watering}</p>
            </div>
            <div className="detail-property-container">
              <h4 className="box-ttitle">Soil type needed:</h4>
              <p className="align-left"> {plantDetails.soilType}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PlantDetailsPage;
