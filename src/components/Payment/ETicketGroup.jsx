import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ETicket from './ETicket';
import Carousel from '../Charity/Carousel';

const ETicketGroup = ( { tickets, concertDetails, purchasedTime } ) => {

  return (
    <Container maxWidth="md" style={{ marginTop: '10rem' }}>
      <Typography variant="h3" gutterBottom  align="left">
        Purchase Success
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom align="left">
          Purchased Time: {purchasedTime}
        </Typography>
        <Box mt={3}>
          <Typography variant="h4" align="left">Concert Details:</Typography>
          <Typography variant="h5" align="left">Concert Name: {concertDetails.name}</Typography>
          <Typography variant="h5" align="left">Time: {concertDetails.time}</Typography>
          <Typography variant="h5" align="left">Venue: {concertDetails.venue}</Typography>
          <Typography variant="h5" align="left">Class: {concertDetails.ticketClass}</Typography>
        </Box>
      </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
          <Typography variant="h4">Ticket(s):</Typography>
          {
            tickets.length > 1 ?(
              <Carousel slidesToShow={1} children={tickets.map((ticket, index)=> <ETicket key={index} ticket={ticket} large />)}/>
            ):(
              <ETicket ticket={tickets[0]} large />
           )
          }   
        </Grid>
      </Grid>
    </Container>
  );
};

export default ETicketGroup;