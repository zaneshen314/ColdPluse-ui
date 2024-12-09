import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import UserCharityItem from './UserCharityItem';

const UserCharityList = () => {
    const events = [
        { title: 'Event 1', date: '2023-10-01', venue: 'Venue 1', description: 'Description 1DescriptionDes cript i onDescriptio nDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription1DescriptionDes1DescriptionDes1DescriptionDes1DescriptionDes1DescriptionDes1DescriptionDes1DescriptionDes1DescriptionDes1DescriptionDes1DescriptionDes1DescriptionDes1DescriptionDes1DescriptionDes1DescriptionDes1DescriptionDes1DescriptionDes1DescriptionDes', point: 10 },
        { title: 'Event 2', date: '2023-10-02', venue: 'Venue 2', description: 'Description 2 Description 2 Description 2 Description 2Description 2Description 2', point: 20 },
        { title: 'Event 1', date: '2023-10-01', venue: 'Venue 1', description: 'Description 1', point: 10 },
        { title: 'Event 2', date: '2023-10-02', venue: 'Venue 2', description: 'Description 2', point: 20 },
        { title: 'Event 1', date: '2023-10-01', venue: 'Venue 1', description: 'Description 1', point: 10 },
        { title: 'Event 2', date: '2023-10-02', venue: 'Venue 2', description: 'Description 2', point: 20 },
        // Add more events as needed
    ];

    return (
        <Grid container spacing={2} >
            {events.map((event, index) => (
                <Grid item xs={12} key={index}>
                    <UserCharityItem event={event} index={index} />
                </Grid>
            ))}
        </Grid>
    );
};

export default UserCharityList;