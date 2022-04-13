import React from "react";
import "./PlantCard.css";

import { Button } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

export default function PlantCard({ plant }) {
  async function handleDeletePlant(plantId) {
    try {
      console.log("arrived to delete");
      await axios.delete(`${API_URL}/plant/delete/${plantId}`, {
        params: { plantId: plantId },
      });
      // TODO Update allPlant/rerender
      // setSinglePlant({
      //   ...singlePlant,
      // });
    } catch (err) {
      console.log(err.response.data.errorMessage);
    }
  }

  return (
    <div className="plant-card">
      <img className="plant-img" src={plant.image} alt="Some Plant" />
      <div className="plant-details">
        <h2>{plant.englishName}</h2>
        <p>{plant.description}</p>
      </div>
      <Link to={plant._id}>
        {" "}
        <Button type="primary" htmlType="submit">
          Update
        </Button>{" "}
      </Link>
      <Button
        onClick={() => handleDeletePlant(plant._id)}
        type="danger"
        htmlType="submit"
      >
        Delete Plant
      </Button>
    </div>
  );
}
