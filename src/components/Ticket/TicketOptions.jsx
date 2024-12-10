import React from 'react';
import { Box, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import EventSeatIcon from '@mui/icons-material/EventSeat';

export default function TicketOptions({ concertDetails, selectedTickets, handleTicketChange }) {
    return (
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
                                min={0}
                                max={3}        
                                onChange={(e) => handleTicketChange(detail.id, detail.className, detail.price, Math.min(Math.max(parseInt(e.target.value) || 0, 0), 3))}
                                value={selectedTickets[detail.id]?.quantity || ''}
                            />
                        </CardContent>
                    </Card>
                </Box>
            ))}
        </Stack>
    );
}