import "./PlantCard.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

import "bootstrap/dist/css/bootstrap.min.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function PlantCard({ plant, setAllPlants, user }) {
  async function handleDeletePlant(plantId) {
    try {
      let deletedPlant = await axios.delete(
        `${API_URL}/plant/delete/${plantId}`,
        {
          params: { plantId: plantId },
        }
      );
      setAllPlants(deletedPlant.data);
    } catch (err) {
      console.log("error from delet plants", err);
    }
  }

  console.log(user, "user from plantcard")
  console.log(plant, "plant from plantcard")

  return (
    <div className="outter-container">
      <div className="orgasm-border-gradient">
        <ButtonGroup className="button-group">
          {user && user.currentUser && user.currentUser._id === plant.owner && (
            <>
              <Link to={`/plant/${plant._id}`} className="icon-container">
                <img
                  src="/iconify/24x24/ant-design_edit-outlined.png"
                  alt={plant.englishName}
                />
                <p className="icon-name">Edit</p>
              </Link>

              <div className="icon-container">
                <img
                  onClick={() => handleDeletePlant(plant._id)}
                  src="/iconify/24x24/ant-design_delete-outlined.png"
                  alt={plant.englishName}
                />
                <p className="icon-name">Delete</p>
              </div>
            </>
          )}

          <Link to={`/comments/${plant._id}`} className="icon-container">
            <img
              src="/iconify/24x24/codicon_comment-discussion.png"
              alt={plant.englishName}
            />
            <p className="icon-name">Comment</p>
          </Link>

          <Link
            to={`/plantdetailspage/${plant._id}`}
            className="icon-container"
          >
            <img
              src="/iconify/24x24/clarity_details-line.png"
              alt={plant.englishName}
            />
            <p className="icon-name">Details</p>
          </Link>
        </ButtonGroup>
        <hr className="custom-hr" />

        <div className="plantDetails-andImg-container">
          <img className="plant-img" src={plant.image} alt="Some Plant" />
          <div className="plant-details">
            <h3 className="plant-name">{plant.englishName}</h3>
            <p className="plant-description">{plant.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
