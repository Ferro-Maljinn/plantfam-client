import React from 'react'
import { Link } from 'react-router-dom';

function Navbar( { handlelogout, handleAddPlant }) {
  return (
    <div>
    <Link to="/signup"> Signup </Link>
    <Link to="/login"> Login </Link>
    <button onClick={handleAddPlant} type="primary">List plant</button>
    <button onClick={handlelogout} type="primary">Logout</button>
    </div>
  )
}

export default Navbar;