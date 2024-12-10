import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Toolbar, Button, AppBar, Container, Typography, Divider, Card, CardContent, Box, Stack, TextField, Alert } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import { getEventData, getConcertTicketStrategyByClass } from '../api/concertSessionEvent';

export default function Ticket() {
    const { concert_id } = useParams();
    const [concertDetails, setConcertDetails] = useState([]);
    const [concertMeta, setConcertMeta] = useState({});
    const [selectedTickets, setSelectedTickets] = useState({});
    const [showWarning, setShowWarning] = useState(false);
    const [classWarning, setClassWarning] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);

    const totalPrice = Object.values(selectedTickets).reduce((acc, ticket) => acc + (ticket.price * ticket.quantity), 0);
    const totalSelectedTickets = Object.values(selectedTickets).reduce((acc, ticket) => acc + ticket.quantity, 0);

    const handleTicketChange = (id, className, price, value) => {
        const newTotalSelectedTickets = totalSelectedTickets + value - (selectedTickets[id]?.quantity || 0);
        if (newTotalSelectedTickets <= 3) {
            if (selectedClass === null || selectedClass === className) {
                setSelectedTickets((prev) => ({
                    ...prev,
                    [id]: { price, quantity: value }
                }));
                setSelectedClass(className);
                setShowWarning(false);
                setClassWarning(false);
            } else {
                setClassWarning(true);
            }
        } else {
            setShowWarning(true);
        }
    };

    useEffect(() => {
        getEventData(1,1).then((data) => {
            setConcertMeta(data);
        });
        getConcertTicketStrategyByClass(1).then((data) => {
            setConcertDetails(data);
        });
    }, [concert_id]);

    return (
        <Container sx={{ pt: 4 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <Box flex={1}>
                    <img src="floorPlan.png" alt="Floor Plan" style={{ width: '100%', height: 'auto' }} />
                </Box>
                <Box flex={1}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>{concertMeta.name}</Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        <LocationOnIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                        Venue: {concertMeta.venue}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        <AccessTimeIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                        Start Time: {concertMeta.start_time}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        <EventIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                        Duration: {concertMeta.duration / 60} minutes
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        <AttachMoneyIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                        Price Range: ${concertMeta.minPrice} - ${concertMeta.maxPrice}
                    </Typography>
                </Box>
            </Stack>
            <Divider style={{ margin: '20px 0' }} />
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold'}}>Ticket Option</Typography>
            {showWarning && (
                <Alert severity="warning" sx={{ mb: 2 }}>
                    Each user can only purchase at most 3 tickets per concert.
                </Alert>
            )}
            {classWarning && (
                <Alert severity="warning" sx={{ mb: 2 }}>
                    You can only buy tickets from the same class in one order. Each user can only purchase at most 3 tickets per concert.
                </Alert>
            )}
            <Stack direction="row" spacing={2} flexWrap="wrap">
                {concertDetails.map((detail) => (
                    <Box key={detail.id} flex={{ xs: '1 1 100%', sm: '1 1 calc(33.33% - 16px)' }} mb={2}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                                    {detail.className}
                                </Typography>
                                <Typography variant="body1">
                                    <AttachMoneyIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                    Price: USD{detail.price}
                                </Typography>
                                <Typography variant="body1">
                                    <PeopleIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                    Capacity: {detail.capacity}
                                </Typography>
                                <Typography variant="body1">
                                    <EventSeatIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                    Available Seats: {detail.availableSeats}
                                </Typography>
                                <TextField
                                    label="Number of Tickets"
                                    type="number"
                                    fullWidth
                                    margin="normal"
                                    inputProps={{
                                        min: 0,
                                        max: 3,
                                    }}
                                    onChange={(e) => handleTicketChange(detail.id, detail.className, detail.price, Math.min(Math.max(parseInt(e.target.value) || 0, 0), 3))}
                                    value={selectedTickets[detail.id]?.quantity || ''}
                                />
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Stack>
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Total Tickets: {totalSelectedTickets} | Total Price: USD{totalPrice.toFixed(2)}
                    </Typography>
                    <Button variant="contained" color="secondary" disabled={totalSelectedTickets > 3}>
                        Buy
                    </Button>
                </Toolbar>
            </AppBar>
        </Container>
    );
}