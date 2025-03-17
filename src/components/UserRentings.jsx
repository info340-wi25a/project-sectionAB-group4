import React, {useEffect, useState} from "react";
import "../index.css"
import {ref, onValue, update} from "firebase/database";
import { db } from "../main";

function UserRentings({tools, user}) {
    const [bookings, setBookings] = useState([])
    const dataBooking = bookings.map(booking => {
        const existingBookings = tools.find(tool => {
            return booking.listing_id === tool.id
        })
        if (existingBookings) {
            return booking
        }
        return null
    }).filter(item => item)
    const currentBookings = dataBooking.filter(item => !item.date_returned)
    const historyBookings = dataBooking.filter(item => item.date_returned)
    const bookingCollection = ref(db, "bookings")

    useEffect(()=> {
        const getBookings = () => {
            onValue(bookingCollection, (snapshot) => {
                const data = snapshot.val()
                const dataBooking = Object.keys(data).map(key => {
                    return {
                        id:key,
                        ...data[key]
                    }
                })
                setBookings(dataBooking)
            })
        }
        getBookings()
    },[])

    const returnBooking = async (booking) => {
      const listingRef = ref(db, `bookings/${booking.id}`);
      await update(listingRef, {...booking, date_returned:new Date()});
    }

    const CurrentBooking = ({type}) => {
        const isCurrent = type === "current"
        if (isCurrent) {
            return (
                <div>
                    {currentBookings.map((val) => {
                        const existingBookings = tools.find(tool => {
                            return val.listing_id === tool.id
                        })
                        return (
                            <section id="tool-section">
                                <div className="tool-img">
                                    <img src={existingBookings.imageBase64} style={{float: 'left'}} alt={existingBookings.toolName}/>
                                </div>
                                <div className="tool-details">
                                    <div className="tool-name">
                                        <h3>{existingBookings.toolName}</h3>
                                    </div>
                                    <div className="tool-desc">
                                        <p>{val.date_booked}</p>
                                    </div>
                                </div>
                                <div className="listing-options">
                                    <button className="edit-listing" type="button" onClick={() => returnBooking(val)}>Return Tool</button>
                                </div>
                            </section>
                        )
                    })}
                </div>
            )
        }

        return (
            <div>
                {historyBookings.map((val) => {
                    const existingBookings = tools.find(tool => {
                        return val.listing_id === tool.id
                    })
                    return (
                        <section id="tool-section">
                            <div className="tool-img">
                                <img src={existingBookings.imageBase64} style={{float: 'left'}} alt={existingBookings.toolName}/>
                            </div>
                            <div className="tool-details">
                                <div className="tool-name">
                                    <h3>{existingBookings.toolName}</h3>
                                </div>
                                <div className="tool-desc">
                                    <p>{val.date_booked}</p>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
        )
    }

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
                            <h2>Current ({currentBookings.length} Bookings)</h2>
                        </section>
                        <CurrentBooking type= "current"/>
                    </div>
                    <div className="booking-history">
                        <section id="booking-history">
                            <h2>History</h2>
                        </section>
                        <CurrentBooking type= "history"/>
                    </div>
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