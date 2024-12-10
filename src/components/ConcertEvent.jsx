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

const ConcertEvent = ({ event, onBuyTicket }) => {
    return (
        <></>
        // <Container
        //     sx={{
        //         marginTop: 8,
        //         display: "flex",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         height: "100vh",
        //     }}
        // >
        //     <Card
        //         sx={{
        //             maxWidth: 900,
        //             backgroundColor: "#02254a", // Dark blue card background
        //             color: "#fff",
        //             boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
        //             borderRadius: "16px",
        //         }}
        //     >

        //         <CardMedia
        //             component="img"
        //             image={event.poster}
        //             alt={event.title}
        //             sx={{
        //                 height: 400,
        //                 borderRadius: "16px 16px 0 0",
        //                 objectFit: "cover",
        //             }}
        //         />

        //         <CardContent
        //             sx={{
        //                 padding: 4,
        //                 textAlign: "center",
        //             }}
        //         >
        //             <Typography
        //                 variant="h3"
        //                 sx={{
        //                     fontWeight: "bold",
        //                     marginBottom: 2,
        //                 }}
        //             >
        //                 {event.title}
        //             </Typography>

        //             <Typography
        //                 variant="h6"
        //                 sx={{
        //                     color: "#9cc4e4",
        //                     marginBottom: 2,
        //                 }}
        //             >
        //                 {event.time}
        //             </Typography>
        //             <Typography
        //                 variant="body1"
        //                 sx={{
        //                     marginBottom: 4,
        //                 }}
        //             >
        //                 {event.venue}
        //             </Typography>

        //             <Typography
        //                 variant="body1"
        //                 sx={{
        //                     fontSize: "1.2rem",
        //                     fontWeight: "bold",
        //                     marginBottom: 4,
        //                 }}
        //             >
        //                 Price Range: {event.priceRange}
        //             </Typography>

        //             <Button
        //                 variant="contained"
        //                 color="secondary"
        //                 size="large"
        //                 onClick={onBuyTicket}
        //                 sx={{
        //                     color: "#fff",
        //                     fontSize: "1.2rem",
        //                     padding: "10px 20px",
        //                     borderRadius: "8px",
        //                 }}
        //             >
        //                 Buy Tickets
        //             </Button>
        //         </CardContent>
        //     </Card>
        // </Container>
    );
};

export default ConcertEvent;