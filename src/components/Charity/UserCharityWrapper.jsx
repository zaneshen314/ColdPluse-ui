import React, {useEffect, useState} from 'react';
import {AppBar, Box, Chip, Container, Toolbar, Typography} from '@mui/material';
import UserCharityList from './UserCharityList';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {getUserCurrentPoints, getUserEventParticipation} from "../../api/charityEvent";
import "./Carousel.css"

const UserCharityWrapper = ({width}) => {
    const [userCharityEvents, setUserCharityEvents] = useState([]);
    const [currentPoint, setCurrentPoint] = useState(0)
    useEffect(() => {
        getUserEventParticipation().then((response) => {
            setUserCharityEvents(response);
        });
        getUserCurrentPoints().then((response) => {
            setCurrentPoint(response);
        });
    }, []);
    return (
        <Box sx={{
            margin: '1% 23.7%',
            maxWidth: {width},
            boxShadow: '0 0 10px white',
            padding: 2,
            borderRadius: 2,
            backgroundColor: "#b3dcff63",
            border: '1px solid #4e81ad',
        }}>
            <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent', width: '97%', margin: '10px auto', marginBottom: "20px" }}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white', fontWeight: "bold" }}>
                        Events History
                    </Typography>
                    <Chip
                        label={
                            <>
                                Total Heartbeats: {currentPoint}
                                <span className={currentPoint !== 0 ? "jump" : ""} style={{ color: currentPoint === 0 ? 'blue' : 'inherit' }}>
                {currentPoint === 0 ? '🩵' : '❤️'}
            </span>
                            </>
                        }
                        variant="outlined"
                        sx={{
                            backgroundImage: currentPoint === 0 ? 'linear-gradient(to right, #62cff4 0%, #2c67f2 100%)' : 
                            'linear-gradient(to right, #dd2476 0%, #ffc371 100%)',
                            color: currentPoint === 0 ? '#ffff' : '#fdf1f5',
                            fontWeight: "bold",
                            fontSize: '1.1rem',
                            padding: '0 10px',
                            borderRadius: '20px',
                            border: 'none',
                            '& .MuiChip-icon': {
                                color: '#e8628d',
                            }
                        }}
                    />
                </Toolbar>
            </AppBar>
            {userCharityEvents.length === 0 ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
                    <Typography variant="h6" sx={{ marginBottom: 2 }}>
                        <span style={{ padding: '0 20px' }}>Earning heartbeats by joining our charity events</span>
                    </Typography>
                    <FavoriteIcon sx={{ fontSize: 100, color: '#e8628d' }} />
                </Box>
            ) : (
                <Container>
                    <UserCharityList userCharityEvents={userCharityEvents} setUserCharityEvents={setUserCharityEvents}/>
                </Container>
            )}
        </Box>
    );
};

export default UserCharityWrapper;