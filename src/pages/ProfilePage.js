import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL } from "../config";


// import AddPlantForm from "../components/AddPlantForm";

export default function ProfilePage( { user, allPlants } ) {

 
//  let plantsOfUser 

    // if(allPlants){
    // async function filterPlants() {
    //   plantsOfUser = await allPlants.filter((plant) => {
    //     return plant.owner === user._id
    //   })
    //   }
    //   filterPlants(); 
    //   console.log("plant & user", plantsOfUser)}
  
    
  console.log(allPlants, "allplants from profilepage")

  if(!user || !allPlants){
    return <p>Loading...</p>
  }
  return (
    <div>
      <h1>Hello profile {user && user.name}</h1>
      Profilepage
      {allPlants && allPlants.filter((plant) =>{
        return plant.owner === user._id
      })
      .map((plant, i) => {
        return <p key={plant.englishName + i}> { plant.englishName } </p>
      })

      }
    </div>
  );
}
