import React from "react";
import { Box, Typography } from "@mui/material";

const Intro = () => {
    return (
        <Box sx={{ padding: 4, textAlign: "center" }}>
            <Typography variant="h3" gutterBottom>
                Welcome to Coldplay
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, marginTop: 2 }}>
                Coldplay is one of the most iconic bands in the world, known for their
                soulful music and electrifying performances. With a career spanning
                decades, they have released numerous chart-topping albums, including
                *Parachutes*, *A Rush of Blood to the Head*, and *Viva la Vida*.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, marginTop: 2 }}>
                Coldplay's music transcends genres, connecting with fans through
                powerful lyrics, innovative compositions, and a commitment to spreading
                positivity and hope.
            </Typography>
        </Box>
    );
};

export default Intro;