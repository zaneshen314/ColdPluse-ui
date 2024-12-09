// src/components/About/MediaGallery.jsx

import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const MediaGallery = () => {
    const images = [
        "https://www.coldplay.com/wp/wp-content/uploads/2024/05/1-1-1600x1067.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWzf0onqz-M8Dh8H5QtdARC4YwdflF6vmOQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnP1_c2ZE3L1JSRBllhabvygmvQrHkuA7GZA&s",
    ];

    return (
        <Box sx={{ padding: 4, marginTop: 4 }}>
            <Typography variant="h4" gutterBottom textAlign="center">
                Care & Love
            </Typography>

            {/* Video Embed */}
            <Box sx={{ margin: "20px auto", textAlign: "center" }}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/o4OlL0OpbW8?rel=0&autoplay=0&controls=1&vq=hd1080&enablejsapi=1"
                    title="Coldplay Sustainability"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                ></iframe>
            </Box>

            {/* Image Gallery */}
            <Grid container spacing={2} justifyContent="center">
                {images.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                            component="img"
                            src={image}
                            alt={`Coldplay Event ${index + 1}`}
                            sx={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "8px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MediaGallery;