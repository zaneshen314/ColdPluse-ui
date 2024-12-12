import React from "react";
import { Box } from "@mui/material";

const ConcertPoster = ({ poster }) => {
    return (
        <Box component="img" src={poster} alt="Concert Poster" sx={{ width: "100%", borderRadius: 2 }} />
    );
};

export default ConcertPoster;