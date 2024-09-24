import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Optional: You can add styles for your navbar here

const Navbar = () => {
  const location = useLocation(); // Get current location

  return (
    <nav className="navbar">
      <ul className="nav-left">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Overview</Link>
        </li>
        <li className={location.pathname === '/whitepaper' ? 'active' : ''}>
          <Link to="/whitepaper">Projects</Link>
        </li>
        <li className={location.pathname === '/team' ? 'active' : ''}>
          <Link to="/team">Researchs</Link>
        </li>
      </ul>
      <ul className="nav-right">
        <li className={location.pathname === '/pre-register' ? 'active' : ''}>
          <Link to="/resume">resumé</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

