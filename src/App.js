import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import ConcertEvent from "./components/ConcertEvent";
import UserCharityWrapper from "./components/Charity/UserCharityWrapper";
import NavigationBar from './components/NavigationBar';
import UserProfile from './components/UserProfile';
import Ticket from './components/Ticket/Ticket';
import {initialState, charityEventReducer} from "./reducer/charityEventReducer";
import OrderHistoryWrapper from "./components/user-order-history/OrderHistoryWrapper";
import CharityEventsPage from "./components/Charity/CharityEventsPage";
import PrivateRoute from "./route/PrivateRoute";
import Payment from "./components/Payment";
import { AuthProvider } from "./context/AuthContext";
import Concerts from "./components/Concerts";

export const AppContext = React.createContext();

function App() {
    const [state, dispatch] = React.useReducer(charityEventReducer, initialState);

    return (
        <body>
        <div className="App">
            <AppContext.Provider value={{state, dispatch}}>
            <AuthProvider>
                <Router>
                    <NavigationBar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/ticket" element={<Ticket/>}/>
                        <Route path="/events" element={<CharityEventsPage/>}/>
                        <Route path="/concert-event" element={<ConcertEvent/>}/>
                        <Route path="/user-profile" element={<UserProfile/>}/>
                        <Route path="/user-order-history" element={<OrderHistoryWrapper width="1000px"/>}/>
                        <Route path="/show-all-concerts" element={<Concerts/>}/>
                        <Route path="*" element={<h1>Not Found</h1>}/>
                        <Route path="/userCharityWrapper" element={<UserCharityWrapper width="1000px"/>}/>
                        <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>}/>
                    </Routes>
                </Router>
            </AuthProvider>
            </AppContext.Provider>
        </div>
        </body>
    );
}

export default App;