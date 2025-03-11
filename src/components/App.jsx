import { useState } from 'react'
import { Routes, Route, Navigate, Outlet} from 'react-router';
import { NavBar } from './Nav';
import { Footer } from './Footer';
import HomePage from './HomePage'
import UserListings from './user-listings'
import UserRentings from './user-rentings'
import { CreateListing } from './CreateListing';
import BookingDetails from './booking-details'
import ToolDetails from './tool-details'
import Signup from './Signup';
import Login from './Login';

import SAMPLE_TOOLS from '../data/sample_tools.json';

function RequireAuth({ user }) {
  if(!user) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
}


function App(props) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <div>
      <header>
        <NavBar user={user} setUser={setUser} />
      </header>

      {/* Routes Defined Here */}
      <Routes>
        {/* Public Routes */}
        <Route path="/home" element={<HomePage tools={SAMPLE_TOOLS} user={user} />} />
        <Route path="/browse-tools" element={<HomePage tools={SAMPLE_TOOLS} user={user} />} />
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
        <Route path="/login" element={<Login users={users} setUser={setUser} />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth user={user} />}>
          <Route path="/user-listings" element={<UserListings user={user} />} />
          <Route path="/user-rentings" element={<UserRentings user={user} />} />
          <Route path="/create-listings" element={<CreateListing user={user} />} />
          <Route path="/booking-details" element={<BookingDetails user={user} />} />
          <Route path="/tool-details" element={<ToolDetails user={user} />} />
        </Route>

        {/* Redirect All Unknown Routes */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
{/*
      <Routes>
        <Route path="/home" element={<HomePage tools={SAMPLE_TOOLS} />}></Route>
        <Route path="/browse-tools" element={<HomePage tools={SAMPLE_TOOLS} />}></Route>
        <Route path="/user-listings" element={<UserListings />}></Route>
        <Route path="/user-rentings" element={<UserRentings />}></Route>
        <Route path="/create-listings" element={<CreateListing />}></Route>
        <Route path="/booking-details" element={<BookingDetails />}></Route>
        <Route path="/tool-details" element={<ToolDetails />}></Route>
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />}></Route>
        <Route path="/login" element={<Login users={users} />} />
        <Route path="*" element={<Navigate to="/home"/>}></Route>
      </Routes> */}

      <Footer />
    </div>
  );
}

export default App;
