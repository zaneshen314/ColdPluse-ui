import React from 'react';
import {AppBar, Box, Chip, Container, Toolbar, Typography} from '@mui/material';
import UserCharityList from './UserCharityList';

const UserCharityWrapper = ({width}) => {
    return (
        <Box sx={{
            margin: '0 auto',
            maxWidth: {width},
            boxShadow: 3,
            padding: 2,
            borderRadius: 2,
            backgroundColor: '#ADD8E6'
        }}>
            <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent', width: '97%', margin: '20px auto' }}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: '#1976d2', fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                        Events History
                    </Typography>
                    <Chip
                        label={"TOTAL POINTS: "+ 6}
                        variant="outlined"
                        sx={{
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            fontSize: '1.3rem',
                            padding: '0 10px',
                            borderRadius: '5px',
                            '& .MuiChip-label': {
                                fontWeight: 'bold',
                            }
                        }}
                    />
                </Toolbar>
            </AppBar>
            <Container>
                <UserCharityList/>
            </Container>
        </Box>
    );
};

export default UserCharityWrapper;