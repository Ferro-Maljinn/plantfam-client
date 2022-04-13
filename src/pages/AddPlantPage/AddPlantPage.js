import React, { useState } from "react";
import "./AddPlantPage.css";

import axios from "axios";
import { useNavigate } from "react-router";
import { API_URL } from "../../config";

import { Button } from "antd";

const defaultPlantFormState = {
  image: "",
  description: "",
  englishName: "",
  latinName: "",
  height: "",
  light: "",
  watering: "",
  soilType: "",
};

function AddPlantPage({ allPlants, setAllPlants }) {
  const navigate = useNavigate();

  const [newPlantFormstate, setNewPlantFormstate] = useState(
    defaultPlantFormState
  );

  const handleNewPlantInput = (event) => {
    setNewPlantFormstate({
      ...newPlantFormstate,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddNewPlant = async (event) => {
    event.preventDefault();
    let response = await axios.post(
      `${API_URL}/plant/create`,
      newPlantFormstate,
      {
        withCredentials: true,
      }
    );
    await setAllPlants([...allPlants, newPlantFormstate]);
    // navigate("/")
  };

  return (
    <form className="form-container">
      <label>Image</label>
      <input
        name="image"
        value={newPlantFormstate.name}
        onChange={handleNewPlantInput}
      />
      <label>Description</label>
      <input
        name="description"
        value={newPlantFormstate.description}
        onChange={handleNewPlantInput}
      />
      <label>English Name</label>
      <input
        name="englishName"
        value={newPlantFormstate.englishName}
        onChange={handleNewPlantInput}
      />
      <label>Latin Name</label>
      <input
        name="latinName"
        value={newPlantFormstate.latinName}
        onChange={handleNewPlantInput}
      />
      <label>Height</label>
      <input
        name="height"
        value={newPlantFormstate.height}
        onChange={handleNewPlantInput}
      />
      <label>Light intake</label>
      <input
        name="light"
        value={newPlantFormstate.light}
        onChange={handleNewPlantInput}
      />
      <label>Watering</label>
      <input
        name="watering"
        value={newPlantFormstate.watering}
        onChange={handleNewPlantInput}
      />
      <label>SoilType</label>
      <input
        name="soilType"
        value={newPlantFormstate.soilType}
        onChange={handleNewPlantInput}
      />
      <Button onClick={handleAddNewPlant} type="primary" htmlType="submit">
        Create Plant{" "}
      </Button>
    </form>
  );
}

export default AddPlantPage;
