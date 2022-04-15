import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { API_URL } from "../config";

import { Button } from "antd";

export default function UpdatePlant() {
  const navigate = useNavigate();

  const [singlePlant, setSinglePlant] = useState({
    image: "",
    description: "",
    englishName: "",
    latinName: "",
    height: "",
    light: "",
    watering: "",
    soilType: "",
    _id: "",
  });

  let params = useParams();

  useEffect(() => {
    async function fetchSinglePlantDetails() {
      try {
        let singlePlantFromDb = await axios.get(
          `${API_URL}/plant/${params.plantId}`,
          {
            withCredentials: true,
          }
        );
        setSinglePlant(singlePlantFromDb.data);
      } catch (err) {
        console.log(err, "error from fetching plant details");
      }
    }
    fetchSinglePlantDetails();
  }, [params]);

  const handleUpdateInput = (event) => {
    setSinglePlant({
      ...singlePlant,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdatePlant = async (event) => {
    event.preventDefault();
    let response = await axios.put(
      `${API_URL}/plant/update/${singlePlant._id}`,
      singlePlant,
      {
        withCredentials: true,
      }
    );
    console.log(response, "this is new plant form state");
    navigate("/");
  };

  return (
<>
    <div className="image-text-container">
    <img src={singlePlant.image} alt="a.plant" />
    <div className="green-container">
    <p> Edit Plant </p>
    </div>
    </div>
    
      <form className="form-container">
        <label>Image</label>
        <input
          name="image"
          value={singlePlant.image}
          onChange={handleUpdateInput}
        />
        <label>Description</label>
        <input
          name="description"
          value={singlePlant.description}
          onChange={handleUpdateInput}
        />
        <label>English Name</label>
        <input
          name="englishName"
          value={singlePlant.englishName}
          onChange={handleUpdateInput}
        />
        <label>Latin Name</label>
        <input
          name="latinName"
          value={singlePlant.latinName}
          onChange={handleUpdateInput}
        />
        <label>Height</label>
        <input
          name="height"
          value={singlePlant.height}
          onChange={handleUpdateInput}
        />
        <label>Light intake</label>
        <input
          name="light"
          value={singlePlant.light}
          onChange={handleUpdateInput}
        />
        <label>Watering</label>
        <input
          name="watering"
          value={singlePlant.watering}
          onChange={handleUpdateInput}
        />
        <label>SoilType</label>
        <input
          name="soilType"
          value={singlePlant.soilType}
          onChange={handleUpdateInput}
        />
        <Button onClick={handleUpdatePlant} type="primary" htmlType="submit">
          Edit Plant
        </Button>
      </form>
      </>
  );
}
