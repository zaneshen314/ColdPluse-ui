import React from "react";
import { Button, Container, Box, Typography } from "@mui/material";
import EventTable from "./Concert/EventTable";
import BottomBanner from "../components/Charity/BottomBanner";

export default function Home() {
    const concertTitle = "Coldplay: Music of Spheres World Tour 2025";
    const handleBuyTicket = () => {
        window.location.href = "/ticket";
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: "linear-gradient(to bottom, #020024, #090979, #00d4ff)", // Cosmic gradient
                color: "#fff", // White text for readability
                padding: "2rem 1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* Concert Title */}
            <Typography
                variant="h2"
                sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    marginBottom: "2rem",
                    textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
                    fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                }}
            >
                {concertTitle}
            </Typography>

            {/* Poster Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "2rem",
                }}
            >
                <img
                    src="ColdPlayHKConcertPosterjpg.jpg"
                    alt="Poster"
                    style={{
                        width: "85vw",
                        maxWidth: "600px", // Limit poster size on larger screens
                        height: "auto",
                        borderRadius: "0.75rem",
                        boxShadow: "0 0 20px rgba(0, 0, 0, 0.7)",
                    }}
                />
            </Box>

            {/* Buy Ticket Button */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "4rem",
                }}
            >
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleBuyTicket}
                    sx={{
                        background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        padding: "0.75rem 2rem",
                        borderRadius: "2rem",
                        boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
                        "&:hover": {
                            background: "linear-gradient(45deg, #7873f5, #ff6ec4)",
                            boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.8)",
                        },
                    }}
                >
                    Buy Ticket
                </Button>
            </Box>

            {/* Upcoming Concerts Section */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "800px",
                    textAlign: "center",
                    marginBottom: "2rem",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: "1rem",
                        textShadow: "0px 0px 10px rgba(255, 255, 255, 0.7)",
                    }}
                >
                    Upcoming Concerts
                </Typography>
                <EventTable/>
            </Box>

            {/* Upcoming Events Section */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "800px",
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: "1rem",
                        textShadow: "0px 0px 10px rgba(255, 255, 255, 0.7)",
                    }}
                >
                    Charity Events with ColdPlay
                </Typography>
                <BottomBanner />
            </Box>
        </Box>
    );
}