import "./PlantCard.css";
import { Button, Colors } from "react-foundation";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

import "bootstrap/dist/css/bootstrap.min.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";


export default function PlantCard({ plant, setAllPlants }) {
  async function handleDeletePlant(plantId) {
    try {
      console.log("arrived to delete");
      let deletedPlant = await axios.delete(
        `${API_URL}/plant/delete/${plantId}`,
        {
          params: { plantId: plantId },
        }
      );
      console.log(deletedPlant.data, "the deleted plant");
      setAllPlants(deletedPlant.data);
    } catch (err) {
      console.log("error from delet plants", err);
    }
  }

  return (
    <div className="orgasm-border-gradient-containter">
    <div className="orgasm-border-gradient">
      <ButtonGroup className="button-group" bsSize="xsmall">
        <Link to={`/plant/${plant._id}`}>
          <div className="icon-container">
            <img
              src="/iconify/32x32/ant-design_edit-outlined.png"
              alt={plant.englishName}
            />
            <h6>Edit</h6>
          </div>
        </Link>

        <div className="icon-container">
          <img
            onClick={() => handleDeletePlant(plant._id)}
            src="/iconify/32x32/ant-design_delete-outlined.png"
            alt={plant.englishName}
          />
          <h6>Delete</h6>
        </div>

        <Link to={`/comments/${plant._id}`}>
          <div className="icon-container">
            <img
              src="/iconify/32x32/codicon_comment-discussion.png"
              alt={plant.englishName}
            />
            <h6>Comment</h6>
          </div>
        </Link>

        <Link to={`/plantdetailspage/${plant._id}`}>
          <div className="icon-container">
            <img
              src="/iconify/32x32/clarity_details-line.png"
              alt={plant.englishName}
            />
            <h6>Details</h6>
          </div>
        </Link>
        <hr />
      </ButtonGroup>
      
      <div className="plantDetails-andImg-container">
        <img className="plant-img" src={plant.image} alt="Some Plant" />
        <div className="plant-details">
          <h3>{plant.englishName}</h3>
          <p>{plant.description}</p>
        </div>
      </div>
    </div>
    </div>
  );
}
