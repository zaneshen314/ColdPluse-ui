import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import ConcertEvent from "./components/ConcertEvent";
import UserCharityWrapper from "./components/Charity/UserCharityWrapper";
import NavigationBar from './components/NavigationBar';
import Ticket from './components/Ticket/Ticket';
import {initialState, charityEventReducer} from "./reducer/charityEventReducer";
import OrderHistoryWrapper from "./components/user-order-history/OrderHistoryWrapper";
import CharityEventsPage from "./components/Charity/CharityEventsPage";
import PrivateRoute from "./route/PrivateRoute";
import Payment from "./components/Payment/Payment";
import { AuthProvider } from "./context/AuthContext";
import Concerts from "./components/Concerts";
import { Box } from "@mui/material";
import NotFound from "./components/NotFound";

export const AppContext = React.createContext();

function App() {
    const [state, dispatch] = React.useReducer(charityEventReducer, initialState);

    return (
        <Box className="App" sx={{
            background: "linear-gradient(to bottom, #020024, #090979, #00d4ff)", // Cosmic gradient
            color: "#fff", // White text for readability
            minHeight: "100vh",
            }}>
            <AppContext.Provider value={{state, dispatch}}>
            <AuthProvider>
                <Router>
                    <NavigationBar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/ticket/:concertId" element={<Ticket/>}/>
                        <Route path="/events" element={<CharityEventsPage/>}/>
                        <Route path="/concert-event" element={<ConcertEvent/>}/>
                        <Route path="/userCharityWrapper" element={<UserCharityWrapper/>}/>
                        <Route path="/user-order-history" element={<OrderHistoryWrapper width="1000px"/>}/>
                        <Route path="/show-all-concerts" element={<Concerts/>}/>
                        <Route path="/userCharityWrapper" element={<UserCharityWrapper width="1000px"/>}/>
                        <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Router>
            </AuthProvider>
            </AppContext.Provider>
        </Box>
    );
}

export default App;