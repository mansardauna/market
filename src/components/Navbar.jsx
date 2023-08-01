import '../index.css'
import React, { useState } from 'react';

import Menu from './Menu';
import Dropdown from './Dropdown';
import HamburgerMenu from './Handburger';
import Search from './Search';
import catergories from './catergories';



const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };


  return (
    <div className=' bg-zinc-800 nav'>

      <div className="flex p-3 text-white">

        <div className=" flex items-center w-1/4">
          <div className=" p-2 border rounded-md px-3 md:px-5 bg-yellow-700 block md:hidden  font-extrabold">
            <HamburgerMenu onClick={handleToggle} />
          </div>

          <div className=" p-2 border rounded-md px-3 md:px-5 bg-yellow-700 hidden md:block  font-extrabold">
            <div className=''>DM</div>
          </div>
          <div className=" font-extrabold uppercase text-lg md:text-2xl ml-3">Digital Market</div>
        </div>
        <div className="flex w-1/2">

          <div className="bg-white text-black flex p-2 absolute md:relative right-3 h-10 top-16 md:top-0 md:p-2 md:px-5 md:w-8/12 w-fit rounded-3xl">
            <img src="./icons/search.svg" className='w-5 mr-3' alt="" onClick={handleToggle} />
            {isActive ?
              <Search data={catergories} /> : null}
          </div>
        </div>
        <div className="flex right-2 absolute">
          <div className='border border-yellow-800 p-2 rounded-md text-xs shadow-md shadow-gray-600 mr-2'>Login</div>
          <div className='border border-yellow-800 p-2 rounded-md text-xs shadow-md shadow-gray-600 bg-yellow-800'>Sign up</div>
        </div>
      </div>
      <div className="flex justify-between mx-3 my-3 w-1/2">
        <Dropdown />
        <Menu /> {/* Render the menu */}

      </div>
    </div >

  )
}

export default Navbar