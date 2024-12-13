import React, { useState } from 'react';
import {AppBar, Box, Button, Chip, FormGroup, IconButton, Menu, MenuItem, Toolbar} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import Login from './Login/Login';
import Signup from './Login/Signup';
import { message } from 'antd'


export default function NavigationBar() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(!!localStorage.getItem('token'));
    const name = localStorage.getItem('name');
    const [anchorEl, setAnchorEl] = useState(false);
    const [isLoginModalVisible, setLoginModalVisible] = useState(false);
    const [isSignupModalVisible, setSignupModalVisible] = useState(false); // State for signup modal

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLoginClick = () => {
        setLoginModalVisible(true);
    };

    const handleSignupClick = () => {
        setSignupModalVisible(true);
    };

    const handleCloseModal = () => {
        setLoginModalVisible(false);
        setSignupModalVisible(false);
        setAuth(!!localStorage.getItem('token'));
        window.location.reload(); // Refresh the page after login
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        setAuth(!!localStorage.getItem('token'));
        message.success('Logged out successfully!').then(r => navigate('/'));
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <FormGroup>
            </FormGroup>
            <AppBar position="static" sx={{ backgroundColor: "#020024" }}>
                <Toolbar sx={{ justifyContent: "flex-end", gap: "1rem" }}>
                    <Box sx={{flexGrow: 1}}>
                        <img src="/ColdPulse.png" alt="ColdPulse" style={{ height: '1rem'}} />
                    </Box>
                    <Button color="inherit" onClick={() => navigate("/")}>
                        Home
                    </Button>
                    <Button color="inherit" onClick={() => navigate("/events")}>
                        Charity Events
                    </Button>
                    <Button color="inherit" onClick={() => navigate("/show-all-concerts")}>
                        Concerts
                    </Button>
                    {
                        auth && name && (
                            <Chip
                                label={`Hi, ${name}`}
                                sx={{
                                    marginLeft: 1,
                                    backgroundImage: "linear-gradient(45deg, #fab2ff, #1904e5)",
                                    color: "white",
                                    fontWeight: 'bold',
                                    fontSize: "0.9em"
                                }}
                            />
                        )
                    }
                    {auth ? (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "center",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "center",
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={() => { navigate("/user-order-history") }}>Order History</MenuItem>
                                <MenuItem onClick={() => { navigate("/userCharityWrapper") }}>Event History</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </div>
                    ) : (
                        <>
                            <Button variant="contained" onClick={handleLoginClick} sx={{ backgroundColor: "#22222", color: "white", borderRadius: "80rem" }}>Login</Button>
                            <Button variant="contained" onClick={handleSignupClick} sx={{ backgroundColor: "blueviolet", color: "white", borderRadius: "80rem" }}>Signup</Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Login isVisible={isLoginModalVisible} onClose={handleCloseModal} />
            <Signup isVisible={isSignupModalVisible} onClose={handleCloseModal} /> {/* Add Signup component */}
        </Box>
    );
}