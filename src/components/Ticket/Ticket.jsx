import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Divider, Typography, Alert, AppBar, Toolbar, Button, Dialog, FormControl, InputLabel, Select, MenuItem , Paper } from '@mui/material';
import { getEventData, getConcertScheduleByConcertId, getConcertScheduleClassByConcertIdAndScheduleId, getConcertByConcertId, getConcertClassByConcertId } from '../../api/concertSessionEvent';
import ScheduleMeta from './ScheduleMeta';
import TicketOptions from './TicketOptions';
import Login from '../Login/Login';
import CountdownTimer from '../CountdownTimer';
import { useAuth } from '../../context/AuthContext';

export default function Ticket() {
    const navigate = useNavigate();
    const { authenticated } = useAuth();
    const { concertId } = useParams();  
    const [ticketOptions, setTicketOptions] = useState([]);
    const [scheduleMeta, setScheduleMeta] = useState({});
    const [selectedTickets, setSelectedTickets] = useState({});
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedScheduleId, setSelectedScheduleId] = useState('');
    const [loginOpen, setLoginOpen] = useState(false);
    const [disableBuy, setDisableBuy] = useState(true);
    const [concertName, setConcertName] = useState("");
    const [scheduleList, setScheduleList] = useState([]);
    const [initializedScheduleList, setInitializedScheduleList] = useState(false);
    const [saleStartTime, setSaleStartTime] = useState(null);
    const [remainingTotalCapacity, setRemainingTotalCapacity] = useState(0);
    const [seatWarning, setSeatWarning] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [classWarning, setClassWarning] = useState(false);
    const [notConcertStarted, setNotConcertStarted] = useState(true);
    const [isSaleStarted, setIsSaleStarted] = useState(false);

    const totalPrice = Object.values(selectedTickets).reduce((acc, ticket) => acc + (ticket.price * ticket.quantity), 0);
    const totalSelectedTickets = Object.values(selectedTickets).reduce((acc, ticket) => acc + ticket.quantity, 0);

    const handleTicketChange = (id, className, price, value) => {
        const newTotalSelectedTickets = totalSelectedTickets + value - (selectedTickets[id]?.quantity || 0);
        const selectedOption = ticketOptions.find(option => option.id === id);

        if (newTotalSelectedTickets <= 3 && newTotalSelectedTickets <= remainingTotalCapacity && value <= selectedOption.availableSeats) {
            if (selectedClass === null || selectedClass === className) {
                setSelectedTickets((prev) => ({
                    ...prev,
                    [id]: { price, quantity: value }
                }));
                setSelectedClass(className);
                setShowWarning(false);
                setClassWarning(false);
                setSeatWarning(false);
            } else {
                setClassWarning(true);
            }
        } else {
            if (newTotalSelectedTickets > remainingTotalCapacity || value > selectedOption.availableSeats) {
                setSeatWarning(true);
            } else {
                setShowWarning(true);
            }
        }
    };

    const handleBuyClick = () => {
        const token = localStorage.getItem('token');
        if (!token) {            
            setLoginOpen(true);
        } else {
            authenticated();
            const ticket = {
                numberOfTickets: totalSelectedTickets,
                time: scheduleMeta.start_time,
                venue: scheduleMeta.venue,
                ticketClass: selectedClass,
                pricePerTicket: ticketOptions.find((detail) => detail.className === selectedClass).price,
                concertClassId: ticketOptions.find((detail) => detail.className === selectedClass).id,
                scheduleId: scheduleMeta.scheduleId,
                concertName: scheduleMeta.name
            };
            navigate('/payment', { state: ticket });                
        }
    };

    const handleScheduleChange = (event) => {
        setSelectedScheduleId(event.target.value);
    };

    useEffect(() => {
        getConcertByConcertId(concertId).then((data) => {
            setConcertName(data.name);
        });
        getConcertScheduleByConcertId(concertId).then((data) => {
            setScheduleList(data);
            setSelectedScheduleId(data[0].scheduleId || '');
            setInitializedScheduleList(true);
        });
    }, [concertId]);

    useEffect(() => {
        if (!selectedScheduleId) {
            return;
        }
        getEventData(concertId, selectedScheduleId).then((data) => {
            setScheduleMeta(data);
            setSaleStartTime(new Date(data.saleStartTime));
            setIsSaleStarted(new Date() >= new Date(data.saleStartTime));
            setNotConcertStarted(new Date() < new Date(data.start_time));
        });
        getConcertScheduleClassByConcertIdAndScheduleId(concertId, selectedScheduleId).then((scheduleClassData) => {
            getConcertClassByConcertId(concertId).then((classData) => {
                const updatedClassData = classData.map(classItem => {
                    const scheduleClassItem = scheduleClassData.find(scheduleItem => scheduleItem.concertClassId === classItem.id);
                    if (scheduleClassItem) {
                        return { ...classItem, availableSeats: scheduleClassItem.availableSeats };
                    }
                    return classItem;
                });
                setRemainingTotalCapacity(scheduleClassData.reduce((acc, detail) => acc + detail.availableSeats, 0));
                setTicketOptions(updatedClassData);
            });
        });
    }, [selectedScheduleId, concertId]);

    useEffect(() => {
        if (totalSelectedTickets > 0 && totalSelectedTickets <= 3) {
            setDisableBuy(false);
        } else {
            setDisableBuy(true);
        }
    }, [totalSelectedTickets]);

    return (
        <Container sx={{ pt: 4, pb: 10 }}>
            <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
                <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>{concertName}</Typography>
                {initializedScheduleList && (
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel id="schedule-select-label">Select Schedule</InputLabel>
                        <Select
                            labelId="schedule-select-label"
                            value={selectedScheduleId}
                            label="Select Schedule"
                            onChange={handleScheduleChange}
                        >
                            {scheduleList.map((schedule) => (
                                <MenuItem key={schedule.scheduleId} value={schedule.scheduleId}>
                                    {schedule.name} ({new Date(schedule.start_time).toLocaleString()})
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
                <ScheduleMeta scheduleMeta={scheduleMeta} remainingCapacity={remainingTotalCapacity}/>
            </Paper>
            <Divider style={{ margin: '20px 0'}} />
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Ticket Option</Typography>
            {showWarning && (
                <Alert severity="warning" sx={{ mb: 2 }}>
                    Each user can only purchase at most 3 tickets per concert.
                </Alert>
            )}
            {classWarning && (
                <Alert severity="warning" sx={{ mb: 2 }}>
                    You can only buy tickets from the same class in one order. Each user can only purchase at most 3 tickets per concert.
                </Alert>
            )}
            {seatWarning && (
                <Alert severity="warning" sx={{ mb: 2 }}>
                    The total number of selected tickets must be smaller than the available seats in that ticket option and the total remaining available seats.
                </Alert>
            )}
            <TicketOptions 
                ticketOptions={ticketOptions} 
                selectedTickets={selectedTickets} 
                handleTicketChange={handleTicketChange} 
            />
            <AppBar position="fixed" color="primary" sx={{ 
                background: 'linear-gradient(90deg, #9b59b6, #4fa1d9)', top: 'auto', bottom: 0 }}>
                <Toolbar>                    
                    {isSaleStarted ? (
                        notConcertStarted ? (
                            <>                        
                                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                {totalSelectedTickets<=0 ?``:`Total Tickets: ${totalSelectedTickets} | Total Price: USD${totalPrice.toFixed(2)}`}
                                </Typography>
                                <Button disabled={disableBuy} variant="contained" color="secondary" onClick={handleBuyClick}>
                                    Buy
                                </Button>
                            </>
                        ):(
                            <>                            
                                <Typography sx={{flexGrow:1}}></Typography>
                                <Typography> Concert started</Typography>
                            </>
                        )
                    ) : (
                        <>
                            <Typography sx={{flexGrow:1}}></Typography>
                            <CountdownTimer targetDate={saleStartTime}/>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Dialog open={loginOpen} onClose={() => setLoginOpen(false)}>
        <Login isVisible={loginOpen} onClose={() => {
            setLoginOpen(false);
            window.location.reload();}} />
            </Dialog>
        </Container>
    );
}