import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getAllEvents } from "../api/concertSessionEvent";
import EventCard, { EVENT_DETAILS_TYPE } from "./EventCard";

const ConcertEvent = () => {
    const [events, setEvents] = useState([]);

    const BUY_TICKET = "Buy Ticket";
    const onBuyTicket = () => {
        console.log("Buy ticket clicked");
    };

    const buyTicketProps = {
        text: BUY_TICKET,
        onButtonClick: onBuyTicket,
    };

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventData = await getAllEvents();
                const transformedEvents = eventData.map(event => ({
                    id: event.id,
                    poster: event.imgUrl,
                    title: event.name,
                    details: [
                        {
                            text: event.start_time,
                            type: EVENT_DETAILS_TYPE.HIGHLIGHTED,
                        },
                        {
                            text: event.venue,
                            type: EVENT_DETAILS_TYPE.STANDARD,
                        },
                        {
                            text: `$${event.minPrice} - $${event.maxPrice}`,
                            type: EVENT_DETAILS_TYPE.BOLD_STANDARD,
                        },
                    ],
                }));
                setEvents(transformedEvents);
            } catch (error) {
                console.error("Error fetching event data:", error);
            }
        };

        fetchEvents();
    }, []);

    if (events.length === 0) {
        return <Typography>Loading...</Typography>;
    }

    return (
       <div>
            {events.map((event, index) => (
                <EventCard key={index} event={event} buttonProps={buyTicketProps} />
            ))}
       </div>
    );
};

export default ConcertEvent;