import React, { useEffect, useState } from "react";
import "./PlantCard.css";

import { Button } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../config";
import { useParams } from "react-router";





export default function PlantCard({ plant, setAllPlants }) {

  async function handleDeletePlant(plantId) {
    try {
      console.log("arrived to delete");
     let deletedPlant = await axios.delete(`${API_URL}/plant/delete/${plantId}`, {
        params: { plantId: plantId },
      });
      console.log(deletedPlant.data, "the deleted plant")
      setAllPlants(deletedPlant.data);
    } catch (err) {
      console.log("error from delet plants", err);
    }
  }

  return (
    <div className="plant-card">
      <img className="plant-img" src={plant.image} alt="Some Plant" />
      <div className="plant-details">
        <h2>{plant.englishName}</h2>
        <p>{plant.description}</p>
      </div>
      <Link to={`/plant/${plant._id}`}>
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

      <Link to={`/comments/${plant._id}`}>
        <button>Comment</button>{" "}
      </Link>

      <Link to={`/plantdetailspage/${plant._id}`}>
        <button>Details</button>{" "}
      </Link>

    </div>
  );
}
