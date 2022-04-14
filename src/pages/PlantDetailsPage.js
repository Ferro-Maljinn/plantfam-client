import "./PlantDetailsPage.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../config";
import { useParams } from "react-router";

function PlantDetailsPage({ sideBar, setSideBar }) {
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
          <div className={ ` details-page-gray-container`}>
            <h1>{plantDetails.englishName}</h1>
            <p>{plantDetails.latinName}</p>
          </div>
          

            <div className={`plant-details-body `}>
              <div className="detail-property-container"> 
                <h4>Description:</h4> 
                <p>{plantDetails.description}</p>
            </div>
            <div className="detail-property-container"> 
            <h4>Height:</h4> 
            <p>{plantDetails.height} </p>
            </div>
            <div className="detail-property-container"> 
            <h4>Light needed:</h4>
            <p> {plantDetails.light}</p>
            </div>
            <div className="detail-property-container"> 
            <h4>Watering:</h4>
            <p> {plantDetails.watering}</p>
            </div>
            <div className="detail-property-container"> 
            <h4>Soil type needed:</h4>
            <p> {plantDetails.soilType}</p>
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
