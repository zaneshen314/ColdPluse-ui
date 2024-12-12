import React from 'react';
import { Box, Card, CardContent, TextField, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import EventSeatIcon from '@mui/icons-material/EventSeat';

export default function TicketOptions({ ticketOptions, selectedTickets, handleTicketChange }) {
    const maxPurchaseTicket = 3;
    const textFieldStyle = {
        marginTop: '1rem',
        input: {
          color: 'white',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
        },
        '& .MuiInputLabel-root': {
          color: 'white',
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'white',
        },
      }
    return (
        <Box sx={{display:"flex", gap: "1rem"}}  flexWrap="wrap">
            {ticketOptions.map((detail) => (
                <Box key={detail.id} flex sx={{flexBasis: 'calc(33.33% -5px)'}}>
                    <Card elevation={3} sx={{ p: 3, mb: 4, gap: 1, backgroundColor:'rgba(29, 29, 29, 0.3)', color: '#EEEEEE'}}>
                        <CardContent>
                            <Typography gutterBottom sx={{ backgroundColor: detail.className==='VIP'? '#D85A54':'#67B253', width:'100%', height:'1rem'}}>
                            </Typography>
                            <Typography variant="h6" align="center" sx={{ fontWeight: 'bold', margin: '1rem' }}>
                                {detail.className}
                            </Typography>
                            <Typography variant="body1">
                                <AttachMoneyIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                Price: USD{detail.price}
                            </Typography>
                            <Typography variant="body1">
                                <PeopleIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                Capacity: {detail.capacity}
                            </Typography>
                            <Typography variant="body1">
                                <EventSeatIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                Available Seats: {detail.availableSeats}
                            </Typography>
                            <TextField
                                label="Number of Tickets"
                                type="number"
                                fullWidth
                                margin="normal"
                                min={0}
                                max={detail.availableSeats > maxPurchaseTicket ? maxPurchaseTicket : detail.availableSeats}
                                onChange={(e) => handleTicketChange(detail.id, detail.className, detail.price, Math.min(Math.max(parseInt(e.target.value) || 0, 0), detail.availableSeats > maxPurchaseTicket ? maxPurchaseTicket : detail.availableSeats))}
                                value={selectedTickets[detail.id]?.quantity || ''} 
                                sx={textFieldStyle}                               
                            />
                        </CardContent>
                    </Card>
                </Box>
            ))}
        </Box>
    );
}