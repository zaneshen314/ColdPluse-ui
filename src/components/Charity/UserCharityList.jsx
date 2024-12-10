import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import UserCharityItem from './UserCharityItem';
import ListIcon from '@mui/icons-material/List';

const UserCharityList = ( {userCharityEvents} ) => {
    const events = [
        { title: 'Event 1', date: '2023-10-01', venue: 'Venue 1', description: 'Description 1', point: 10, status: 'REGISTERED' },
        { title: 'Event 2', date: '2023-10-02', venue: 'Venue 2', description: 'Description 2 Description 2 Description 2 Description 2 Description 2', point: 20, status: 'ENROLLED' },
        { title: 'Event 3', date: '2023-10-03', venue: 'Venue 3', description: 'Description 3', point: 30, status: 'COMPLETED' },
        { title: 'Event 4', date: '2023-10-04', venue: 'Venue 4', description: 'Description 4', point: 40, status: 'REJECTED' },
        { title: 'Event 5', date: '2023-10-05', venue: 'Venue 5', description: 'Description 5', point: 50, status: 'ABSENT' },
    ];

    return (
        <Box>
            <Grid container spacing={2}>
                {userCharityEvents.map((event, index) => (
                    <Grid item xs={12} key={index}>
                        <UserCharityItem event={event} index={index} eventItem={event}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default UserCharityList;