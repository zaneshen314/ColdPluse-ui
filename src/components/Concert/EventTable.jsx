import React, { useEffect, useState } from "react";
import EventRow from "./EventRow";
import EventHeader from "./EventHeader";
import { getAllEvents } from "../../api/concertSessionEvent";

const EventTable = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventData = await getAllEvents();
                if (eventData) {
                    const sortedEvents = eventData
                        .filter(event => new Date(event.start_time).toDateString() !== new Date().toDateString() && new Date(event.start_time) > new Date())
                        .sort((a, b) => new Date(a.start_time) - new Date(b.start_time))
                        .slice(0, 3);
                    setEvents(sortedEvents);
                } else {
                    console.error("No event data found");
                }
            } catch (error) {
                console.error("Error fetching event data:", error);
            }
        };

        fetchEvents();
    }, []);

    const handleSeeAllClick = () => {
        window.location.href = "/show-all-concerts"; // Navigate to the "Find All" page
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
                    <EventRow key={event.scheduleId} event={event} />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventTable;