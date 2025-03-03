import React from "react";
import { Link } from 'react-router';
import arcWeldingImage from "../img/arc_welding_machine.jpg";
import "../index.css";

function ToolDetails() {
    return (
        <div className="tool-details-container">
            <ToolImage />
            <ToolInfo />
        </div>
    );
}

function ToolImage() {
    return (
        <div className="tool-img-large">
            <img src={arcWeldingImage} alt="ARC Welding Machine" />
        </div>
    );
}

function ToolInfo() {
    return (
        <div className="tool-info">
            <h1>Tool Details</h1>
            <h2>ARC Welding Machine</h2>
            <p className="tool-price" id="tool-price">$34/day</p>
            <p className="tool-status" id="tool-status">Available</p>
            <p className="tool-location" id="tool-location">University District, Seattle, Washington</p>
            <Link to={'/booking-details'}>
                <button className="rent-button">Rent This Tool</button>
            </Link>
        </div>
    )
}


export default ToolDetails;