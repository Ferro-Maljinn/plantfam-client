import React from "react";
import "./PlantCard.css";
import { Button } from "antd";

export default function PlantCard({ plant }) {
  return (
    <div className="plant-card">
      <img className="plant-img" src={plant.image} alt="Some Plant" />
      <div className="plant-details">
        <h2>{plant.englishName}</h2>
        <p>{plant.description}</p>
      </div>
      <Button type="danger" htmlType="submit">
        Delete
      </Button>
    </div>
  );
}
