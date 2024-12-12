
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";

const Sustainability = () => {
    const initiatives = [
        {
            icon: <EnergySavingsLeafIcon sx={{ fontSize: 50, color: "#4caf50" }} />,
            title: "Renewable Energy",
            description: "Using renewable energy to power their concerts.",
        },
        {
            icon: <DirectionsBikeIcon sx={{ fontSize: 50, color: "#2196f3" }} />,
            title: "Eco-Friendly Transportation",
            description: "Encouraging fans to use eco-friendly transportation to events.",
        },
        {
            icon: <VolunteerActivismIcon sx={{ fontSize: 50, color: "#f44336" }} />,
            title: "Charity Donations",
            description:
                "Donating a portion of their tour profits to environmental charities.",
        },
        {
            icon: <LocalDrinkIcon sx={{ fontSize: 50, color: "#ff9800" }} />,
            title: "Reusable Bottles",
            description:
                "Providing reusable water bottles and eliminating single-use plastics.",
        },
    ];

    return (
        <Box
            sx={{
                padding: 4,
                marginTop: 4,
                textAlign: "center",
                backgroundColor: "#f4f4f4",
                borderRadius: 4,
            }}
        >
            {/* Section Title */}
            <Typography variant="h4" gutterBottom>
                Our Sustainability Efforts
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    marginBottom: 4,
                    lineHeight: 1.8,
                    maxWidth: "800px",
                    marginX: "auto",
                }}
            >
                Coldplay is deeply committed to sustainability and minimizing their
                environmental impact. Here are some of the ways they are making their
                music more eco-friendly:
            </Typography>

            {/* Grid Layout for Initiatives */}
            <Grid container spacing={4} justifyContent="center">
                {initiatives.map((initiative, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 3,
                                textAlign: "center",
                                borderRadius: 4,
                                backgroundColor: "#ffffff",
                            }}
                        >
                            {initiative.icon}
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    marginTop: 2,
                                    marginBottom: 1,
                                }}
                            >
                                {initiative.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#555",
                                    lineHeight: 1.6,
                                }}
                            >
                                {initiative.description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Sustainability;