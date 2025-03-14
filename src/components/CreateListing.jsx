import React, { useState } from "react";
import { Navigate } from "react-router";


export function CreateListing({ user, toolListings, setToolListings, addListing }) {
  const [toolName, setToolName] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [location, setLocation] = useState("");
  const [pictures, setPictures] = useState(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handlePictureUpload = (event) => {
    if (event.target.files.length > 0) {
      setPictures(event.target.files[0]); // Store a single file
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user) {
      alert("You must be logged in to create a listing.");
    } else {

      // Create listing object following Firebase schema
      const newListing = {
        toolName,
        category,
        condition,
        dateListed: new Date().toISOString(),
        dateRented: null, // Note rented initially
        description,
        imageUrl: "", // Will later be updated with Firebase Storage URL
        isAvailable: true, // Tool is initially available
        lister_id: user.userId, // Owner ID
        location,
        pricePerDay: parseFloat(pricePerDay),
        renter_id: -1, // No renter initially
      };
      // console.log([...toolListings, newListing]);
      // setToolListings([...toolListings, newListing]); // Update state with new listing
      // alert("Listing created successfully!");
      // setRedirect(true);

      try {
        const listingId = await addListing(newListing); // Add to Firebase
        newListing.listingId = listingId; // Assign Firebase ID

        setToolListings([...toolListings, newListing]); // Update React state
        alert("Listing created successfully!");
        setRedirect(true);
      } catch (error) {
        console.error("Error adding listing:", error);
        alert("An error occurred while creating the listing.");
      }
    };
  }

  // const [formData, setFormData] = useState({
  //   title: "",
  //   price: "",
  //   location: "",
  //   pictures: [],
  //   category: ""
  // });

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Gather form values on submission
  //   const form = event.target;
  //   const newListing = {
  //     title: form.title.value,
  //     price: form.price.value,
  //     location: form.location.value,
  //     pictures: form.pictures.files,
  //     category: form.category.value
  //   };

  //   setFormData(newListing); // Update state only on submit
  //   console.log("Listing Submitted:", newListing);
  // };

  if (redirect) {
    return <Navigate to="/user-listings" />;
  }

  return (
    <div className="create-listing">
      <section id="create-listing-header">
        <div className="header-listings">
          <h1>Create a New Listing</h1>
        </div>
      </section>

      <section id="create-listing-form-section">
        <form id="create-listing-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Listing Details</legend>

            <label htmlFor="listing-title">Tool Name & Brand:</label>
            <input type="text" value={toolName} onChange={(event) => setToolName(event.target.value)} id="listing-title" name="title" placeholder="e.g., DeWalt Cordless Drill" required />

            <label htmlFor="listing-price">Price per Day ($):</label>
            <input type="number" value={pricePerDay} onChange={(event) => setPricePerDay(event.target.value)} id="listing-price" name="price" placeholder="Enter rental price" required />

            <label htmlFor="listing-pictures">Upload Pictures:</label>
            <input type="file" id="listing-pictures" name="pictures" accept="image/*" onChange={handlePictureUpload} />

            <label htmlFor="listing-location">Location:</label>
            <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} id="listing-location" name="location" placeholder="Enter city or address" required/>

            <label htmlFor="category">Category:</label>
            <select value={category} onChange={(event) => setCategory(event.target.value)} id="category" name="category" required className="category-dropdown">
              <option value="">Select a category</option>
              <option value="power-tools">Power Tools</option>
              <option value="hand-tools">Hand Tools</option>
              <option value="automotive">Automotive</option>
              <option value="gardening">Gardening</option>
              <option value="construction">Construction</option>
              <option value="plumbing">Plumbing</option>
              <option value="electrical">Electrical</option>
              <option value="miscellaneous">Miscellaneous</option>
            </select>

            <label htmlFor="listing-condition">Condition:</label>
            <select value={condition} onChange={(event) => setCondition(event.target.value)} id="condition" name="condition" required className="condition-dropdown">
            <option value="">Select a condition</option>
              <option value="new">New</option>
              <option value="like-new">Like New</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="used">Used</option>
            </select>

            <label htmlFor="tool-description">Description:</label>
            <textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Provide additional details (optional)" name="description" id="listing-description"></textarea>

            <button type="submit" id="submit-listing-btn" className="btn-primary">Submit Listing</button>
          </fieldset>

        </form>
      </section>
    </div>
  )
}