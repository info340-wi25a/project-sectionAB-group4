import React from 'react';
import { Link } from 'react-router';

export default function HomePage(props) {
    return (
        <div className='main-page-container'>
            <Filter />
            <ToolList tools={props.tools} />
        </div>
    )
}

function ToolList(props) {
    const tools = props.tools || [];
    let toolCards = tools.map((tool) => {
        return <ToolCard key={tool.name} tool={tool} />;
    });

    return (
        <div id='browse-tools' className='browse-section'>
            <h1>Browse Tools</h1>
            <div className='marketplace'>
                {toolCards || 'No tools found'}
            </div>
        </div>
    );
}

function ToolCard(props) {
    const tool = props.tool;
    return (
        // <Link to={`/tools/${tool.name}`}>
            <div className='listing-card'>
                <img src={tool.image} alt={tool.name} />
                <div className='listing-details'>
                    <h3>{tool.name}</h3>
                    <p className='price'>{`$${tool.price}/day`}</p>
                    <p className='description'>{tool.description}</p>
                </div>
            </div>
        // </Link>
    );
}

function Filter() {
    return (
        <div className='filter-section'>
        <h2>Apply Filters</h2>
            <form className='filter-container'>
                <div className='filter'>
                    <label for="location">Location:</label>
                    <input type="text" id="location" name="location" placeholder="Enter City" />
                </div>

                <div className='filter'>
                    <label for="min-price">Minimum Price ($):</label>
                    <input type="number" id="min-price" name="min-price" placeholder="e.g. 10"/>
                </div>

                <div className='filter'>
                    <label for="max-price">Maximum Price ($):</label>
                    <input type="number" id="max-price" name="max-price" placeholder="e.g. 100"/>
                </div>

                <div className='filter'>
                    <label for="category">Category:</label>
                    <select id="category" name="category">
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

                <button type="submit">Apply Filters</button>
            </form>
        </div>
    )
}