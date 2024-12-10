import React from "react";
import { Button, Container, Box, Typography } from "@mui/material";

export default function Home() {
const concertTitle = "Coldplay: Music of Spheres World Tour 2025";
const handleBuyTicket = () => {
    window.location.href = "/ticket";
};

return (
    <Container sx={{width: "100vw", gap: "1rem"}}>
        <Box sx={posterWrapperStyle}>
            <h1>{concertTitle}</h1>
            <img
                src="ColdPlayHKConcertPosterjpg.jpg"
                alt="Poster"
                style={{ width: "85vw", height: "65vh", borderRadius: "0.5rem" }}
            />
        </Box>
        <Box sx={buttonWrapperStyle}>
            <Button variant="contained" color="primary" size="small" onClick={handleBuyTicket}>
                Buy Ticket
            </Button>
        </Box>
        <Box class="futureConcertsWrapper">
            <h2>Upcoming concerts</h2>     
        </Box>
        <Box class="futureEventsWrapper">
            <h2>Upcoming events</h2>
        </Box>
    </Container>
);
}

const posterWrapperStyle = {
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}


const buttonWrapperStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end", // Align buttons at the end of the flex box
    gap: "0.5rem",
}