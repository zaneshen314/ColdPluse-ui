import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import QRCode from 'qrcode.react';

const ETicket = ( { ticket } ) => {
  const { ticketId, guestId, guestName } = ticket;

  return (
    <Box my={1} border={1} borderColor="grey.500" p={2}>
      <Grid container alignItems="center">
        <Grid item xs={8}>
          <Typography variant="h6">Guest ID: {guestId}</Typography>
          <Typography variant="h6">Guest Name: {guestName}</Typography>
        </Grid>
        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <QRCode value={ticketId} size={128} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ETicket;