import React from 'react';
import {Box, Chip, Grid, Paper, Typography} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

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
                <Grid item xs={2} sx={{textAlign: 'center'}}>
                    <Typography variant="h6" sx={{fontFamily: 'Comic Sans MS, cursive, sans-serif'}}>
                        {event.title}
                    </Typography>
                    <Box
                        component="img"
                        src={images[index % images.length]}
                        alt={event.title}
                        sx={{
                            width: '8rem',
                            height: '8rem',
                            borderRadius: '5%',
                            marginTop: 1
                        }}
                    />
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="body1" sx={{display: 'flex', alignItems: 'center', marginBottom: 1}}>
                        <Chip
                            label={<DateRangeIcon sx={{color: '#6B8EAD', fontSize: '1.3rem', margin: "5px 0px 0px 0px"}}/>}
                            sx={{marginRight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        />
                        <span style={{
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            color: '#6B8EAD',
                            marginRight: '0.5rem',
                            letterSpacing: "3.1px"
                        }}>Date: </span> {event.date}
                    </Typography>
                    <Typography variant="body1" sx={{display: 'flex', alignItems: 'center', marginBottom: 1}}>
                        <Chip
                            label={<LocationOnIcon
                                sx={{color: '#6B8EAD', fontSize: '1.3rem', margin: "5px 0px 0px 0px"}}/>}
                            sx={{marginRight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        />
                        <span style={{
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            color: '#6B8EAD',
                            marginRight: '0.5rem'
                        }}>Venue:</span> {event.venue}
                    </Typography>

                    <Typography variant="body1" sx={{
                        display: 'flex',
                        whiteSpace: 'normal',
                        overflowWrap: 'break-word',
                        wordBreak: 'break-all'
                    }}>
                        <Chip
                            label={<DescriptionIcon
                                sx={{color: '#6B8EAD', fontSize: '1.3rem', margin: "5px 0px 0px 0px"}}/>}
                            sx={{marginRight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        />

                        <span style={{
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            color: '#6B8EAD',
                            marginRight: '0.5rem',
                            wordBreak: "normal",
                            letterSpacing: "2.3px"
                        }}>Desc:</span>
                        <span>{event.description.substr(0, 300)}</span>
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '5px 0px',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            color: '#F3F3F3',
                            backgroundColor: '#1E90FF',
                            borderRadius: '5px',
                            whiteSpace: 'normal',
                            wordBreak: 'break-word',
                            textAlign: 'center'
                        }}
                    >
                        Points {event.point}
                    </Box>
                    <LocalFloristIcon sx={{color: '#1976d2', fontSize: '3rem', marginLeft: "10%", marginTop: '70%'}} />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default UserCharityItem;