import React, { useState } from "react";
import { Grid, Modal, Box, Typography, Button } from "@mui/material";
import EventCard, { EVENT_DETAILS_TYPE } from "../EventCard";
import { deleteCharityEventParticipation } from "../../api/charityEvent";
import Carousel from "./Carousel";

const CharityEventList = ({ events, onJoinEvent, joinedIds, setIds }) => {
    const JOIN_EVENT = "Join Event";
    const JOINED = "Joined";

    const [openQuitModal, setOpenQuitModal] = useState(false);
    const [selectedEventId, setSelectedEventId] = useState(null);

    const handleQuitCharityEvent = (eventId) => {
        setSelectedEventId(eventId);
        setOpenQuitModal(true);
    };

    const handleQuitModalClose = (confirm) => {
        setOpenQuitModal(false);
        if (confirm && selectedEventId !== null) {
            deleteCharityEventParticipation(1, selectedEventId).then((response) => {
                setIds(joinedIds.filter((id) => id !== selectedEventId));
            });
        }
    };

    return (
        <>
            <Carousel>
                {events.map((event) => (
                    <EventCard
                        key={event.id}
                        event={{
                            id: event.id,
                            poster: event.imgUrl || "https://www.coldplay.com/wp/wp-content/uploads/2024/11/this-is-going-to-be-huuuuuuge.webp",
                            title: event.name || "Untitled Event",
                            details: [
                                {
                                    type: EVENT_DETAILS_TYPE.HIGHLIGHTED,
                                    text: `Location: ${event.location || "Not specified"}`
                                },
                                {
                                    type: EVENT_DETAILS_TYPE.BOLD_STANDARD,
                                    text: `Time: ${event.startTime ? new Date(event.startTime).toLocaleString() : "N/A"}`
                                },
                                {
                                    type: EVENT_DETAILS_TYPE.STANDARD,
                                    text: `Duration: ${event.duration ? `${event.duration} minutes` : "Unknown duration"}`
                                },
                                { type: EVENT_DETAILS_TYPE.STANDARD, text: `Points: ${event.point || "0"}` },
                                {
                                    type: EVENT_DETAILS_TYPE.STANDARD,
                                    text: `Participants: ${event.currentEnrolled}/${event.suggestedParticipationSize || "N/A"}`
                                },
                                { type: EVENT_DETAILS_TYPE.STANDARD, text: event.description || "No description available" },
                            ],
                        }}
                        buttonProps={{
                            text: joinedIds && joinedIds.includes(event.id) ? JOINED : JOIN_EVENT,
                            onButtonClick: joinedIds && joinedIds.includes(event.id) ? () => handleQuitCharityEvent(event.id) : () => onJoinEvent && onJoinEvent(event.id),
                        }}
                    />
                ))}
            </Carousel>
            <Modal
                open={openQuitModal}
                onClose={() => handleQuitModalClose(false)}
                aria-labelledby="quit-modal-title"
                aria-describedby="quit-modal-description"
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
                        borderRadius: '10px',
                    }}
                >
                    <Typography id="quit-modal-title" variant="h6" component="h2">
                        Quit Event
                    </Typography>
                    <Typography id="quit-modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to quit this event?
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="contained" color="primary" onClick={() => handleQuitModalClose(true)}>
                            Yes
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => handleQuitModalClose(false)}>
                            No
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default CharityEventList;