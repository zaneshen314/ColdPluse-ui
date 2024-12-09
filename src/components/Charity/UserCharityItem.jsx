import React from 'react';
import {Box, Grid, Paper, Typography} from '@mui/material';

const getBackgroundColor = (index) => {
    const colors = ['#E0F7FA', '#FFEBEE', '#FFF3E0'];
    return colors[index % colors.length];
};

const images = [
    '/charity_img/haitun.jpg',
    '/charity_img/shuita.jpg',
    '/charity_img/yangtuo.jpg',
];

const UserCharityItem = ({event, index}) => {
    return (
        <Paper elevation={3} sx={{padding: 2, backgroundColor: getBackgroundColor(index)}}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Typography variant="h6">{event.title}</Typography>
                    <Box
                        component="img"
                        src={images[index % images.length]}
                        alt={event.title}
                        sx={{
                            width: '90%',
                            height: '80%',
                            borderRadius: '5%',
                            marginTop: 1
                        }}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body1">Date: {event.date}</Typography>
                    <Typography variant="body1">Venue: {event.venue}</Typography>
                    <Typography variant="body1" sx={{ whiteSpace: 'normal', overflowWrap: 'break-word', wordBreak: 'break-all' }}>
                        Description: {event.description.substr(0, 300)}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h6" align="right">Points: {event.point}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default UserCharityItem;