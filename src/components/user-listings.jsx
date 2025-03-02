import React from "react";
import "../index.css"
import arc_welding from "../img/arc_welding_machine.jpg"
import power_washer from "../img/power-washer.jpg"
import power_drill from "../img/power-drill.jpg"
import lawn_mower from "../img/lawn-mower.jpg"
import sander from "../img/sander.jpg"
import angle_grinder from "../img/angle-grinder.jpg"
import OptionComponent from "./options";

function UserListings() {
    return(
        <div>
            <div className="my-listings-page">
                <div className="my-listings">
                    <section id="my-listings">
                        <div className="header-listings">
                            <h1>My Listings</h1>
                        </div>
                    </section>
                    <div className="active-listings">
                        <section id="active-listings">
                            <h2>Active (6 Listings)</h2>
                        </section>
                        <section id="tool-1">
                            <div className="tool-img">
                                <img src={arc_welding} style={{float: 'left'}} alt="ARC Welding Machine"/>
                            </div>
                            <div className="tool-details">
                                <div className="tool-name">
                                    <h3>ARC Welding Machine</h3>
                                </div>
                                <div className="tool-desc">
                                    <p>$35/day</p>
                                    <p>Rented</p>
                                </div>
                            </div>
                            <OptionComponent/>
                        </section>
                        <section id="tool-2">
                            <div className="tool-img">
                                <img src={power_washer} style={{float: 'left'}} alt="Draper Pressure Washer"/>
                            </div>
                            <div className="tool-details">
                                <div className="tool-name">
                                    <h3>Drapper Power Washer, 2200W, 165bar</h3>
                                </div>
                                <div className="tool-desc">
                                    <p>$45/day</p>
                                    <p>Available</p>
                                </div>
                            </div>
                            <OptionComponent/>
                        </section>
                        <section id="tool-3">
                            <div className="tool-img">
                                <img src={power_drill} style={{float: 'left'}} alt="BLACK+DECKER 20V Max Cordless Drill"/>
                            </div>
                            <div className="tool-details">
                                <div className="tool-name">
                                    <h3>BLACK+DECKER 20V Max Cordless Drill</h3>
                                </div>
                                <div className="tool-desc">
                                    <p>$25/day</p>
                                    <p>Available</p>
                                </div>
                            </div>
                            <OptionComponent/>
                        </section>
                        <section id="tool-4">
                            <div className="tool-img">
                                <img src={lawn_mower} style={{float: 'left'}} alt="BILT HARD Gas Lawn Mower"/>
                            </div>
                            <div className="tool-details">
                                <div className="tool-name">
                                    <h3>BILT HARD Gas Lawn Mower 20 inch</h3>
                                </div>
                                <div className="tool-desc">
                                    <p>$40/day</p>
                                    <p>Available</p>
                                </div>
                            </div>
                            <OptionComponent/>
                        </section>
                        <section id="tool-5">
                            <div className="tool-img">
                                <img src={sander} style={{float: 'left'}} alt="MIRKA Sander"/>
                            </div>
                            <div className="tool-details">
                                <div className="tool-name">
                                    <h3>MIRKA Sander</h3>
                                </div>
                                <div className="tool-desc">
                                    <p>$20/day</p>
                                    <p>Rented</p>
                                </div>
                            </div>
                            <OptionComponent/>
                        </section>
                        <section id="tool-6">
                            <div className="tool-img">
                                <img src={angle_grinder} style={{float: 'left'}} alt="TOLSEN Angle Grinder"/>
                            </div>
                            <div className="tool-details">
                                <div className="tool-name">
                                    <h3>TOLSEN Angle Grinder 2400W 230MM</h3>
                                </div>
                                <div className="tool-desc">
                                    <p>$18/day</p>
                                    <p>Available</p>
                                </div>
                            </div>
                            <OptionComponent/>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserListings