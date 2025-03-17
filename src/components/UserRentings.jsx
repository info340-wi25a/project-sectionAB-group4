import React from "react";
import "../index.css"
import wet_vacuum from "../img/wet-vacuum.jpg"
import power_drill2 from "../img/power-drill2.jpg"
import electric_saw from "../img/electric-saw.jpg"
import concrete_saw from "../img/concrete-saw.jpg"

function UserRentings({tools}) {
    console.log(tools)
    return(
        <div>
            <div className ="my-rentings-page">
                <div className="my-rentings">
                    <section id="my-rentings">
                        <div className="header-rentings page-header">
                            <h1>My Rentings</h1>
                        </div>
                    </section>
                    <div className="current-bookings">
                        <section id="current-bookings">
                            <h2>Current (2 Bookings)</h2>
                        </section>
                        <section id="tool-section">
                            <div className="tool-img">
                                <img src={wet_vacuum} style={{float: 'left'}} alt="Vacmaster 5 Gallon Wet/Dry Vacuum"/>
                            </div>
                            <div className="tool-details">
                                <div className="tool-name">
                                    <h3>Vacmaster 5 Gallon Wet/Dry Vacuum</h3>
                                </div>
                                <div className="tool-desc">
                                    <p>02-18-2025 to 02-20-2025</p>
                                    <p>In use</p>
                                </div>
                            </div>
                        </section>
                        <section id="tool-section">
                            <div className="tool-img">
                                <img src={power_drill2} style={{float: 'left'}} alt="MPT Power Drill Pro"/>
                            </div>
                            <div className="tool-details">
                                <div className="tool-name">
                                    <h3>MPT Power Drill Pro</h3>
                                </div>
                                <div className="tool-desc">
                                    <p>02-18-2025 to 02-20-2025</p>
                                    <p>In use</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="pending-bookings">
                        <section id="pending-bookings">
                            <h2>Pending (1 Booking)</h2>
                        </section>
                        <section id="tool-section">
                            <div className="tool-img">
                                <img src={electric_saw} style={{float: 'left'}} alt="Bauer Circular Saw"/>
                            </div>
                            <div className="tool-details">
                                <div className="tool-name">
                                    <h3>Bauer 14 Amp 7-1/4 in. Circular Saw</h3>
                                </div>
                                <div className="tool-desc">
                                    <p>02-14-2025 to 02-16-2025</p>
                                    <p>Waiting for approval</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="booking-history">
                        <section id="booking-history">
                            <h2>History</h2>
                        </section>
                        <section id="tool-section">
                            <div className="tool-img">
                                <img src={concrete_saw} style={{float: 'left'}} alt="Neatoom Electric Concrete Saw"/>
                            </div>
                            <div className="tool-details">
                                <div className="tool-name">
                                    <h3>Neatoom Electric Concrete Saw</h3>
                                </div>
                                <div className="tool-desc">
                                    <p>12-14-2024 to 12-19-2024</p>
                                    <p>Completed</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserRentings