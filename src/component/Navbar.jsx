import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
        <div className="navbar-brand">TECHPATH</div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="./Benefits">About</Link>
          <button className="navbar-button">Get Started</button>
        </div>
      </nav>
    );
};

export default Navbar;