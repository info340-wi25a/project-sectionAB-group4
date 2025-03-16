import React from 'react'; //import React Component
import { useState } from 'react';
import { NavLink } from 'react-router';
import { signOut } from 'firebase/auth';
import { auth } from '../main';


export function NavBar({ user, setUser }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error loggin out:", error);
    }
  };

  return (
    <nav className='navbar'>
      <NavLink to="/home" className='logo'>Rent-A-Tool</NavLink>

      {/* Mobile Toggle Button*/}
      <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><NavLink to="/browse-tools" className="nav-link">Browse Tools</NavLink></li>
        {user && (
          <>
            <li><NavLink to="/user-listings" className="nav-link">Your Listings</NavLink></li>
            <li><NavLink to="/user-rentings" className="nav-link">Your Rentings</NavLink></li>
            <li><NavLink to="/create-listing" className="nav-link">Create Listings</NavLink></li>
            <li><NavLink to="/booking-details" className="nav-link">Booking Details</NavLink></li>
            <li><NavLink to="/tool-details" className="nav-link">Tool Details</NavLink></li>
          </>
        )}
      </ul>

      {/* Conditional Authentication Buttons */}
      <div className="cta">
        {user ? (
          <>
            <span className="user-tag">
              {user.email.split("@")[0]}
            </span>
            <button onClick={handleLogout} className="btn logout">Log Out</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn">Login</NavLink>
            <NavLink to="/signup" className="btn btn-primary">Sign Up</NavLink>
          </>
        )}
      </div>

      {/* <ul className={menuOpen ? "nav-links active" : "nav-links"}>
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
      </div> */}
    </nav>
  );
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

export default NavBar;