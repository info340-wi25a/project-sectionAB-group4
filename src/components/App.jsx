import { useState } from 'react'
import SAMPLE_TOOLS from '../data/sample_tools.json';
import HomePage from './HomePage'
import UserListings from './user-listings'
import UserRentings from './pages/user-rentings'

function App() {
  return (
    <body>
      <HomePage tools={SAMPLE_TOOLS} />
      <Routes>
        <Route path='user-listing' element={<UserListings/>}/>
        <Route path='user-renting' element={<UserRentings/>}/>
    </Routes>
    </body>
  )
}

export default App
