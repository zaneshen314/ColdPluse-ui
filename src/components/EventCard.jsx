import React from "react";
import {
    Box,
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
}

const STYLE_MAPPING = {
    [EVENT_DETAILS_TYPE.HIGHLIGHTED]: {
        color: "#9cc4e4",
        marginBottom: "0.75rem",
    },
    [EVENT_DETAILS_TYPE.BOLD_STANDARD]: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
    },
    [EVENT_DETAILS_TYPE.STANDARD]: {
        marginBottom: "1.5rem",
    },
}

const EventCard = ({ event, buttonProps }) => {
    return (
        <Container
            sx={{
                marginTop: "0.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Card
                sx={{
                    maxWidth: "56.25rem",
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
                        height: "25rem",
                        borderRadius: "1rem 1rem 0 0",
                        objectFit: "cover",
                    }}
                />

                <CardContent
                    sx={{
                        padding: "2rem",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: "bold",
                            marginBottom: "0.75rem",
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
                            color: "#fff",
                            fontSize: "1.2rem",
                            padding: "0.625rem 1.25rem",
                            borderRadius: "0.5rem",
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