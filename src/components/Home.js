import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {API_URL} from '../config'


function Home() {
 const [allPlants, setAllPlants] =  useState(null);

  useEffect(()=> {
    async function plantsList () {
      let res = await axios.get(`${API_URL}/allPlants`);
      console.log(res.data);
      setAllPlants(res.data); 
    }
  }, [])
  return (
    <div>
      <h2> hello </h2>
 
   </div>  
      )
}

export default Home