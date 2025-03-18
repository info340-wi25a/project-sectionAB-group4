import React from "react";
import { useParams, useNavigate, Link } from 'react-router';
import { ref, update, push, set } from "firebase/database";
import { db } from "../main";
import "../index.css";
import placeholderImage from "../img/placeholder-tool.jpg";

function ToolDetails( { tools, user } ) {
    const { toolId } = useParams();
    const navigate = useNavigate();

    const tool = tools.find((t) => t.id === toolId );

    if (!tool) {
        return <p>Tool not found</p>;
    }

    async function handleBook() {
        if (!user) {
            alert("You must be logged in to rent this tool.");
        } else {
            if (!tool.isAvailable) {
                alert("This tool is already booked..");
            }
            const toolRef = ref(db, `listings/${toolId}`);
            const bookingsRef = push(ref(db, "bookings"));

            const newBooking = {
                date_booked: new Date().toISOString(),
                date_returned: "",
                lister_id: tool.lister_id,
                listing_id: tool.id,
                renter_id: user.uid,
            };

            try {
                await update(toolRef, {
                    isAvailable: false,
                    renter_id: user.uid,
                });

                await set(bookingsRef, newBooking);

                alert("Booking successful! The tool is now rented to you.");
                navigate("/home");
            } catch (error) {
                alert("Error booking tool: " + error.message);
            }
        }
    }

    return (
        <div className="tool-details-container">
            <ToolImage imageBase64={tool.imageBase64} toolName={tool.toolName} />
            <ToolInfo toolName={tool.toolName} pricePerDay={tool.pricePerDay} isAvailable={tool.isAvailable} location={tool.location} handleBook={handleBook}/>
        </div>
    );
}

function ToolImage({ imageBase64, toolName }) {
    return (
        <div className="tool-img-large">
            <img src={imageBase64 || placeholderImage} alt={toolName || "Tool image"} />
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
            <p className="tool-location" id="tool-location">Location: {location}</p>
            <button onClick={handleBook} disabled={!isAvailable} className="rent-button">
                {isAvailable ? "Rent This Tool" : "Unavailable"}
            </button>
        </div>
    )
}


export default ToolDetails;