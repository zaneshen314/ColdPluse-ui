import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import QRCode from 'qrcode.react';

const TicketList = ({ tickets }) => {
    return (
        <Box>
            <Typography variant="h5" sx={{ marginBottom: 2, marginTop: 2 }}>
                Tickets
            </Typography>
            <Grid container spacing={2}>
                {tickets.map((ticket, index) => (
                    <Grid item xs={12 / tickets.length} key={index}>
                        <Box sx={{ textAlign: 'center', padding: 2, border: '1px solid #ddd', borderRadius: '8px' }}>
                            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 1 }}>
                                {ticket.id}
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                {ticket.name}
                            </Typography>
                            <QRCode value={ticket.ticketId} size={128} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TicketList;