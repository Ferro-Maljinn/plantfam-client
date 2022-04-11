import { API_URL } from "../config";
import React from "react";
import { Button } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
export default function PlantCard({ plant }) {


  return (
    <div className="plant-card">
      <img className="plant-img" src={plant.image} alt="Some Plant" />
      <div className="plant-details">
        <h2>{plant.englishName}</h2>
        <p>{plant.description}</p>
      </div>
      <Link to={plant._id} > <Button type="danger" htmlType="submit">
         Update
      </Button>  </Link> 
      <Button type="danger" htmlType="submit">
        Delete
      </Button>
    </div>
  );
}
