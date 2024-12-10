import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, Typography, Box } from '@mui/material';
import ETicketGroup from './ETicketGroup';

const Payment = ({ ticket }) => {
  const { numberOfTickets, time, venue, ticketClass, pricePerTicket } = ticket;
  const [idCards, setIdCards] = useState(Array(numberOfTickets).fill(''));
  const [names, setNames] = useState(Array(numberOfTickets).fill(''));
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [paymentResult, setPaymentResult] = useState(undefined);

  const handleIdCardChange = (index, value) => {
    const newIdCards = [...idCards];
    newIdCards[index] = value;
    setIdCards(newIdCards);
  };

  const handleNameChange = (index, value) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const totalCost = numberOfTickets * pricePerTicket;

  const dataComplete = idCards.every((idCard) => idCard.length > 0) && names.every((name) => name.length > 0);

  const onPayButtonClick = () => {
    // calls backend
    const mock = {
        concertDetails: {
            time: '7:00 PM, 25th December 2023',
            venue: 'Madison Square Garden, New York',
            zone: 'VIP Section',
        },
        purchasedTime: new Date().toLocaleString(),
        tickets: [
            {
                ticketId: '1234567890',
                guestId: '123456',
                guestName: 'John Doe',
            },
            {
                ticketId: '0987654321',
                guestId: '654321',
                guestName: 'Jane Doe',
            }
        ]
    }
    // if success
    setPaymentResult(mock)
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
        <Typography variant="body1">Time: {time}</Typography>
        <Typography variant="body1">Venue: {venue}</Typography>
        <Typography variant="body1">Class: {ticketClass}</Typography>
        <Typography variant="body1">Price per Ticket: ${pricePerTicket}</Typography>
  
        <Typography variant="h5">Please complete the real name registration for each ticket</Typography>
        
        {idCards.map((idCard, index) => (
          <Box key={index} sx={{ my: 2 }}>
            <Typography variant="h6">Ticket {index + 1}</Typography>
            <TextField
              label={`ID Card Number`}
              variant="outlined"
              fullWidth
              value={idCard}
              onChange={(e) => handleIdCardChange(index, e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label={`Guest Name`}
              variant="outlined"
              fullWidth
              value={names[index]}
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