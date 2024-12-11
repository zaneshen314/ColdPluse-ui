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
                                Total Heartbeats: {currentPoint} <span className="jump">❤️</span>
                            </>
                        }
                        variant="outlined"
                        sx={{
                            backgroundColor: '#fdf1f5',
                            color: '#e8628d',
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