import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, Outlet} from 'react-router';
import { NavBar } from './Nav';
import { Footer } from './Footer';
import HomePage from './HomePage'
import UserListings from './UserListings'
import UserRentings from './UserRentings'
import { CreateListing } from './CreateListing';
import ToolDetails from './ToolDetails'
import Signup from './Signup';
import Login from './Login';
import { ref, onValue, push, set, remove, update } from 'firebase/database';
import { db } from '../main';
import { auth } from '../main';
import { onAuthStateChanged } from 'firebase/auth';

function RequireAuth({ user }) {
  if(!user) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
}

async function addListing(newListing) {
  try {
    const newListingRef = push(ref(db, "listings"));
    const newListingWithId = { ...newListing, id: newListingRef.key };
    await set(newListingRef, newListingWithId);
    return "Listing successfully created!";
  } catch (error) {
    return error.message;
  }
}

async function removeListing(listingId) {
  try {
    await remove(ref(db, `listings/${listingId}`));
    return "Listing successfully deleted!";
  } catch (error) {
    return "An error occurred while deleting your listing." + error.message;
  }
}

async function editListing(listing) {
  try {
    await update(ref(db, `listings/${listing.id}`), listing);
    return "Listing successfully updated!";
  } catch (error) {
    return error.message;
  }
}

function App() {
  const [user, setUser] = useState(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [editingTool, setEditingTool] = useState(null);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser || null);
      setIsAuthChecked(true);
    });

    return unsubscribe;
  }, []);

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

  if (!isAuthChecked) {
    return <div>Loading...</div>;
  }

  return (
    <div className='main-page'>
      <div className='page-content'>
        <header>
          <NavBar user={user} setUser={setUser} />
        </header>

        <Routes>
          <Route path="/home" element={<HomePage tools={tools} />} />
          <Route path="/browse-tools" element={<HomePage tools={tools} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route element={<RequireAuth user={user} />}>
            <Route path="/user-listings" element={<UserListings tools={tools} user={user} deleteListing={removeListing} setEditingTool={setEditingTool} />} />
            <Route path="/user-rentings" element={<UserRentings user={user} tools={tools}/>} />
            <Route path="/create-listing" element={<CreateListing user={user} saveListing={addListing} />} />
            <Route path="/tool-details/:toolId" element={<ToolDetails user={user} tools={tools} />} />
            <Route path="/edit-listing" element={<CreateListing user={user} saveListing={editListing} tool={editingTool} />} />
          </Route>

          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
      <div className='footer-content'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
