import React from 'react';
import { Typography, Box } from '@mui/material';
import QRCode from 'qrcode.react';

const ETicket = ( { ticket } ) => {
  const { ticketId, guestId, guestName } = ticket;

  return (
    <Box my={1} border={1} borderColor="grey.500" p={2}>
      <Typography variant="h6">Guest ID: {guestId}</Typography>
      <Typography variant="h6">Guest Name: {guestName}</Typography>
      <QRCode value={ticketId} size={128} />
    </Box>
  );
};

export default ETicket;