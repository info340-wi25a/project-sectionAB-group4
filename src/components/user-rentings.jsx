import React from "react";
import "../index.css"
import wet_vacuum from "../assets/img/wet-vacuum.jpg"
import power_drill2 from "../assets/img/power-drill2.jpg"
import electric_saw from "../assets/img/electric-saw.jpg"
import concrete_saw from "../assets/img/concrete-saw.jpg"
import OptionComponent from "./options";

function UserRentings() {
    return(
        <div>
            <header>
                <nav className="navbar">
                    <a href="index.html" className="logo">Rent-A-Tool</a>
                    <ul className="nav-links">
                        <li><a href="index.html#browse-tools" className="nav-link">Browse Tools</a></li>
                        <li><a href="user-listings.html" className="nav-link">Your Listings</a></li>
                        <li><a href="user-rentings.html" className="nav-link">Your Rentings</a></li>
                        <li><a href="create-listing.html" className="nav-link">Create Listings</a></li>
                    </ul>

                    <div className="cta">
                        <a id="login-link" href="login.html" className="btn">Login</a>
                        <a id="signup-link" href="signup.html" className="btn btn-primary">Sign Up</a>
                        <a id="logout-link" href="logout.html" className="btn">Log Out</a>
                    </div>
                </nav>
            </header>

            <div className ="my-rentings-page">
                <div className="my-rentings">
                    <section id="my-rentings">
                        <div className="header-rentings">
                            <h1>My Rentings</h1>
                        </div>
                    </section>
                    <div className="current-bookings">
                        <section id="current-bookings">
                            <h2>Current (2 Bookings)</h2>
                        </section>
                        <section id="rented-1">
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
                            <OptionComponent/>
                        </section>
                        <section id="tool-2">
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
                            <OptionComponent/>
                        </section>
                    </div>
                    <div className="pending-bookings">
                        <section id="pending-bookings">
                            <h2>Pending (1 Booking)</h2>
                        </section>
                        <section id="pending-1">
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
                            <OptionComponent/>
                        </section>
                    </div>
                    <div className="booking-history">
                        <section id="booking-history">
                            <h2>History</h2>
                        </section>
                        <section id="history-1">
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
                            <OptionComponent/>
                        </section>
                    </div>
                </div>
            </div>
            <footer>
                <p>&copy; 2025 Rent-A-Tool. All rights reserved</p>
            </footer>
        </div>
    )
}

export default UserRentings