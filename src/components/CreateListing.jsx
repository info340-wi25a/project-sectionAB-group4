import React, { useState } from "react";
import { Navigate } from "react-router";

export function CreateListing({ user, saveListing, tool }) {

  const [toolName, setToolName] = useState(tool ? tool.toolName : "");
  const [pricePerDay, setPricePerDay] = useState(tool ? tool.pricePerDay : "");
  const [location, setLocation] = useState(tool ? tool.location : "");
  const [pictures, setPictures] = useState(tool ? tool.imageBase64 : null);
  const [category, setCategory] = useState(tool ? tool.category : "");
  const [description, setDescription] = useState(tool ? tool.description : "");
  const [condition, setCondition] = useState(tool ? tool.condition : "");
  const [redirect, setRedirect] = useState(false);

  function handlePictureUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setPictures(e.target.result); // Store Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (!user) {
      alert("You must be logged in to create a listing.");
      return;
    }

    const newListing = {
      id: tool ? tool.id : null,
      toolName,
      category,
      condition,
      dateListed: tool ? tool.dateListed : new Date().toISOString(),
      dateRented: null,
      description,
      imageBase64: pictures || "",
      isAvailable: true,
      lister_id: tool ? tool.lister_id : user.uid,
      location,
      pricePerDay: parseFloat(pricePerDay),
      renter_id: -1,
    };

    try {
      const listingId = await saveListing(newListing);
      newListing.listingId = listingId;
      alert(tool ? "Listing updated successfully!" : "Listing created successfully!");
      setRedirect(true);
    } catch (error) {
      console.error("Error saving listing:", error);
      alert("An error occurred while saving the listing.");
    }
  }

  if (redirect) {
    return <Navigate to="/user-listings" />;
  }

  return (
    <div className="create-listing">
      <section id="create-listing-header">
        <div className="header-listings">
          <h1>{tool ? "Edit a listing!" : "Create a New Listing!"}</h1>
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
            <input type="file" size={8} id="listing-pictures" name="pictures" accept="image/*" onChange={handlePictureUpload} />

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
            <textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Provide additional details (optional)" name="description" className="add-description" id="listing-description"></textarea>

            <button type="submit" id="submit-listing-btn" className="btn-primary">{tool ? "Edit Listing" : "Submit Listing"}</button>
          </fieldset>

        </form>
      </section>
    </div>
  )
}