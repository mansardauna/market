// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const Menu = () => {
  return (
    <ul className='menu-ul' style={{ listStyle: 'none' }}>
      <li>
        <Link to="./catergory">Home</Link>
      </li>
      <li>
        <Link to="./store">Store</Link>
      </li>
      <li>
        <Link to="./cart">Cart</Link>
      </li>
      <li>
        <Link to="./feed">Feed</Link>
      </li>
      {/* Add more menu items with their corresponding links */}
    </ul>
  );
};

export default Menu;