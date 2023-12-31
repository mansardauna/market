// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul className=' flex w-full md:w-1/2 text-white justify-between mt-3' style={{ listStyle: 'none' }}>
      <li>
        <Link to="./catergory">Home</Link>
      </li>
      <li>
        <Link to="./store">Store</Link>
      </li>
      <li>
        <Link to="./order">Orders</Link>
      </li>
      <li>
        <Link to="./ads">Ads</Link>
      </li>
      {/* Add more menu items with their corresponding links */}
    </ul>
  );
};

export default Menu;
