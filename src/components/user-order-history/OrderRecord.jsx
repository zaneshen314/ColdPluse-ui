import React from 'react';
import { Box, Grid, Paper, Typography, Collapse, Chip } from '@mui/material';
import TicketList from './TicketList';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from "@mui/icons-material/Description";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";

const OrderRecord = ({ order, expanded, onToggle }) => {
    return (
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, cursor: 'pointer' }} onClick={onToggle}>
            <Grid container spacing={2}>
                <Grid item xs={3} sx={{ textAlign: 'center' }}>
                    <Box
                        component="img"
                        src={order.poster}
                        alt={order.title}
                        sx={{
                            width: '12rem',
                            height: '12rem',
                            borderRadius: '5%',
                            objectFit: 'cover',
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 1.3, marginBottom: 1 }}>
                        {order.title}
                    </Typography>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginBottom: 1.3, color: '#adafb8' }}>
                        <DateRangeIcon sx={{ color: '#adafb8', fontSize: '1.3rem', marginRight: 1 }} />
                        {order.date}
                    </Typography>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginBottom: 1.3, color: '#adafb8' }}>
                        <LocationOnIcon sx={{ color: '#adafb8', fontSize: '1.3rem', marginRight: 1 }} />
                        <span style={{ fontSize: '1rem', marginRight: '0.5rem' }}>Venue:</span>
                        {order.venue}
                    </Typography>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginBottom: 1.3, color: '#adafb8' }}>
                        <LocationOnIcon sx={{ color: '#adafb8', fontSize: '1.3rem', marginRight: 1 }} />
                        <span style={{ fontSize: '1rem', marginRight: '0.5rem' }}>Region:</span>
                        {order.region}
                    </Typography>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', color: '#adafb8' }}>
                        <DescriptionIcon sx={{ color: '#adafb8', fontSize: '1.3rem', marginRight: 1 }} />
                        <span style={{ fontSize: '1rem', marginRight: '0.5rem' }}>Purchased on:</span>
                        {order.purchaseDate}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Chip
                            label={order.status}
                            sx={{
                                backgroundColor: '#C8E6C9',
                                fontSize: '1rem',
                                color: '#388e3c',
                                fontWeight: 'bold',
                            }}
                        />
                        <Chip
                            icon={<AssignmentIcon />}
                            label={`${order.tickets.length} tickets`}
                            sx={{
                                padding: "0 18%",
                                backgroundColor: '#fdf1f5',
                                color: '#e8628d',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                marginTop: 1,
                                '& .MuiChip-icon': {
                                    color: '#e8628d',
                                    fontSize: '1.2rem',
                                    marginLeft: 1.5
                                }
                            }}
                        />
                        <Box sx={{ marginTop: 10, marginRight: 7 }}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'black', display: 'inline' }}>
                                Total
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: "1.1rem", fontWeight: 'bold', color: 'blueviolet', display: 'inline', marginLeft: 0.5 }}>
                                $100
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <TicketList tickets={order.tickets} />
            </Collapse>
        </Paper>
    );
};

export default OrderRecord;