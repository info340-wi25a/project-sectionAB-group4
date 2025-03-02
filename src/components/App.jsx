import { useState } from 'react'
import { Routes, Route, Navigate, Link} from 'react-router';
import { NavBar } from './Nav';
import { Footer } from './Footer';
// import { Footer } from './Footer';

function App(props) {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      {/* Routes Defined Here */}
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/browse-tools" element={<h1>Browser Tools</h1>}></Route>
        <Route path="/user-listings" element={<h1>Your Listings</h1>}></Route>
        <Route path="/user-rentings" element={<h1>Your Rentings</h1>}></Route>
        <Route path="/create-listings" element={<h1>Create Listings</h1>}></Route>
        <Route path="/booking-details" element={<h1>Booking Details</h1>}></Route>
        <Route path="/tool-details" element={<h1>Tool Details</h1>}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App
