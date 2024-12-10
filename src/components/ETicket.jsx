import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import QRCode from 'qrcode.react';

const ETicket = ( { ticketId, concertDetails, purchasedTime} ) => {
//   const concertDetails = {
//     id: "132131232",
//     time: '7:00 PM, 25th December 2023',
//     venue: 'Madison Square Garden, New York',
//     zone: 'VIP Section',
//     purchasedTime: new Date().toLocaleString(),
//   };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Purchase Success
      </Typography>
      <Box my={4}>
        <QRCode value={ticketId} size={256} />
      </Box>
      <Typography variant="h6" gutterBottom>
        Purchased Time: {purchasedTime}
      </Typography>
      <Box mt={4}>
        <Typography variant="h6">Concert Details:</Typography>
        <Typography variant="body1">Time: {concertDetails.time}</Typography>
        <Typography variant="body1">Venue: {concertDetails.venue}</Typography>
        <Typography variant="body1">Zone: {concertDetails.zone}</Typography>
      </Box>
    </Container>
  );
};

export default ETicket;