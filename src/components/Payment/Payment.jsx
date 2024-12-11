import React, { useState } from 'react';
import { Container, TextField, Button, MenuItem, Select, FormControl, Typography, Box, Card, CardContent, Grid, CircularProgress } from '@mui/material';
import ETicketGroup from './ETicketGroup';
import { placeOrder } from '../../api/placeOrder';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const { numberOfTickets, time, venue, ticketClass, pricePerTicket, concertClassId, scheduleId, concertName } = location.state || {};

    console.log(location.state);

  const [guests, setGuests] = useState(Array.from({ length: numberOfTickets }, () => ({ idCardNum: '', name: '' })));

  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [paymentResult, setPaymentResult] = useState(undefined);

  const [isLoading, setIsLoading] = useState(false);

  const handleidCardNumChange = (index, value) => {
    const newGuests = [...guests];
    newGuests[index].idCardNum = value;
    setGuests(newGuests);
  };

  const handleNameChange = (index, value) => {
    const newGuests = [...guests];
    newGuests[index].name = value;
    setGuests(newGuests);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const totalCost = numberOfTickets * pricePerTicket;

  const dataComplete = guests.every(guest => guest.idCardNum.trim() && guest.name.trim());

  const onPayButtonClick = () => {
    setIsLoading(true);
    const trimmedGuests = guests.map(guest => ({
        idCardNum: guest.idCardNum.trim(),
        name: guest.name.trim()
    }));

    placeOrder(concertClassId, scheduleId, trimmedGuests)
        .then(response => {
            setPaymentResult({
                concertDetails: {
                    name: response.concertName,
                    time: response.startTime,
                    venue: response.venue,
                    ticketClass: response.concertClassName,
                },
                purchasedTime: response.transactionTime,
                tickets: response.ticketVos
            })
        })
        .catch(error => {
            const response = error.response.data
            if (response.code === 200004) {
                alert("You have already purchased 3 tickets for this concert")
            } else if (response.code === 200005) {
                alert("Not enough tickets available")
            } else {
                alert("An error occurred while placing the order")
            }
        })
        .finally(() => {
            setIsLoading(false);
        });
  }

  return (
    <Container>
    <Box sx={{ position: 'relative' }}>
        {isLoading && (
            <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            zIndex: 9999
            }}>
            <CircularProgress />
            </Box>
        )}
        {paymentResult ? (
        <ETicketGroup 
            tickets={paymentResult.tickets} 
            concertDetails={paymentResult.concertDetails} 
            purchasedTime={paymentResult.purchasedTime} 
        />
        ) : (
        <Box sx={{ p: 2 }}>
            <Card>
                <CardContent>
                    <Typography variant="h4" gutterBottom>Paying {numberOfTickets} Ticket(s)</Typography>
                    <Box sx={{ my: 2 }}>
                    <Typography variant="body1">Concert Name: {concertName}</Typography>
                    <Typography variant="body1">Time: {time}</Typography>
                    <Typography variant="body1">Venue: {venue}</Typography>
                    <Typography variant="body1">Class: {ticketClass}</Typography>
                    </Box>
        
                    <Typography variant="h5" gutterBottom>Please complete the real name registration for each ticket</Typography>
                    
                    {guests.map((guest, index) => (
                    <Box key={index} sx={{ my: 2 }}>
                        <Typography variant="h6">Ticket {index + 1}</Typography>
                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            label="ID Card Number"
                            variant="outlined"
                            fullWidth
                            value={guest.idCardNum}
                            onChange={(e) => handleidCardNumChange(index, e.target.value)}
                            sx={{ marginBottom: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            label="Guest Name"
                            variant="outlined"
                            fullWidth
                            value={guest.name}
                            onChange={(e) => handleNameChange(index, e.target.value)}
                            />
                        </Grid>
                        </Grid>
                    </Box>
                    ))}
        
                    <Typography variant="h5" gutterBottom>Total Cost: ${totalCost}</Typography>
                    <Typography variant="body1">Price per Ticket: ${pricePerTicket}</Typography>
        
                    <FormControl fullWidth sx={{ my: 2 }}>
                    <Typography variant="h6">Select Payment Method</Typography>
                    <Select value={paymentMethod} onChange={handlePaymentMethodChange}>
                        <MenuItem value="paypal">PayPal</MenuItem>
                        <MenuItem value="alipay">支付寶</MenuItem>
                        <MenuItem value="weixin">微信支付</MenuItem>
                    </Select>
                    </FormControl>
        
                    <Button variant="contained" color="primary" onClick={onPayButtonClick} disabled={!dataComplete || isLoading} sx={{ mt: 2 }}>
                    Pay
                    </Button>
                </CardContent>
                </Card>
            </Box>
            )}
        </Box>
    </Container>

  );
};

export default Payment;