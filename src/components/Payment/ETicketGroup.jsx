import React from 'react';
import { Container, Typography, Box, Grid, CardContent, Card } from '@mui/material';
import ETicket from './ETicket';
import Carousel from '../Charity/Carousel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Divider } from 'antd';
const ETicketGroup = ( { tickets, concertDetails, purchasedTime } ) => {
  // borderColor: 'rgba(228, 219, 233, 0.25)'
  const typographyStyle = { mb: 1, display: 'flex', alignItems: 'center' };
  const iconStyle = { verticalAlign: 'middle', mr: 1 };

  return (
    <Container maxWidth="md" style={{ marginTop: '10rem' }}>
      <Card elevation={3} sx={{ backgroundColor: 'rgba(29, 29, 29, 0.3)', color: 'white' }}>
        <CardContent>
          <Typography variant="h3" gutterBottom  align="center">
            Transaction Successful
          </Typography>
          <Typography variant="body1" align="center">
              <AccessTimeIcon sx={iconStyle} />
              Purchased Time: {purchasedTime}
          </Typography>
          <Divider style={{ margin: '1rem 0', backgroundColor:'rgba(228, 219, 233, 0.25)'}} />
          <Grid container spacing={3}>
          <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
            <Box mt={3}>
              <Typography variant="h5" sx={{fontWeight: 'bold' }}>
                Concert: {concertDetails.name}
              </Typography>
              <Box sx={{ my: 2 }}>
                  <Typography variant="body1" sx={typographyStyle}>
                      <CalendarTodayIcon sx={iconStyle} />
                      Time: {new Date(concertDetails.time).toLocaleString()}
                  </Typography>
                  <Typography variant="body1" sx={typographyStyle}>
                      <LocationOnIcon sx={iconStyle} />
                      Venue: {concertDetails.venue}
                  </Typography>
                  <Typography variant="body1" sx={typographyStyle}>
                      <ConfirmationNumberIcon sx={iconStyle} />
                      Class: {concertDetails.ticketClass}
                  </Typography>                  
              </Box>
            </Box>
          </Grid>
            <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
              <Box sx={{ my: 2 }}>
                <Typography variant="h5" sx={{fontWeight: 'bold' }}>
                  Ticket{tickets.length > 1 ? 's' : ''} Purchased
                </Typography>
                {
                  tickets.length > 1 ?(
                    <Carousel slidesToShow={1} children={tickets.map((ticket, index)=> 
                    <ETicket key={index} ticket={ticket} large />)}/>
                  ):(
                    <ETicket ticket={tickets[0]} large />
                  )
                }   
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ETicketGroup;