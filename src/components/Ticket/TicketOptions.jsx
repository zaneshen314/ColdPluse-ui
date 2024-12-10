import React from 'react';
import { Box, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import EventSeatIcon from '@mui/icons-material/EventSeat';

export default function TicketOptions({ concertDetails, selectedTickets, handleTicketChange }) {
    return (
        <Box sx={{display:"flex", gap: "1rem"}}  flexWrap="wrap">
            {concertDetails.map((detail) => (
                <Box key={detail.id} flex sx={{flexBasis: 'calc(33.33% -5px)'}}>
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
                                min={0}
                                max={3}
                                onChange={(e) => handleTicketChange(detail.id, detail.className, detail.price, Math.min(Math.max(parseInt(e.target.value) || 0, 0), 3))}
                                value={selectedTickets[detail.id]?.quantity || ''}
                            />
                        </CardContent>
                    </Card>
                </Box>
            ))}
        </Box>
    );
}