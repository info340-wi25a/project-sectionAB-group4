import { useState, useEffect } from 'react'
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
import { ref, onValue, push, set } from 'firebase/database';
import { db } from '../main';

function RequireAuth({ user }) {
  if(!user) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
}

const addListing =  async (newListing) => {
  const newListingRef = push(ref(db, "listings"));
  const newListingWithId = { ...newListing, id: newListingRef.key };
  await set(newListingRef, newListingWithId);
  return newListingRef.key;
}

const removeListing = async (listingId) => {
  const listingRef = ref(db, `listings/${listingId}`);
  await remove(listingRef);
}

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [toolListings, setToolListings] = useState([]); // State for tool listings
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const listingsRef = ref(db, 'listings');

    const unregisterFunction = onValue(listingsRef, (snapshot) => {
      const listingsValue = snapshot.val();

      if (!listingsValue) {
        setTools([]);
        return;
      }

      const allListingKeys = Object.keys(listingsValue);
      const allListingsArray = allListingKeys.map((key) => {
        const listingCopy = {...listingsValue[key]};
        listingCopy.id = key;
        return listingCopy;
      });
      setTools(allListingsArray);
    });

    function cleanup() {
      unregisterFunction();
    }
    return cleanup;
  }, []);

  return (
    <div>
      <header>
        <NavBar user={user} setUser={setUser} />
      </header>

      {/* Routes Defined Here */}
      <Routes>
        {/* Public Routes */}
        <Route path="/home" element={<HomePage tools={tools} user={user} />} />
        <Route path="/browse-tools" element={<HomePage tools={tools} user={user} />} />
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
        <Route path="/login" element={<Login users={users} setUser={setUser} />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth user={user} />}>
          <Route path="/user-listings" element={<UserListings user={user} />} />
          <Route path="/user-rentings" element={<UserRentings user={user} />} />
          <Route path="/create-listings" element={<CreateListing user={user} toolListings={toolListings} setToolListings={setToolListings} addListing={addListing} />} />
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
