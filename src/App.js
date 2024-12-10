import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About/About";
import ConcertEvent from "./components/ConcertEvent";
import UserCharityWrapper from "./components/Charity/UserCharityWrapper";
import { Container, AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import NavigationBar from './components/NavigationBar';
import Events from './components/Events';
import UserProfile from './components/UserProfile';
import { Box } from "@mui/material";

function App() {
  const event = {
    id: 1,
    poster:
        "https://www.allegiantstadium.com/assets/img/Static_Venue_800x500_Coldplay_2025_NA_Regional_AllegiantStadium_0606-05e3ffdf12.jpg",
    title: "Live Concert: The Rockers",
    time: "7:00 PM, Dec 15, 2024",
    venue: "Stadium Arena, NY",
    priceRange: "$50 - $200",
  };

  const handleBuyTicket = () => {
    alert("Redirecting to ticket purchase...");
  };

  return (
    <body>
      <div className="App">
        <Router>
          <NavigationBar />
                  sx={{
                    height: 40,
                    width: 40,
                    marginRight: 2,
                    borderRadius: "50%", // Makes the image circular
                  }}
              />
              {/* Title */}
              <Typography variant="h6" sx={{ marginRight: 4, fontWeight: "bold" }}>
                Coldplay Concert
              </Typography>
              {/* Buttons aligned to the left */}
              <Button color="inherit" component={Link} to="/" sx={{ marginRight: 2 }}>
                Home
              </Button>
              <Button color="inherit" component={Link} to="/ticket" sx={{ marginRight: 2 }}>
                Ticket
              </Button>
              <Button color="inherit" component={Link} to="/about" sx={{ marginRight: 2 }}>
                About
              </Button>
              <Button color="inherit" component={Link} to="/userCharityWrapper" sx={{ marginRight: 2 }}>
                CharityWrapper
              </Button>
              <Button color="inherit" component={Link} to="/concert-event" sx={{ marginRight: 2 }}>
                Concert Event
              </Button>
            </Toolbar>
          </AppBar>
          <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/events" element={<Events />} />
              <Route path="/about" element={<About />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="*" element={<h1>Not Found</h1>} />          
              <Route path="/userCharityWrapper" element={<UserCharityWrapper width="1000px" />} />
              <Route
                  path="/concert-event"
                  element={<ConcertEvent event={event} onBuyTicket={handleBuyTicket} />}
              />
        </Routes>
          </Container>
        </Router>
      </div>
    </body>
  );
}

export default App;