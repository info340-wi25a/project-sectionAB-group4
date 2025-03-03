import React, { useState } from "react";

export function CreateListing() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    pictures: [],
    category: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Gather form values on submission
    const form = event.target;
    const newListing = {
      title: form.title.value,
      price: form.price.value,
      location: form.location.value,
      pictures: form.pictures.files,
      category: form.category.value
    };

    setFormData(newListing); // Update state only on submit
    console.log("Listing Submitted:", newListing);
  };

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
            <input type="text" id="listing-title" name="title" placeholder="e.g., DeWalt Cordless Drill" required />

            <label htmlFor="listing-price">Price per Day ($):</label>
            <input type="number" id="listing-price" name="price" placeholder="Enter rental price" required />

            <label htmlFor="listing-pictures">Upload Pictures:</label>
            <input type="file" id="listing-pictures" name="pictures" accept="image/*" multiple />

            <label htmlFor="listing-location">Location:</label>
            <input type="text" id="listing-location" name="location" placeholder="Enter city or address" required/>

            <label htmlFor="category">Category:</label>
            <select id="category" name="category" value={formData.category.value} required className="category-dropdown">
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

            <button type="submit" id="submit-listing-btn" className="btn-primary">Submit Listing</button>
          </fieldset>

        </form>
      </section>
    </div>
  )
}