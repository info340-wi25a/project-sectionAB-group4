import { useState } from 'react'
import { Routes, Route, Navigate, Link} from 'react-router';
import { NavBar } from './Nav';
import { Footer } from './Footer';
import SAMPLE_TOOLS from '../data/sample_tools.json';
import HomePage from './HomePage'
import UserListings from './user-listings'
import UserRentings from './user-rentings'

function App(props) {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      {/* Routes Defined Here */}
      <Routes>
        <Route path="/" element={<HomePage tools={SAMPLE_TOOLS}/>}></Route>
        <Route path="/browse-tools" element={<HomePage tools={SAMPLE_TOOLS}/>}></Route>
        <Route path="/user-listings" element={<UserListings/>}></Route>
        <Route path="/user-rentings" element={<UserRentings/>}></Route>
        <Route path="/create-listings" element={<h1>Create Listings</h1>}></Route>
        <Route path="/booking-details" element={<h1>Booking Details</h1>}></Route>
        <Route path="/tool-details" element={<h1>Tool Details</h1>}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
