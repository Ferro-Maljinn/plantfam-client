import React from 'react'

function Navbar( { handlelogout }) {
  return (
    <div>
    <button>Signup</button>
    <button>Login</button>
    <button>Trade plant</button>
    <button onClick={handlelogout} type="primary">Logout</button>
    </div>
  )
}

export default Navbar;