import React from 'react';
import { Grid, Box } from '@mui/material';
import UserCharityItem from './UserCharityItem';
const UserCharityList = ( {userCharityEvents} ) => {

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