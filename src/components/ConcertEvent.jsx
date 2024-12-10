import React, { useEffect, useState } from "react";
import {
    Typography,
} from "@mui/material";
import { getEventData } from "../api/concertSessionEvent";
import EventCard, { EVENT_DETAILS_TYPE } from "./EventCard";
import { type } from "@testing-library/user-event/dist/type";

const ConcertEvent = ({ onBuyTicket }) => {
    const [event, setEvent] = useState(null);

    const BUY_TICKET = "Buy Ticket";
    const buyTicketProps = {
        text: BUY_TICKET,
        onclick: onBuyTicket,
    }

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const eventData = await getEventData(1, 1);
                setEvent({
                    id: eventData.id,
                    poster: "https://www.allegiantstadium.com/assets/img/Static_Venue_800x500_Coldplay_2025_NA_Regional_AllegiantStadium_0606-05e3ffdf12.jpg",
                    title: eventData.name,
                    details: [
                        {
                            text: eventData.start_time,
                            type: EVENT_DETAILS_TYPE.HIGHLIGHTED,
                        },
                        {
                            text: eventData.venue,
                            type: EVENT_DETAILS_TYPE.STANDARD,
                        },
                        {
                            text: `$${eventData.minPrice} - $${eventData.maxPrice}`,
                            type: EVENT_DETAILS_TYPE.BOLD_STANDARD,
                        },
                    ],
                });
            } catch (error) {
                console.error("Error fetching event data:", error);
            }
        };

        fetchEventData();
    }, []);

    if (!event) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <EventCard event={event} buttonProps={buyTicketProps}/>
    );
};

export default ConcertEvent;