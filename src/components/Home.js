import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {API_URL} from '../config'


function Home() {
 const [allPlants, setAllPlants] =  useState(null);

  useEffect(()=> {
    async function plantsList () {
      let res = await axios.get(`${API_URL}/listPlants`);
      console.log(res.data);
      setAllPlants(res.data); 
    }
    plantsList();
  }, [])
  if (allPlants === null) {
    return <p>Loading...</p>
  }
  return (
    <div>
    {
      allPlants.map( (plant, i) => {
        return (
          <div key={plant.englishName + i}>
          <img src={plant.image} alt="Some Plant"/>
          <h2>{plant.englishName}</h2>
          </div>
        )
      })
    } 
   </div>  
      )
}

export default Home