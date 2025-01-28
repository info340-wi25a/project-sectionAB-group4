# INFO 340 Project
## Group Members: Anant Dhokia, Satvik Shreesha, Akhil Damidi, Kylie Oeffie
This repository contains code for an interactive information web app, created for the _Client-Side Web Development_ course at the UW iSchool.

# Project Outline
## What pages do we need?
- Main page (like facebook marketplace home where you can browse but not submit rentals)
    - Has all tools in a grid that are available for rent
    - Also has search bar to search by keyword filter options to filter tools by location, price, categories (power tools, cleaning tools, garden tools)
    - Each card shows a picture, price, title, and general location of the tool
    - Notification button
        - updates from your rentings or your listings

- Detail page for a tool (accesible by clicking on a tool in main page)
    - Images blown up
    - General location
    - price per day
    - button to initiate rental request

- Your Listings Page (accessible from navbar)
    - Has a list of your listings and their status
        Rented or just listed
        Can edit a listing
        Delete a listing

- Your Rentings page (accessible from navbar)
    - Has a list of your current (and past) rentals
    - Can view info about all your current and past bookings
    - Status on pending bookings

- NavBar
    - Main page (go browse tools)
    - Your listings (if logged in)
    - Your rentings (if logged in)
    - Log Out (if logged in)
    - Login (if logged out)

- Create listing (accessible through Main page)
    - Will be a html form
    - Title (name of tool and brand)
    - Price
    - Pictures
    - Location

- Booking details page (accessible from button in detail page for a tool)
    - Calendar to show from and to dates of rental booking
    - Total cost with added fees
    - Pay button (no payment in ours yet)
        - Booking confirmed should send a notification to lister and booker