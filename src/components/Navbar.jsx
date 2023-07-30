import '../index.css'
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Store from './Store'
import Feed from './Feed'
import Cart from './Cart'
import Catergory from './Catergory'
import Menu from './Menu';






function Navbar() {

  return (
    <div>

      <div className="row row-nav col-12 p-3 text-white bg-dark">

        <div className="logo d-flex col-3 ">
          <div className="lgimg">DT</div>
          <div className="lname">Digital Market</div>
        </div>
        <div className="none d-flex col-6 justify-content-between  fw-light pointer pe-auto align-items-center">
          <Menu /> {/* Render the menu */}
          <input type="text" placeholder='Search here.......' className='col-6' />
        </div>
        <div className="login p-2 d-flex justify-content-between">
          <div className='login-btn'>Login</div>
          <div className='login-btn'>Signup</div>
        </div>
      </div>
    </div>

  )
}

export default Navbar