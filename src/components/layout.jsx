// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Nav/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
