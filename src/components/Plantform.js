import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

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

function Plantform({ allPlants, setAllPlants }) {
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
    console.log(allPlants, "this is allplants");
    let response = await axios.post(
      "http://localhost:5000/api/plantform",
      newPlantFormstate,
      { withCredentials: true }
    );
    console.log(response, "this is new plant form state");
    await setAllPlants([...allPlants, newPlantFormstate]);
    navigate("/profilepage");
  };

  return (
    <form onSubmit={handleAddNewPlant}>
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
      <button type="submit">List Plant</button>
    </form>
  );
}

export default Plantform;
