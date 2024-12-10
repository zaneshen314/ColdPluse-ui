import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import CharityEventList from "./CharityEventList";
import { getAllCharityEvents } from "../../api/charityEvent";

const CharityEventsPage = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch charity events from the API
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await getAllCharityEvents();
                setEvents(data);
            } catch (err) {
                setError("Failed to fetch charity events.");
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const handleJoinEvent = (eventId) => {
        console.log(`Joining event with ID: ${eventId}`);

    };

    if (loading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    backgroundColor: "#f5f5f5",
                }}
            >
                <Typography variant="h6">Loading...</Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    backgroundColor: "#f5f5f5",
                }}
            >
                <Typography variant="h6" color="error">
                    {error}
                </Typography>
            </Box>
        );
    }

    return (
            <CharityEventList events={events} onJoinEvent={handleJoinEvent} />
    );
};

export default CharityEventsPage;