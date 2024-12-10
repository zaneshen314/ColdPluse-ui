import React, { useEffect, useState } from "react";
import {
    Typography,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
} from "@mui/material";
import { getEventData } from "../api/concertSessionEvent";

const ConcertEvent = ({ onBuyTicket }) => {
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const eventData = await getEventData(1, 1);
                setEvent({
                    id: eventData.id,
                    poster: "https://www.allegiantstadium.com/assets/img/Static_Venue_800x500_Coldplay_2025_NA_Regional_AllegiantStadium_0606-05e3ffdf12.jpg",
                    title: eventData.name,
                    time: eventData.start_time,
                    venue: eventData.venue,
                    priceRange: `$${eventData.minPrice} - $${eventData.maxPrice}`,
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
        <Container
            sx={{
                marginTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Card
                sx={{
                    maxWidth: 900,
                    backgroundColor: "#02254a", // Dark blue card background
                    color: "#fff",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                    borderRadius: "16px",
                }}
            >
                <CardMedia
                    component="img"
                    image={event.poster}
                    alt={event.title}
                    sx={{
                        height: 400,
                        borderRadius: "16px 16px 0 0",
                        objectFit: "cover",
                    }}
                />
                <CardContent
                    sx={{
                        padding: 4,
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: "bold",
                            marginBottom: 2,
                        }}
                    >
                        {event.title}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#9cc4e4",
                            marginBottom: 2,
                        }}
                    >
                        {event.time}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: 4,
                        }}
                    >
                        {event.venue}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            marginBottom: 4,
                        }}
                    >
                        Price Range: {event.priceRange}
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={onBuyTicket}
                        sx={{
                            color: "#fff",
                            fontSize: "1.2rem",
                            padding: "10px 20px",
                            borderRadius: "8px",
                        }}
                    >
                        Buy Tickets
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ConcertEvent;