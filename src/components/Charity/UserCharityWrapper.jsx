import React from 'react';
import {AppBar, Box, Chip, Container, Toolbar, Typography} from '@mui/material';
import UserCharityList from './UserCharityList';

const UserCharityWrapper = () => {
    return (
        <Box sx={{maxWidth: '800px', margin: '0 auto'}}>
            <AppBar position="static" sx={{backgroundColor: 'white', margin: '30px 0px'}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, color: 'black'}}>
                        Events
                    </Typography>
                    <Chip label={6} variant="outlined"/>
                </Toolbar>
            </AppBar>
            <Container>
                <UserCharityList/>
            </Container>
        </Box>
    );
};

export default UserCharityWrapper;