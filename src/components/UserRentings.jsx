import React, { useState, useEffect }from "react";
import { ref, onValue, update } from "firebase/database";
import { db } from "../main";
import "../index.css";
import placeholderImage from "../img/placeholder-tool.jpg";


function UserRentings({ user, tools }) {
    const [currentBookings, setCurrentBookings] = useState([]);
    const [pastBookings, setPastBookings] = useState([]);

    useEffect(() => {
        if (!user) return;

        const bookingsRef = ref(db, "bookings");

        const unregisterFunction = onValue(bookingsRef, (snapshot) => {
            const bookingsValue = snapshot.val();
            if (!bookingsValue) {
                setCurrentBookings([]);
                setPastBookings([]);
                return;
            }

            const allBookingKeys = Object.keys(bookingsValue);
            const allBookingsArray = allBookingKeys.map((key) => ({
                id: key,
                ...bookingsValue[key],
            }));

            const userBookings = allBookingsArray.filter((booking) => booking.renter_id === user.uid);

            setCurrentBookings(userBookings.filter((booking) => booking.date_returned === ""));
            setPastBookings(userBookings.filter((booking) => booking.date_returned !== ""));

        });

        return unregisterFunction;

    }, [user]);

    async function handleReturnTool(booking) {
        const { listing_id } = booking;
        const toolRef = ref(db, `listings/${listing_id}`);
        const bookingRef = ref(db, `bookings/${booking.id}`);

        try {
            await update(toolRef, {
                isAvailable: true,
                renter_id: -1,
            });

            await update(bookingRef, {
                date_returned: new Date().toISOString(),
            });

            alert("Tool succesfully returned!");
        } catch (error) {
            alert("Error returning tool: " + error.message);
        }
    };

    let currUserBookingsCards = "No current bookings";
    if (currentBookings.length > 0) {
        currUserBookingsCards = currentBookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} tools={tools} onReturn={handleReturnTool} />
        ));
    }

    let pastUserBookingsCards = "No past bookings";
    if (pastBookings.length > 0) {
        pastUserBookingsCards = pastBookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} tools={tools} />
        ));
    }

    return (
        <div className ="my-rentings-page">
            <div className="my-rentings">
                <section id="my-rentings">
                    <div className="header-rentings page-header">
                        <h1>My Rentings</h1>
                    </div>
                </section>

                <div className="current-bookings">
                    <section id="current-bookings">
                        <h2>Current ({currentBookings.length} Bookings)</h2>
                    </section>
                    {currUserBookingsCards}
                </div>

                <div className="booking-history">
                    <section id="booking-history">
                        <h2>History</h2>
                    </section>
                    {pastUserBookingsCards}
                </div>
            </div>
        </div>
    );
}

function BookingCard({ booking, tools, onReturn }) {
    const tool = tools.find((t) => t.id === booking.listing_id) || {};

    let showReturnButton = false;

    if (!booking.date_returned && onReturn) {
        showReturnButton = true;
    }

    const bookedStatus = booking.date_returned ? "Returned on " +  new Date(booking.date_returned).toLocaleDateString() : "In use";

    return (
        <section id="tool-section">
            <div className="tool-img">
                <img src={tool.imageBase64 || placeholderImage} alt={tool.toolName || "Tool image"} />
            </div>
            <div className="tool-details">
                <div className="tool-name">
                    <h3>{tool.toolName || "Booking ID#: " + booking.id || "Unknown Tool"}</h3>
                </div>
                <div className="tool-desc">
                    <p>Booked on: {new Date(booking.date_booked).toLocaleDateString()}</p>
                    <p>{bookedStatus}</p>
                </div>
            </div>
            {showReturnButton ? (
                <button onClick={() => onReturn(booking)} className="return-tool-btn">
                    Return Tool
                </button>
            ) : null}
        </section>
    )
}


export default UserRentings