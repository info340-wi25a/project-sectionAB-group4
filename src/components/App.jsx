import { useState } from 'react'
import SAMPLE_TOOLS from '../data/sample_tools.json';
import HomePage from './HomePage'
import UserListings from './user-listings'
import UserRentings from './user-rentings'
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div>
      <Routes>
        <Route path="home" element={<HomePage tools={SAMPLE_TOOLS}/>}/>
        <Route path="user-listing" element={<UserListings/>}/>
        <Route path="user-renting" element={<UserRentings/>}/>
      </Routes>
    </div>
  )
}

export default App
