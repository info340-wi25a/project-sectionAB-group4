import { useState } from 'react'
import { Route, Routes } from 'react-router'
import UserListings from './pages/user-listings'
import UserRentings from './pages/user-rentings'

function App() {
  return (
    <Routes>
      <Route path='user-listing' element={<UserListings/>}/>
      <Route path='user-renting' element={<UserRentings/>}/>
    </Routes>
  )
}

export default App
