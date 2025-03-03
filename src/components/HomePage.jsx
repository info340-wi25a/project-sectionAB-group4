import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import SAMPLE_TOOLS from "../data/sample_tools.json"; // Import directly

export default function HomePage() {
  const [filteredTools, setFilteredTools] = useState(SAMPLE_TOOLS);

  const applyFilters = (filters) => {
    let filtered = [...SAMPLE_TOOLS];


    // Keyword filtering
    if (filters.keyword && filters.keyword.trim() !== "") {
        filtered = filtered.filter((tool) =>
            tool.name.toLowerCase().includes(filters.keyword.toLowerCase())
        );
    }

    // Location filtering
    if (filters.location && filters.location.trim() !== "") {
      filtered = filtered.filter((tool) =>
        tool.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Price filtering
    filtered = filtered.filter((tool) => tool.price >= filters.minPrice && tool.price <= filters.maxPrice);

    // Category filtering
    if (filters.category && filters.category !== "all") {
      filtered = filtered.filter((tool) => tool.category === filters.category);
    }

    setFilteredTools(filtered);
  };

  return (
    <div className="main-page-container">
      <Filter onFilterApply={applyFilters} />
      <ToolList tools={filteredTools} />
    </div>
  );
}

function ToolList({ tools }) {
  return (
    <div id="browse-tools" className="browse-section">
      <h1>Browse Tools</h1>
      <div className="marketplace">
        {tools.length > 0 ? tools.map((tool) => <ToolCard key={tool.name} tool={tool} />) : "No tools found"}
      </div>
    </div>
  );
}

function ToolCard(props) {
    const tool = props.tool;
    return (
        // <Link to={`/tools/${tool.name}`}>
        <Link to={'/tool-details'} className='listing-card'>
            <img src={tool.image} alt={tool.name} />
            <div className='listing-details'>
                <h3>{tool.name}</h3>
                <p className='price'>{`$${tool.price}/day`}</p>
                <p className='description'>{tool.description}</p>
            </div>
         </Link>
    );
}
