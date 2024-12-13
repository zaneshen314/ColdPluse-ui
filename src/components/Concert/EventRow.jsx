import React from "react";
import {Button} from "@mui/material";

const EventRow = ({ event }) => {
    const handleBuyClick = () => {
        window.location.href = `/ticket/${event.concertId}`;
    };

    return (
        <tr style={{ borderBottom: "1px solid #444" }}>
            <td style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
                {new Date(event.start_time).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                })}
            </td>
            <td style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
                {event.name}
            </td>
            <td style={{ padding: "10px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
                {event.venue}
            </td>
            <td style={{ padding: "10px", textAlign: "center" }}>
                <Button
                    onClick={handleBuyClick}
                    sx = {{
                        backgroundImage: 'linear-gradient(120deg, #4158d0, #c850c0 )',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'darkpurple',
                        },
                        fontWeight: 'bold',
                    }}
                >
                    Buy
                </Button>
            </td>
        </tr>
    );
};

export default EventRow;