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

- Dashboard page (acessible at login and from main page if already logged in)
    - Account details
    - Your listed tools (status that indicate whether its rented out or just listed)
    - The tools you are renting and have rented in the past (current and history)

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