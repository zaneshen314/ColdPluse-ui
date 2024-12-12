import React from "react";
import EventCard, { EVENT_DETAILS_TYPE } from "../EventCard";
import Carousel from "./Carousel";

const CharityEventList = ({ events, onJoinEvent, joinedIds, setIds }) => {
    const JOIN_EVENT = "Join Event";
    const JOINED = "Joined";

    const handleGoToHistory = () =>{
        window.location.href = '/userCharityWrapper'
    }

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
                                {
                                    type: EVENT_DETAILS_TYPE.STANDARD,
                                    text: (
                                        <>
                                            Heartbeats: {event.point || "0"}
                                            <span className="jump">❤️</span>
                                        </>
                                    )
                                },
                                {
                                    type: EVENT_DETAILS_TYPE.STANDARD,
                                    text: `Participants: ${event.currentEnrolled}/${event.suggestedParticipationSize || "N/A"}`
                                },
                                { type: EVENT_DETAILS_TYPE.STANDARD, text: event.description || "No description available" },
                            ],
                        }}
                        buttonProps={{
                            text: Array.isArray(joinedIds) && joinedIds.includes(event.id) ? JOINED : JOIN_EVENT,
                            onButtonClick: Array.isArray(joinedIds) && joinedIds.includes(event.id) ? () => handleGoToHistory() : () => onJoinEvent && onJoinEvent(event.id),
                            sx: {
                                backgroundColor: Array.isArray(joinedIds) && joinedIds.includes(event.id) ? 'green' : 'blueviolet',
                            },
                        }}
                    />
                ))}
            </Carousel>

        </>
    );
};

export default CharityEventList;