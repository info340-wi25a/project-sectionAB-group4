import React from "react";
import powerDrilling from "../img/power-drill2.jpg";
import "../index.css"

function BookingDetails() {
    return (
        <div className="booking-details-container">
            <div className="left-column">
                <ToolInfo />
                <BookingInfo />
            </div>
            <div className="right-column">
                <PaymentSelection />
            </div>
        </div>
    )
}


function ToolInfo() {
    return (
        <div>
            <section className="header-section" id="info-recap">
                <h2>Booking Details</h2>
            </section>
            <section id="tool-name-desc">
                <div className="tool-img">
                    <img src={powerDrilling} alt="MPT Power Drill Pro" />
                </div>
                <div className="tool-details">
                    <div className="tool-name">
                        <h3>MPT Power Drill Pro</h3>
                    </div>
                    <div className="tool-desc">
                        <p>Available</p>
                        <p>University District, Seattle, Washington</p>
                    </div>
                </div>
            </section>
        </div>
        
    );
}

function BookingInfo() {
    return (
        <div>
            <section className="header-section" id="select-days">
                <h2>Select the Amount of Days</h2>
            </section>
            <section className="calendar">
                    <div className="date-picker">
                        <label htmlFor="start-date">Start Date: </label>
                        <input type="date" id="start-date" name="start-date" />
                    </div>
                    <div className="date-picker">
                        <label htmlFor="end-date">End Date: </label>
                        <input type="date" id="end-date" name="end-date" />
                    </div>
                </section>
        </div>
    )
}

function PaymentSelection() {
    return (
        <div>
            <section class="header-section" id="pricing-info">
                <h2>Pricing</h2>
            </section>
            <section className="paying">
                <div className="price-info">
                    <p>Price per day: $34</p>
                    <p>Days rented: 3</p>
                    <hr />
                    <p>Total Price: $102</p>
                </div>
                <button className="pay-button">Confirm Payment</button>
            </section>
        </div>
       
    );
}

export default BookingDetails;