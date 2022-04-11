import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { API_URL } from "../config";

import { Button } from "antd";

function Plantdetails() {
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
  console.log(params);

  useEffect(() => {
    async function fetchPlantsList() {
      let singlePlantFromDb = await axios.get(
        `${API_URL}/plantdetails/${params.plantId}`,
        {
          withCredentials: true,
        }
      );
      setSinglePlant(singlePlantFromDb.data.singlePlant);
      console.log(singlePlantFromDb.data.singlePlant);
    }
    fetchPlantsList();
  }, [params]);

  const handleUpdatInput = (event) => {
    console.log(event.target.value, "event target value");
    setSinglePlant({
      ...singlePlant,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdatePlant = async (event) => {
    console.log(singlePlant, "this is singlePlant")
    let response = await axios.post(`${API_URL}/updatePlant`, singlePlant, {
      withCredentials: true,
    });
    console.log(response, "this is new plant form state")
    navigate("/profilepage")
  };

  if (!singlePlant._id) {
    return <p>Loading..</p>;
  } 
  return (
    <div>
      <h1>Plant Details</h1>
      <form className="form-container">
        <label>Image</label>
        <input
          name="image"
          value={singlePlant.image}
          onChange={handleUpdatInput}
        />
        <label>Description</label>
        <input
          name="description"
          value={singlePlant.description}
          onChange={handleUpdatInput}
        />
        <label>English Name</label>
        <input
          name="englishName"
          value={singlePlant.englishName}
          onChange={handleUpdatInput}
        />
        <label>Latin Name</label>
        <input
          name="latinName"
          value={singlePlant.latinName}
          onChange={handleUpdatInput}
        />
        <label>Height</label>
        <input
          name="height"
          value={singlePlant.height}
          onChange={handleUpdatInput}
        />
        <label>Light intake</label>
        <input
          name="light"
          value={singlePlant.light}
          onChange={handleUpdatInput}
        />
        <label>Watering</label>
        <input
          name="watering"
          value={singlePlant.watering}
          onChange={handleUpdatInput}
        />
        <label>SoilType</label>
        <input
          name="soilType"
          value={singlePlant.soilType}
          onChange={handleUpdatInput}
        />
        <Button onClick={handleUpdatePlant} type="primary" htmlType="submit">
          List Plants
        </Button>
      </form>
    </div>
  );
}

export default Plantdetails;
