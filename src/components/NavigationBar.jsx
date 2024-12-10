import {
    AppBar,
    Box,
    Button,
    FormControlLabel,
    FormGroup,
    IconButton,
    Menu,
    MenuItem,
    Switch,
    Toolbar,
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

return (
    <Box sx={{ flexGrow: 1}}>
        <FormGroup>
            <FormControlLabel
                control={
                    <Switch
                        checked={auth}
                        onChange={handleChange}
                        aria-label="login switch"
                    />
                }
                label={auth ? "Logout" : "Login"}
            />
        </FormGroup>
        <AppBar position="static" 
            color= "transparent"
        // sx={{backgroundColor:"#00274D"}}
        >
            <Toolbar sx={{ justifyContent: "flex-end", gap: "1rem"}}>
                <Button color="inherit" onClick={() => navigate("/ticket")}>
                    Tickets
                </Button>          
                <Button color="inherit" onClick={() => navigate("/charity-event")}>
                    Charity Events
                </Button>
                <Button color="inherit" onClick={() => navigate("/concert-event")}>
                    Concert Event Component
                </Button>
                {auth ? 
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
                            <MenuItem onClick={()=>{navigate("/user-profile")}}>User Profile</MenuItem>
                            <MenuItem onClick={()=>{navigate("/user-profile")}}>Order History</MenuItem>
                            <MenuItem onClick={()=>{navigate("/userCharityWrapper")}}>Event History</MenuItem>
                        </Menu>
                    </div>
                : 
                    <Button variant="outlined" onClick={() => navigate("/login")} sx={{ borderRadius: "80rem" }}>Login</Button>
                }
            </Toolbar>
        </AppBar>
    </Box>
);
}
