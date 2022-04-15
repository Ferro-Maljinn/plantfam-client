import React, { useState } from "react";
import "./AddPlantPage.css";

import axios from "axios";
import { useNavigate } from "react-router";
import { API_URL } from "../../config";

// import { Button } from "antd";

function AddPlantPage({ allPlants, setAllPlants, user }) {
  const navigate = useNavigate();

  const defaultPlantFormState = {
    image: "",
    description: "",
    englishName: "",
    latinName: "",
    height: "",
    light: "",
    watering: "",
    soilType: "",
    owner: user.currentUser._id,
  };

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
    await axios.post(
      `${API_URL}/plant/create`,
      newPlantFormstate,
      {
        withCredentials: true,
      }
    );
    setAllPlants([...allPlants, newPlantFormstate]);
    navigate("/profilepage");
  };

  return (
    <>
      <div className="image-text-container">
        <img src="/plant-addplantpage.jpeg" alt="a.plant" />
        <div className="green-container">
          <p>Add a plant that you want to trade or give away </p>
        </div>
      </div>

      <div className="form-and-image-container-row">
        <form className="form-container">
          <div className="input-container">
            <label>Image:</label>
            <input
              name="image"
              value={newPlantFormstate.image}
              onChange={handleNewPlantInput}
            />
          </div>
          <div className="input-container">
            <label>Description:</label>
            <input
              name="description"
              value={newPlantFormstate.description}
              onChange={handleNewPlantInput}
            />
          </div>
          <div className="input-container">
            <label>English Name:</label>
            <input
              name="englishName"
              value={newPlantFormstate.englishName}
              onChange={handleNewPlantInput}
            />
          </div>
          <div className="input-container">
            <label>Latin Name:</label>
            <input
              name="latinName"
              value={newPlantFormstate.latinName}
              onChange={handleNewPlantInput}
            />
          </div>
          <div className="input-container">
            <label>Height:</label>
            <input
              name="height"
              value={newPlantFormstate.height}
              onChange={handleNewPlantInput}
            />
          </div>
          <div className="input-container">
            <label>Light intake:</label>
            <input
              name="light"
              value={newPlantFormstate.light}
              onChange={handleNewPlantInput}
            />
          </div>
          <div className="input-container">
            <label>Watering:</label>
            <input
              name="watering"
              value={newPlantFormstate.watering}
              onChange={handleNewPlantInput}
            />
          </div>
          <div className="input-container">
            <label>SoilType:</label>
            <input
              name="soilType"
              value={newPlantFormstate.soilType}
              onChange={handleNewPlantInput}
            />
          </div>
          <button
            className="add-plant-btn"
            onClick={handleAddNewPlant}
            type="primary"
            htmlType="submit"
          >
            Create Plant
          </button>
        </form>
        <img
          className="body-plant-image"
          src="https://media.istockphoto.com/photos/monstera-in-a-pot-isolated-on-white-background-close-up-of-tropical-picture-id1278906674?k=20&m=1278906674&s=612x612&w=0&h=udI6hjjVdHQl8VOfenSf4YSPObrcmruBMYeaL8SNVE4="
          alt="a.plant"
        />
      </div>
    </>
  );
}

export default AddPlantPage;
