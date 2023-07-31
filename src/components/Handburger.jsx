import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link, Route, Router, useHref } from 'react-router-dom';
import './index.css'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <HamburgerMenu />
      <button className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      {isOpen && (
        <div className="menu-links">

        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
