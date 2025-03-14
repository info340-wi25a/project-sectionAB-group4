import React, { useState } from "react";

function Filter({ onFilterApply }) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("all");

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleLocationChange = (event) =>  {
    setLocation(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };
  
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    const filterValues = {
      keyword,
      location,
      minPrice: minPrice ? Number(minPrice) : 0,
      maxPrice: maxPrice ? Number(maxPrice) : Infinity,
      category,
    };
    onFilterApply(filterValues);
  };

  const handleReset = (event) => {
    setKeyword("");
    setLocation("");
    setMinPrice(0);
    setMaxPrice(Infinity);
    setCategory("all");

    onFilterApply({
      keyword: "",
      location: "",
      minPrice: 0,
      maxPrice: Infinity,
      category: "all",
    });
  }

  return (
    <div className="filter-section">
      <h2>Apply Filters</h2>
      <form className="filter-container">

      <div className="filter">
          <label htmlFor="keyword">Keyword:</label>
          <input
            type="text"
            id="keyword"
            name="keyword"
            placeholder="Enter Keyword"
            value={keyword}
            onChange={handleKeywordChange}
          />
        </div>

        <div className="filter">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter City"
            value={location}
            onChange={handleLocationChange}
          />
        </div>

        <div className="filter">
          <label htmlFor="min-price">Minimum Price ($):</label>
          <input
            type="number"
            id="min-price"
            name="min-price"
            placeholder="e.g. 10"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
        </div>

        <div className="filter">
          <label htmlFor="max-price">Maximum Price ($):</label>
          <input
            type="number"
            id="max-price"
            name="max-price"
            placeholder="e.g. 100"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>

        <div className="filter">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="all">All</option>
            <option value="power-tools">Power Tools</option>
            <option value="hand-tools">Hand Tools</option>
            <option value="automotive">Automotive</option>
            <option value="gardening">Gardening</option>
            <option value="construction">Construction</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>
        </div>

        <button type="button" onClick={handleSubmit}>Apply Filters</button>
        <button type="button" onClick={handleReset}>Reset Filters</button>
      </form>
    </div>
  );
}

export default Filter;
