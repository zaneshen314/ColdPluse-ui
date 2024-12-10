import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, Typography, Box } from '@mui/material';
import ETicketGroup from './ETicketGroup';
import { placeOrder } from '../api/placeOrder';

const Payment = ({ ticket }) => {
  const { numberOfTickets, time, venue, ticketClass, pricePerTicket, concertClassId, scheduleId, concertName } = ticket;
  const [guests, setGuests] = useState(Array.from({ length: numberOfTickets }, () => ({ idCardNum: '', name: '' })));
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [paymentResult, setPaymentResult] = useState(undefined);

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
    // calls backend
    const trimmedGuests = guests.map(guest => ({
        idCardNum: guest.idCardNum.trim(),
        name: guest.name.trim()
    }));

    placeOrder(concertClassId, scheduleId, trimmedGuests)
        .then(response => {
            console.log(response)
            setPaymentResult({
                concertDetails: {
                    name: response.concertName,
                    time: response.startTime,
                    // TODO: get from response
                    venue,
                    ticketClass: response.concertClassName,
                },
                purchasedTime: response.transactionTime,
                tickets: response.ticketVos
            })
        })
        .catch(error => {
            console.log(response)
            const response = error.response.data
            if (response.code === 200004) {
                alert("You have already purchased 3 tickets for this concert")
            } else if (response.code === 200005) {
                alert("Not enough tickets available")
            }
        })

  }

  return (
    paymentResult ? (
      <ETicketGroup 
        tickets={paymentResult.tickets} 
        concertDetails={paymentResult.concertDetails} 
        purchasedTime={paymentResult.purchasedTime} 
      />
    ) : (
      <Box sx={{ p: 2 }}>
        <Typography variant="h4">Payment for {numberOfTickets} Tickets</Typography>
        <Typography variant="body1">Concert Name: {concertName}</Typography>
        <Typography variant="body1">Time: {time}</Typography>
        <Typography variant="body1">Venue: {venue}</Typography>
        <Typography variant="body1">Class: {ticketClass}</Typography>
        <Typography variant="body1">Price per Ticket: ${pricePerTicket}</Typography>
  
        <Typography variant="h5">Please complete the real name registration for each ticket</Typography>
        
        {guests.map((guest, index) => (
          <Box key={index} sx={{ my: 2 }}>
            <Typography variant="h6">Ticket {index + 1}</Typography>
            <TextField
              label={`ID Card Number`}
              variant="outlined"
              fullWidth
              value={guest.idCardNum}
              onChange={(e) => handleidCardNumChange(index, e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label={`Guest Name`}
              variant="outlined"
              fullWidth
              value={guest.name}
              onChange={(e) => handleNameChange(index, e.target.value)}
            />
          </Box>
        ))}
  
        <Typography variant="h5">Total Cost: ${totalCost}</Typography>
  
        <FormControl fullWidth sx={{ my: 2 }}>
          <Typography>Select Payment Method</Typography>
          <Select value={paymentMethod} onChange={handlePaymentMethodChange}>
            <MenuItem value="paypal">PayPal</MenuItem>
            <MenuItem value="alipay">支付寶</MenuItem>
            <MenuItem value="weixin">微信支付</MenuItem>
          </Select>
        </FormControl>
  
        <Button variant="contained" color="primary" onClick={onPayButtonClick} disabled={!dataComplete}>
          Pay
        </Button>
      </Box>
    )
  );
};

export default Payment;