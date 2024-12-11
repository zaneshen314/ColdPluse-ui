import React, {useEffect, useState} from 'react';
import {AppBar, Box, Chip, Container, Toolbar, Typography} from '@mui/material';
import UserCharityList from './UserCharityList';
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
            margin: '1% 23.3%',
            maxWidth: {width},
            boxShadow: 3,
            padding: 2,
            borderRadius: 2,
        }}>
            <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent', width: '97%', margin: '10px auto', marginBottom: "20px" }}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'black', fontWeight: "bold" }}>
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
                            backgroundColor: currentPoint === 0 ? '#98F5F9' : '#EF405B',
                            color: currentPoint === 0 ? '#0C64A7' : '#fdf1f5',
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
            {userCharityEvents.length > 0 && (
                <Container>
                    <UserCharityList userCharityEvents={userCharityEvents} setUserCharityEvents={setUserCharityEvents}/>
                </Container>
            )}
        </Box>
    );
};

export default UserCharityWrapper;