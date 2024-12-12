import React, {useState, useEffect} from "react";
import {Box, Typography, Modal, Button, IconButton} from "@mui/material";
import CharityEventList from "./CharityEventList";
import {getAllCharityEvents, getUserCurrentCharityEventIds, registerCharityEvent} from "../../api/charityEvent";
import CloseIcon from '@mui/icons-material/Close';

const CharityEventsPage = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [selectedEventId, setSelectedEventId] = useState(null);
    const [ids, setIds] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await getAllCharityEvents();
                setIds(await getUserCurrentCharityEventIds());
                setEvents(data);
            } catch (err) {
                setError("Failed to fetch charity events.");
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const handleJoinEvent = (eventId) => {
        if (localStorage.getItem("token") !== null) {
            setSelectedEventId(eventId);
            setOpenModal(true);
        } else {
            alert("Please login");
        }
    };

    const handleModalClose = (claim) => {
        setOpenModal(false);

        if (selectedEventId !== null && Array.isArray(ids)) {
            registerCharityEvent(selectedEventId, claim).then((response) => {
                setIds([...ids, selectedEventId]);
            });
        }
    };

    const handleClose = () => {
        setOpenModal(false);
    }

    if (loading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    backgroundColor: "#f5f5f5",
                }}
            >
                <Typography variant="h6">Loading...</Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    backgroundColor: "#f5f5f5",
                }}
            >
                <Typography variant="h6" color="error">
                    {error}
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{overflowX: "hidden"}}>
            <CharityEventList events={events} onJoinEvent={handleJoinEvent} joinedIds={ids} setIds={setIds}/>
            <Modal
                open={openModal}
                onClose={() => handleModalClose(false)}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 300,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '10px',
                    }}
                >
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Claim Heartbeats
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        Do you want to claim heartbeats for this event?
                    </Typography>
                    <Box>
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="contained" color="primary" onClick={() => handleModalClose(true)}>
                                Yes
                            </Button>
                            <Button variant="contained" color="secondary" onClick={() => handleModalClose(false)}>
                                No
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default CharityEventsPage;