import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import QRCode from 'qrcode.react';
import ETicket from "../ETicket";

const TicketList = ({ tickets }) => {
    return (
        <Box>
            <Typography variant="h5" sx={{ marginBottom: 2, marginTop: 2 }}>
                Tickets
            </Typography>
            <Grid container spacing={2}>
                {tickets.map((ticket, index) => (
                    <Grid item xs={12 / tickets.length} key={index}>
                        <ETicket ticket={ticket}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TicketList;