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
import Ticket from './components/Ticket';

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
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/events" element={<Events />} />
            <Route path="/concert-event" element={<ConcertEvent />} />
              <Route path="/userCharityWrapper" element={<UserCharityWrapper />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="*" element={<h1>Not Found</h1>} />          
            <Route path="/userCharityWrapper" element={<UserCharityWrapper width="1000px" />} />
            <Route
                path="/concert-event"
                element={<ConcertEvent event={event} onBuyTicket={handleBuyTicket} />}
            />
        </Routes>
        </Router>
      </div>
    </body>
  );
}

export default App;