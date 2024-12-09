import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ConcertEvent from "./components/ConcertEvent";
import UserCharityWrapper from "./components/Charity/UserCharityWrapper";
import { Container } from "@mui/material";



function App() {

  const event = {
    id: 1,
    poster: "https://www.allegiantstadium.com/assets/img/Static_Venue_800x500_Coldplay_2025_NA_Regional_AllegiantStadium_0606-05e3ffdf12.jpg",
    title: "Live Concert: The Rockers",
    time: "7:00 PM, Dec 15, 2024",
    venue: "Stadium Arena, NY",
    priceRange: "$50 - $200",
  };

  const handleBuyTicket = () => {
    alert("Redirecting to ticket purchase...");
  };

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/ticket">Ticket</Link>
          <Link to="/about">About</Link>
          <Link to="/userCharityWrapper">CharityWrapper</Link>
          <Link to="/concert-event">Concert Event</Link>
          {/* <Link to="/login">Login</Link> */}
        </nav>
        <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/userCharityWrapper" element={<UserCharityWrapper width='1000px' />} />
          <Route
              path="/concert-event"
              element={<ConcertEvent event={event} onBuyTicket={handleBuyTicket} />}
          />
        </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
