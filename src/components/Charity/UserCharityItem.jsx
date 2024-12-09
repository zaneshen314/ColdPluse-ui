import React from 'react';
import {Box, Grid, Paper, Typography} from '@mui/material';


const getBackgroundColor = (index) => {
    const colors = ['#E0F7FA', '#FFEBEE', '#FFF3E0'];
    return colors[index % colors.length];
};

const images = [
    'https://via.placeholder.com/150/0000FF/808080?text=Image1',
    'https://via.placeholder.com/150/FF0000/FFFFFF?text=Image2',
    'https://via.placeholder.com/150/FFFF00/000000?text=Image3',
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
                            width: '100%',
                            height: 'auto',
                            borderRadius: '20%',
                            marginTop: 1
                        }}
                    />
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="body1">Date: {event.date}</Typography>
                    <Typography variant="body1">Venue: {event.venue}</Typography>
                    <Typography variant="body1" sx={{ whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                        Description: {event.description}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6" align="right">{event.point}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default UserCharityItem;