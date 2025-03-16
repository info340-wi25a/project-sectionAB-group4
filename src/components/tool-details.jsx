import React from "react";
import { useParams, useNavigate, Link } from 'react-router';
import { ref, update } from "firebase/database";
import { db } from "../main";
import arcWeldingImage from "../img/arc_welding_machine.jpg";
import "../index.css";

function ToolDetails( { tools, user } ) {
    const { toolId } = useParams();
    const navigate = useNavigate();

    const tool = tools.find((t) => t.id === toolId );

    if (!tool) {
        return <p>Tool not found</p>; // Tool does not exist
    }

    const handleBook = async () => {
        if (!user) {
            alert("You must be logged in to rent this tool.");
        } else {
            if (!tool.isAvailable) {
                alert("This tool is already booked..");
            }
            const toolRef = ref(db, `listings/${toolId}`);

            try {
                await update(toolRef, {
                    isAvailable: false,
                    renter_id: user.uid,
                });

                alert("Booking successful! The tool is now rented to you.");
                navigate("/home");
            } catch (error) {
                console.error("Error booking tool:", error);
                alert("An error occurred while booking the tool. Please try again.");
            }
        }
    }

    return (
        <div className="tool-details-container">
            <ToolImage />
            <ToolInfo toolName={tool.toolName} pricePerDay={tool.pricePerDay} isAvailable={tool.isAvailable} location={tool.location} handleBook={handleBook}/>
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

function ToolInfo({ toolName, pricePerDay, isAvailable, location, handleBook }) {
    return (
        <div className="tool-info">
            <h1>Tool Details</h1>
            <h2>{toolName}</h2>
            <p className="tool-price" id="tool-price">${pricePerDay}/day</p>
            <p className="tool-status" id="tool-status">Status: {isAvailable ? "Available" : "Rented"}</p>
            <p className="tool-location" id="tool-location">Location:{location}</p>
            <button onClick={handleBook} disabled={!isAvailable} className="rent-button">
                {isAvailable ? "Rent This Tool" : "Unavailable"}
            </button>
        </div>
    )
}


export default ToolDetails;