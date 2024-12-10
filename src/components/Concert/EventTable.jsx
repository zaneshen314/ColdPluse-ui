import React from "react";
import EventRow from "./EventRow";
import EventHeader from "./EventHeader";

const events = [
    {
        id: 1,
        name: "NYC-Coldplay Festival",
        maxPrice: 1000.0,
        minPrice: 50.0,
        start_time: "2024-12-15 19:00:00",
        venue: "Madison Square Garden, 10001, NYC",
        duration: 120,
        imgUrl: "/ColdPlayHKConcertPosterjpg.jpg",
    },
    {
        id: 2,
        name: "Rock Concert",
        maxPrice: 200.0,
        minPrice: 75.0,
        start_time: "2024-12-05 20:00:00",
        venue: "Madison Square Garden, 10001, NYC",
        duration: 10800,
        imgUrl: "/ColdPlayHKConcertPosterjpg.jpg",
    },
    {
        id: 3,
        name: "Jazz Night",
        maxPrice: 180.0,
        minPrice: 60.0,
        start_time: "2024-12-10 18:30:00",
        venue: "Central Park, New York, NY, NY",
        duration: 9000,
        imgUrl: "/ColdPlayHKConcertPosterjpg.jpg",
    },
];

const EventTable = () => {
    const handleSeeAllClick = () => {
        window.location.href = "/events"; // Navigate to the "Find All" page
    };

    return (
        <div style={{ backgroundColor: "#001f3f", color: "#fff", padding: "20px" }}>
            <EventHeader onSeeAllClick={handleSeeAllClick} />
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                <tr>
                    <th style={{ textAlign: "left", padding: "10px" }}>Date</th>
                    <th style={{ textAlign: "left", padding: "10px" }}>Name</th>
                    <th style={{ textAlign: "center", padding: "10px" }}>Venue</th>
                    <th style={{ textAlign: "center", padding: "10px" }}>Action</th>
                </tr>
                </thead>
                <tbody>
                {events.map((event) => (
                    <EventRow key={event.id} event={event} />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventTable;