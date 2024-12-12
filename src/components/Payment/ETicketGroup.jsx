import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ETicket from './ETicket';

const ETicketGroup = ( { tickets, concertDetails, purchasedTime } ) => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '3rem' }}>
      <Typography variant="h4" gutterBottom>
        Purchase Success
      </Typography>
      <Typography variant="h5" gutterBottom>
        Purchased Time: {purchasedTime}
      </Typography>
      <Box mt={3}>
        <Typography variant="h5">Concert Details:</Typography>
        <Typography variant="body1">Concert Name: {concertDetails.name}</Typography>
        <Typography variant="body1">Time: {concertDetails.time}</Typography>
        <Typography variant="body1">Venue: {concertDetails.venue}</Typography>
        <Typography variant="body1">Class: {concertDetails.ticketClass}</Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="h5">Ticket(s):</Typography>
        {tickets.map((ticket, index) => 
          <ETicket key={index} ticket={ticket} size={192}/>
        )}
      </Box>
    </Container>
  );
};

export default ETicketGroup;