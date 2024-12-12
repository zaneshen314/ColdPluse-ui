import React from "react";
import { Typography, Box } from "@mui/material";

const EventDetails = ({ time, venue, priceRange }) => {
    return (
        <Box>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                <strong>Time:</strong> {time}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                <strong>Venue:</strong> {venue}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                <strong>Price Range:</strong> {priceRange}
            </Typography>
        </Box>
    );
};

export default EventDetails;