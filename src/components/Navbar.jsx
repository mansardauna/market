import React from 'react'
import '../index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './Feed'
import Store from './Store'
import Cart from './cart'




function Navbar() {
  return (
    <div>

      <div className="row nav row-nav col-12 p-3 text-white bg-dark">

        <div className="logo d-flex col-3 ">
          <div className="lgimg">DT</div>
          <div className="lname">Digital Market</div>
        </div>
        <div className="d-flex col-3 justify-content-between fw-light pointer pe-auto">

          <div>Home</div>
          <div>Cart</div>
          <div>Store</div>
          <div>Feeds</div>
        </div>
        <input type="text" placeholder='Search here.......' className='col-3' />
        <div className="login p-2 d-flex justify-content-between">
          <div>Login</div>
          <div>Signup</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar