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
import { ref, onValue, push, set, remove, update } from 'firebase/database';
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

const editListing = async (listing) => {
  const listingRef = ref(db, `listings/${listing.id}`);
  await update(listingRef, listing);
}

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [editingTool, setEditingTool] = useState(null);
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
        <Route path="/home" element={<HomePage tools={tools} />} />
        <Route path="/browse-tools" element={<HomePage tools={tools} />} />
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
        <Route path="/login" element={<Login users={users} setUser={setUser} />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth user={user} />}>
          <Route path="/user-listings" element={<UserListings tools={tools} user={user} deleteListing={removeListing} setEditingTool={setEditingTool} />} />
          <Route path="/user-rentings" element={<UserRentings user={user} />} />
          <Route path="/create-listing" element={<CreateListing user={user} saveListing={addListing} />} />
          <Route path="/booking-details" element={<BookingDetails user={user} />} />
          <Route path="/tool-details/:toolId" element={<ToolDetails user={user} tools={tools} />} />
          <Route path="/edit-listing" element={<CreateListing user={user} saveListing={editListing} tool={editingTool} />} />
        </Route>

        {/* Redirect All Unknown Routes */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
