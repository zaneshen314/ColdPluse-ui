import React from "react";
import { Box } from "@mui/material";
import Intro from "./Intro";
import Sustainability from "./Sustainability";
import MediaGallery from "./MediaGallery";

const About = () => {
    return (
        <Box>
            <Intro />
            <Sustainability />
            <MediaGallery />
        </Box>
    );
};

export default About;