import React from "react";
import {
    Typography,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
} from "@mui/material";

export const EVENT_DETAILS_TYPE = {
    HIGHLIGHTED: "highlighted",
    BOLD_STANDARD: "bold standard",
    STANDARD: "standard",
};

const STYLE_MAPPING = {
    [EVENT_DETAILS_TYPE.HIGHLIGHTED]: {
        color: "#9cc4e4",
        marginBottom: "0.75rem",
        fontSize: "1rem", // Adjusted for consistency
        "@media (max-width: 600px)": {
            fontSize: "0.9rem", // Responsive size for smaller screens
        },
    },
    [EVENT_DETAILS_TYPE.BOLD_STANDARD]: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
        "@media (max-width: 600px)": {
            fontSize: "1rem", // Responsive size for smaller screens
        },
    },
    [EVENT_DETAILS_TYPE.STANDARD]: {
        marginBottom: "1.5rem",
        fontSize: "1rem", // Standard font size
        "@media (max-width: 600px)": {
            fontSize: "0.9rem", // Responsive size for smaller screens
        },
    },
};

const EventCard = ({ event, buttonProps }) => {
    return (
        <Container
            sx={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                padding: "1rem", // Add padding for responsiveness
            }}
        >
            <Card
                sx={{
                    width: "100%", // Full width by default
                    maxWidth: "40rem", // Responsive max width for desktop
                    backgroundColor: "#02254a", // Dark blue card background
                    color: "#fff",
                    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.4)",
                    borderRadius: "1rem",
                }}
            >
                <CardMedia
                    component="img"
                    image={event.poster}
                    alt={event.title}
                    sx={{
                        height: "20rem", // Adjusted height for better card proportions
                        borderRadius: "1rem 1rem 0 0",
                        objectFit: "contain", // Ensures the whole image is visible
                        backgroundColor: "#02254a", // Optionally add a background color for padding
                    }}
                />

                <CardContent
                    sx={{
                        padding: "1.5rem",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="h4" // Reduced size for better fit
                        sx={{
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            fontSize: "1.8rem", // Font size adjustment
                            "@media (max-width: 600px)": {
                                fontSize: "1.5rem", // Responsive size for smaller screens
                            },
                        }}
                    >
                        {event.title}
                    </Typography>

                    {event.details.map((detail, index) => (
                        <Typography
                            key={index}
                            variant={detail.type === EVENT_DETAILS_TYPE.HIGHLIGHTED ? "h6" : "body1"}
                            sx={STYLE_MAPPING[detail.type]}
                        >
                            {detail.text}
                        </Typography>
                    ))}

                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={buttonProps.onButtonClick}
                        sx={{
                            backgroundColor: buttonProps.sx && buttonProps.sx.backgroundColor ? buttonProps.sx.backgroundColor : "initial",
                            color: "#fff",
                            fontSize: "1rem", // Reduced button text size for better fit
                            padding: "0.625rem 1.25rem",
                            borderRadius: "0.5rem",
                            "@media (max-width: 600px)": {
                                fontSize: "0.9rem", // Responsive size for smaller screens
                            },
                        }}
                    >
                        {buttonProps.text}
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default EventCard;