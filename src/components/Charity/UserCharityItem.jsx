import React from 'react';
import { Box, Chip, Grid, Paper, Typography } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';


const images = [
    '/charity_img/garbage.jpg',
    '/charity_img/garbage2.jpg',
    '/charity_img/shore.jpg',
];

const statusColors = {
    REGISTERED: '#BBDEFB',
    ENROLLED: '#D1C4E9', // Blue-purple series color
    COMPLETED: '#C8E6C9',
    REJECTED: '#E0E0E0', // Swapped with ENROLLED color
    ABSENT: '#E0E0E0'
};

const textColors = {
    REGISTERED: '#1976d2',
    ENROLLED: '#673ab7', // Darker shade of blue-purple
    COMPLETED: '#388e3c',
    REJECTED: '#616161', // Swapped with ENROLLED color
    ABSENT: '#616161'
};

const getStatusIcon = (status) => {
    switch (status) {
        case 'COMPLETED':
            return <CheckCircleIcon />;
        case 'REJECTED':
        case 'ABSENT':
            return <CancelIcon />;
        case 'ENROLLED':
        case 'REGISTERED':
            return <CheckCircleIcon />;
        default:
            return null;
    }
};

const UserCharityItem = ({ event, index }) => {
    return (
        <Paper elevation={3} sx={{ padding: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={3} sx={{ textAlign: 'center' }}>
                    <Box
                        component="img"
                        src={event.charityEvent.imgUrl || images[index % images.length]}
                        alt={event.charityEvent.name}
                        sx={{
                            width: '12rem',
                            height: '12rem',
                            borderRadius: '5%',
                            marginTop: 1,
                            objectFit: 'cover', // This will crop the image to fit the box
                            objectPosition: 'center' // This will center the image within the box
                        }}
                    />
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: 1.3, marginBottom: 2 }}>
                        {event.charityEvent.name}
                    </Typography>

                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, color: '#adafb8' }}>
                        <DateRangeIcon sx={{ color: '#adafb8', fontSize: '1.3rem', marginRight: 1 }} />
                        {event.charityEvent.startTime}
                    </Typography>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, color: '#adafb8' }}>
                        <LocationOnIcon sx={{ color: '#adafb8', fontSize: '1.3rem', marginRight: 1 }} />
                        <span style={{ fontSize: '1rem', marginRight: '0.5rem' }}>Venue:</span>
                        {event.charityEvent.location}
                    </Typography>
                    <Typography variant="body1" sx={{ display: 'flex', whiteSpace: 'normal', overflowWrap: 'break-word', wordBreak: 'break-all', color: '#adafb8' }}>
                        <DescriptionIcon sx={{ color: '#adafb8', fontSize: '1.3rem', marginRight: 1 }} />
                        <span style={{ fontSize: '1rem', marginRight: '0.5rem', wordBreak: 'normal' }}>Description:</span>
                        <span>{event.charityEvent.description.substr(0, 300)}</span>
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Chip
                        icon={getStatusIcon(event.charityEventParticipation.status)}
                        label={event.charityEventParticipation.status === 'REGISTERED' ? 'PENDING' : event.charityEventParticipation.status}
                        sx={{
                            backgroundColor: statusColors[event.charityEventParticipation.status],
                            color: textColors[event.charityEventParticipation.status],
                            fontWeight: 'bold',
                            marginBottom: 1,
                            '& .MuiChip-icon': {
                                color: textColors[event.charityEventParticipation.status],
                            }
                        }}
                    />
                    {event.charityEventParticipation.status === 'COMPLETED' && (
                        <Chip
                            icon={<MilitaryTechIcon />}
                            label={`${event.charityEvent.point} Points`}
                            sx={{
                                backgroundColor: '#fdf1f5',
                                color: '#e8628d',
                                fontWeight: 'bold',
                                padding: '0 10px',
                                marginTop: 1,
                                '& .MuiChip-icon': {
                                    color: '#e8628d',
                                }
                            }}
                        />
                    )}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default UserCharityItem;