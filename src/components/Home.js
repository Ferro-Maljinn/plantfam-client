import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {API_URL} from '../config'



function Home({allPlants }) {
 
  return (
    <div>
    {
      allPlants.map( (plant, i) => {
        return (
          <div key={plant.englishName + i}>
          <img src={plant.image} alt="Some Plant"/>

          <h2>Name: {plant.englishName}</h2>
          <p>Description: {plant.description}</p>
     
          </div>
        )
      })
    } 
   </div>  
      )
}

export default Home