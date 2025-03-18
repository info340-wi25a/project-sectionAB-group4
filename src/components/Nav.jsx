import React from 'react';
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
      alert("Error logging out:" + error.message);
    }
  };

  return (
    <nav className='navbar'>
      <NavLink to="/home" className='logo'>Rent-A-Tool</NavLink>

      <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><NavLink to="/browse-tools" className="nav-link">Browse Tools</NavLink></li>
        {user && (
          <>
            <li><NavLink to="/user-listings" className="nav-link">Your Listings</NavLink></li>
            <li><NavLink to="/user-rentings" className="nav-link">Your Rentings</NavLink></li>
            <li><NavLink to="/create-listing" className="nav-link">Create Listing</NavLink></li>

          </>
        )}
      </ul>

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