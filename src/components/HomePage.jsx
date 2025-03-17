import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import { Link } from "react-router";
import placeholderImage from "../img/placeholder-tool.jpg";

export default function HomePage({ tools }) {
  const [filteredTools, setFilteredTools] = useState(tools);

  function applyFilters(filters) {
    let filtered = [...tools];

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
  // filter only tools that are available before creating cards
  const availableTools = tools.filter((tool) => {
    return tool.isAvailable;
  });

  let toolCards = "No tools found";
  if (availableTools.length > 0) {
    toolCards = availableTools.map((tool) => <ToolCard key={tool.id} tool={tool} />);
  }

  return (
    <div id="browse-tools" className="browse-section">
      <div className="page-header">
        <h1>Browse Tools</h1>
      </div>
      <div className="marketplace">
        {toolCards}
      </div>
    </div>
  );
}

function ToolCard(props) {
    const tool = props.tool;
    return (
        <Link to={`/tool-details/${tool.id}`} className='listing-card'>
          <img src={tool.imageBase64 || placeholderImage} alt={tool.toolName || "Tool image"} />
            <div className='listing-details'>
                <h3>{tool.toolName}</h3>
                <p className='price'>{`$${tool.pricePerDay}/day`}</p>
                <p className='description'>{tool.description}</p>
            </div>
         </Link>
    );
}
