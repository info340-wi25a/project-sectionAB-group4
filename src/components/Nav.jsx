import React from 'react'; //import React Component
import { NavLink } from 'react-router';
import { useState } from 'react';

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='navbar'>
      <NavLink to="/home" className='logo'>Rent-A-Tool</NavLink>

      {/* Mobile Toggle Button- MenuToggle Component*/}
      <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Apply 'active' class when menuOpen is true */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><NavLink to="/browse-tools" className="nav-link">Browse Tools</NavLink></li>
        <li><NavLink to="/user-listings" className="nav-link">Your Listings</NavLink></li>
        <li><NavLink to="/user-rentings" className="nav-link">Your Rentings</NavLink></li>
        <li><NavLink to="/create-listings" className="nav-link">Create Listings</NavLink></li>
        <li><NavLink to="/booking-details" className="nav-link">Booking Details</NavLink></li>
        <li><NavLink to="/tool-details" className="nav-link">Tool Details</NavLink></li>
      </ul>

      <div className="cta">
        <NavLink to="/login" className="btn">Login</NavLink>
        <NavLink to="/signup" className="btn btn-primary">Sign Up</NavLink>
        <NavLink to="/logout" className="btn">Log Out</NavLink>
      </div>
    </nav>
  )
}

function MenuToggle(props) {
  const handleClick = (event) => {
    if (props.menuOpen === true) {
      props.setMenuOpen(false);
    } else {
      props.setMenuOpen(true);
    }
  }

  return (
    <button className="menu-toggle" onClick={handleClick}>
      ☰
    </button>
  );
}