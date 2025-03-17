import React from "react";
import "../index.css"
import { useNavigate } from "react-router";
import placeholderImage from "../img/placeholder-tool.jpg";

function UserListings({tools, user, deleteListing, setEditingTool}) {
    const myTools = tools.filter((tool) => {
        return tool.lister_id === user.uid;
    });

    let myToolCards = "You currently have no tool listings!";
    if (myTools.length > 0) {
        myToolCards = myTools.map((tool) => <ListingCard key={tool.id} myTool={tool} deleteListing={deleteListing} setEditingTool={setEditingTool} />);
    }

    return(
        <div className="my-listings-page">
            <div className="my-listings">
                <section id="my-listings">
                    <div className="header-listings">
                        <h1>My Listings</h1>
                    </div>
                </section>
                <div className="active-listings">
                    <section id="active-listings">
                        <h2>{`Active (${myTools.length} Listings)`}</h2>
                    </section>
                    {myToolCards}
                </div>
            </div>
        </div>
    )
}

function ListingCard({myTool, deleteListing, setEditingTool}) {
    const navigate = useNavigate();

    let isRented = "";
    if (myTool.isAvailable) {
        isRented = "Available";
    } else {
        isRented = "Currently Rented";
    }

    let imageSrc = myTool.imageBase64;
    if (imageSrc === "") {
        imageSrc = null;
    }

    const handleDelete = () => {
        deleteListing(myTool.id);
    }

    const handleEdit = () => {
        if (myTool.isAvailable) {
            setEditingTool(myTool);
            navigate("/edit-listing");
        } else {
            alert("You cannot edit a listing that is currently rented");
        }
    }

    return (
        <section id="tool-section">
        <div className="tool-img">
            <img src={imageSrc || placeholderImage} style={{float: 'left'}} alt={myTool.toolName || "Tool image"}/>
        </div>
        <div className="tool-details">
            <div className="tool-name">
                <h3>{myTool.toolName}</h3>
            </div>
            <div className="tool-desc">
                <p>{`$${myTool.pricePerDay}/day`}</p>
                <p>{isRented}</p>
            </div>
        </div>
        <div className="listing-options">
            <button className="edit-listing" type="button" onClick={handleEdit}>Edit</button>
            <button className="delete-listing" type="button" onClick={handleDelete}>Delete</button>
        </div>
    </section>
    )
}

export default UserListings