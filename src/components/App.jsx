import { useState } from 'react'
import { Routes, Route, Navigate, Link} from 'react-router';
import { NavBar } from './Nav';
import { Footer } from './Footer';
import SAMPLE_TOOLS from '../data/sample_tools.json';
import HomePage from './HomePage'
import UserListings from './user-listings'
import UserRentings from './user-rentings'
import { CreateListing } from './CreateListing';
import BookingDetails from './booking-details'
import ToolDetails from './tool-details'


function App(props) {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      {/* Routes Defined Here */}
      <Routes>
        <Route path="/home" element={<HomePage tools={SAMPLE_TOOLS} />}></Route>
        <Route path="/browse-tools" element={<HomePage tools={SAMPLE_TOOLS} />}></Route>
        <Route path="/user-listings" element={<UserListings />}></Route>
        <Route path="/user-rentings" element={<UserRentings />}></Route>
        <Route path="/create-listings" element={<CreateListing />}></Route>
        <Route path="/booking-details" element={<BookingDetails />}></Route>
        <Route path="/tool-details" element={<ToolDetails />}></Route>
        <Route path="*" element={<Navigate to="/home"/>}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
