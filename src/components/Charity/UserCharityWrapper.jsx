import React from 'react';
import { AppBar, Box, Chip, Container, Toolbar, Typography } from '@mui/material';
import UserCharityList from './UserCharityList';

const UserCharityWrapper = ({ width }) => {
    return (
        <Box sx={{ margin: '0 auto', maxWidth: { width }, boxShadow: 3, padding: 2, borderRadius: 2, backgroundColor: '#f0f4f8' }}>
            <AppBar position="static" sx={{ backgroundColor: 'white', width: '97%', margin: '20px auto' }}>
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                        Events History
                    </Typography>
                    <Chip label={6} variant="outlined" />
                </Toolbar>
            </AppBar>
            <Container>
                <UserCharityList />
            </Container>
        </Box>
    );
};

export default UserCharityWrapper;