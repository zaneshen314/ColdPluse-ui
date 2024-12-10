import React from 'react';
import {Box, Chip, Collapse, Grid, Paper, Typography} from '@mui/material';
import TicketList from './TicketList';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from "@mui/icons-material/Description";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GridOnRoundedIcon from '@mui/icons-material/GridOnRounded';

const OrderRecord = ({order, expanded, onToggle}) => {
    return (
        <Paper elevation={3} sx={{padding: 2, marginBottom: 2, cursor: 'pointer'}} onClick={onToggle}>
            <Grid container spacing={2}>
                <Grid item xs={3} sx={{textAlign: 'center'}}>
                    <Box
                        component="img"
                        src={order.imgUrl}
                        alt={order.concertName}
                        sx={{
                            width: '12rem',
                            height: '12rem',
                            borderRadius: '5%',
                            objectFit: 'cover',
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" sx={{fontWeight: 'bold', marginTop: 1.3, marginBottom: 1}}>
                        {order.concertName}
                    </Typography>
                    <Typography variant="body1"
                                sx={{display: 'flex', alignItems: 'center', marginBottom: 1.3, color: '#adafb8'}}>
                        <DateRangeIcon sx={{color: '#adafb8', fontSize: '1.3rem', marginRight: 1}}/>
                        {order.startTime}
                    </Typography>
                    <Typography variant="body1"
                                sx={{display: 'flex', alignItems: 'center', marginBottom: 1.3, color: '#adafb8'}}>
                        <LocationOnIcon sx={{color: '#adafb8', fontSize: '1.3rem', marginRight: 1}}/>
                        <span style={{fontSize: '1rem', marginRight: '0.5rem'}}>Venue:</span>
                        {"Beach Park"}
                    </Typography>
                    <Typography variant="body1"
                                sx={{display: 'flex', alignItems: 'center', marginBottom: 1.3, color: '#adafb8'}}>
                        <GridOnRoundedIcon sx={{color: '#adafb8', fontSize: '1.3rem', marginRight: 1}}/>
                        <span style={{fontSize: '1rem', marginRight: '0.5rem'}}>Region:</span>
                        {order.concertClassName}
                    </Typography>
                    <Typography variant="body1" sx={{display: 'flex', alignItems: 'center', color: '#adafb8'}}>
                        <DescriptionIcon sx={{color: '#adafb8', fontSize: '1.3rem', marginRight: 1}}/>
                        <span style={{fontSize: '1rem', marginRight: '0.5rem'}}>Purchased on:</span>
                        {order.transactionTime}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                        <Chip
                            label={'Transaction Successful'}
                            sx={{
                                backgroundColor: '#C8E6C9',
                                fontSize: '1rem',
                                color: '#388e3c',
                                fontWeight: 'bold',
                            }}
                        />
                        <Chip
                            icon={<AssignmentIcon/>}
                            label={`${order.ticketVos.length} tickets`}
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
                        <Box sx={{marginTop: 11, marginRight: 7}}>
                            <Typography variant="body1" sx={{fontWeight: 'bold', color: 'black', display: 'inline'}}>
                                Total
                            </Typography>
                            <Typography variant="body1" sx={{
                                fontSize: "1.1rem",
                                fontWeight: 'bold',
                                color: 'blueviolet',
                                display: 'inline',
                                marginLeft: 1
                            }}>
                                ${order.amountInUsd}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <TicketList tickets={order.ticketVos}/>
            </Collapse>
        </Paper>
    );
};

export default OrderRecord;