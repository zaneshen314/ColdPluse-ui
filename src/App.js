import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ConcertEvent from "./components/ConcertEvent";
import UserCharityWrapper from "./components/Charity/UserCharityWrapper";
import NavigationBar from './components/NavigationBar';
import Events from './components/Events';
import UserProfile from './components/UserProfile';
import Ticket from './components/Ticket';

function App() {

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
                element={<ConcertEvent />}
            />
        </Routes>
        </Router>
      </div>
    </body>
  );
}

export default App;