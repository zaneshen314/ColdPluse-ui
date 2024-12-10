import React, { useState, useEffect } from "react";
import { Box, Typography, Modal, Button } from "@mui/material";
import CharityEventList from "./CharityEventList";
import {getAllCharityEvents, getUserCurrentCharityEventIds} from "../../api/charityEvent";
import instance from "../../api/interceptor";

const CharityEventsPage = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [claimPoint, setClaimPoint] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [selectedEventId, setSelectedEventId] = useState(null);
    const [ids, setIds] = useState([]);

    // Fetch charity events from the API
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await getAllCharityEvents();
                setIds(await getUserCurrentCharityEventIds(1));
                setEvents(data);
            } catch (err) {
                setError("Failed to fetch charity events.");
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const handleJoinedEvent = (eventId) => {

    }

    const handleJoinEvent = (eventId) => {
        setSelectedEventId(eventId);
        setOpenModal(true);
    };

    const handleModalClose = (claim) => {
        setClaimPoint(claim);
        setOpenModal(false);

        if (selectedEventId !== null) {
            instance.post(`/charity-events`, {
                userId: 1,
                charityEventId: selectedEventId,
                claimPoint: claim,
            });
            console.log(`Joining event with ID: ${selectedEventId}`);
        }
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
        <>
            <CharityEventList events={events} onJoinEvent={handleJoinEvent} joinedIds={ids}/>
            <Modal
                open={openModal}
                onClose={() => handleModalClose(false)}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 300,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '10px', // Add this line to make the corners rounded
                    }}
                >
                    <Typography id="modal-title" variant="h6" component="h2">
                        Claim Points
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        Do you want to claim points for this event?
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="contained" color="primary" onClick={() => handleModalClose(true)}>
                            Yes
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => handleModalClose(false)}>
                            No
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default CharityEventsPage;