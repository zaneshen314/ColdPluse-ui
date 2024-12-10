import React from "react";
import { Grid } from "@mui/material";
import EventCard, { EVENT_DETAILS_TYPE } from "../EventCard";

const CharityEventList = ({ events, onJoinEvent }) => {
    const JOIN_EVENT = "Join Event";

    return (
        <Grid container spacing={3}>
            {events.map((event) => (
                    <EventCard
                        event={{
                            id: event.id,
                            poster: event.imgUrl || "https://www.coldplay.com/wp/wp-content/uploads/2024/11/this-is-going-to-be-huuuuuuge.webp",
                            title: event.name || "Untitled Event",
                            details: [
                                { type: EVENT_DETAILS_TYPE.HIGHLIGHTED, text: `Location: ${event.location || "Not specified"}` },
                                { type: EVENT_DETAILS_TYPE.BOLD_STANDARD, text: `Time: ${event.startTime ? new Date(event.startTime).toLocaleString() : "N/A"}` },
                                { type: EVENT_DETAILS_TYPE.STANDARD, text: `Duration: ${event.duration ? `${event.duration} minutes` : "Unknown duration"}` },
                                { type: EVENT_DETAILS_TYPE.STANDARD, text: `Points: ${event.point || "0"}` },
                                { type: EVENT_DETAILS_TYPE.STANDARD, text: `Participants: ${event.currentEnrolled}/${event.suggestedParticipationSize || "N/A"}` },
                                { type: EVENT_DETAILS_TYPE.STANDARD, text: event.description || "No description available" },
                            ],
                        }}
                        buttonProps={{
                            text: JOIN_EVENT,
                            onButtonClick: () => onJoinEvent && onJoinEvent(event.id),
                        }}
                    />
            ))}
        </Grid>
    );
};

export default CharityEventList;