import React, { useEffect, useState } from 'react';
import {
    Container,
    TextField,
    Button,
    MenuItem,
    Select,
    FormControl,
    Typography,
    Box,
    Card,
    CardContent,
    CircularProgress,
    Chip,
    Switch,
    FormControlLabel,
    Modal,
    Divider
} from '@mui/material';
import { Payment as PaymentIcon, CheckCircle as CheckCircleIcon, Cancel as CancelIcon } from '@mui/icons-material';
import ETicketGroup from './ETicketGroup';
import { placeOrder } from '../../api/placeOrder';
import { useLocation } from 'react-router-dom';
import { getUserCurrentPoints } from "../../api/charityEvent";
import { putCumulatedPoint } from "../../api/concertSessionEvent";
import { message } from 'antd';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

const Payment = () => {
    const location = useLocation();
    const {
        numberOfTickets,
        time,
        venue,
        ticketClass,
        pricePerTicket,
        concertClassId,
        scheduleId,
        concertName
    } = location.state || {};

    const [guests, setGuests] = useState(Array.from({ length: numberOfTickets }, () => ({ idCardNum: '', name: '' })));
    const [paymentMethod, setPaymentMethod] = useState('paypal');
    const [paymentResult, setPaymentResult] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPoint, setCurrentPoint] = useState(0);
    const [useHeartbeats, setUseHeartbeats] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    useEffect(() => {
        getUserCurrentPoints().then((response) => {
            setCurrentPoint(response);
        });
    }, []);

    const handleidCardNumChange = (index, value) => {
        const newGuests = [...guests];
        newGuests[index].idCardNum = value;
        setGuests(newGuests);
    };

    const handleNameChange = (index, value) => {
        const newGuests = [...guests];
        newGuests[index].name = value;
        setGuests(newGuests);
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleUseHeartbeatsChange = (event) => {
        setUseHeartbeats(event.target.checked);
    };

    const totalCost = numberOfTickets * pricePerTicket;
    const dataComplete = guests.every(guest => guest.idCardNum.trim() && guest.name.trim());
    const textFieldStyle = {
        marginTop: '1rem',
        input: {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(228, 219, 233, 0.25)',
            },
            '&:hover fieldset': {
                borderColor: 'rgba(228, 219, 233, 0.25)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(228, 219, 233, 0.25)',
            },
        },
        '& .MuiInputLabel-root': {
            color: 'white',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'rgba(228, 219, 233, 0.25)',
        },
    };

    const selectStyle = {
        color: "white",
        '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(228, 219, 233, 0.25)',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(228, 219, 233, 0.25)',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(228, 219, 233, 0.25)',
        },
        '.MuiSvgIcon-root ': {
            fill: "white !important",
        }
    };

    const iconStyle = { verticalAlign: 'middle', mr: 1 };
    const typographyStyle = { mb: 1, display: 'flex', alignItems: 'center' };


    function makePayment(trimmedGuests, byHeartbeats) {
        placeOrder(concertClassId, scheduleId, trimmedGuests)
            .then(response => {
                setPaymentResult({
                    concertDetails: {
                        name: response.concertName,
                        time: response.startTime,
                        venue: response.venue,
                        ticketClass: response.concertClassName,
                    },
                    purchasedTime: response.transactionTime,
                    tickets: response.ticketVos
                });
            })
            .catch(error => {
                const response = error.response.data;
                if (response.code !== 200007) {
                    message.error(response.message).then(r => null);
                } else {
                    message.error("Unknown error, please contact support").then(r => null);
                }
                if (byHeartbeats) {
                    putCumulatedPoint(-(totalCost / 10).toFixed(0));
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const onPayButtonClick = () => {
        setIsLoading(true);
        const trimmedGuests = guests.map(guest => ({
            idCardNum: guest.idCardNum.trim(),
            name: guest.name.trim()
        }));

        makePayment(trimmedGuests, false);
    };

    const onPayByHeartbeats = () => {
        setShowConfirmModal(true);
    };

    const handleConfirm = () => {
        setShowConfirmModal(false);
        setIsLoading(true);
        const trimmedGuests = guests.map(guest => ({
            idCardNum: guest.idCardNum.trim(),
            name: guest.name.trim()
        }));

        putCumulatedPoint((totalCost / 10).toFixed(0))
            .then(() => {
                makePayment(trimmedGuests, false);
            })
            .catch(() => {
                alert("You don't have enough heartbeats to pay for the tickets");
                setIsLoading(false);
            });
    };

    return (
        <Container>
            <Box sx={{ position: 'relative', mt: '6rem' }}>
                {isLoading && (
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        zIndex: 9999
                    }}>
                        <CircularProgress />
                    </Box>
                )}
                {paymentResult ? (
                    <ETicketGroup
                        tickets={paymentResult.tickets}
                        concertDetails={paymentResult.concertDetails}
                        purchasedTime={paymentResult.purchasedTime}
                    />
                ) : (
                    <Box>
                        <Card elevation={3} sx={{ backgroundColor: 'rgba(205, 250, 255, 0.2)', color: 'white' }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', margin:'1rem 2rem 0 2rem' }}>
                                    <Typography variant="h4" gutterBottom sx={{ ...typographyStyle, fontWeight: 'bold'}}>
                                            Payment Details
                                    </Typography>
                                    {currentPoint > 0 && (
                                        <Chip
                                            label={
                                                <>
                                                    Total Heartbeats: {currentPoint}
                                                    <span className={"jump"} style={{ color: 'inherit' }}>{'❤️'} </span>
                                                </>
                                            }
                                            variant="outlined"
                                            sx={{
                                                top: 16,
                                                right: 16,                                                
                                                backgroundImage: currentPoint === 0 ? '#98F5F9' : 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
                                                color: currentPoint === 0 ? '#0C64A7' : '#fdf1f5',
                                                fontWeight: "bold",
                                                fontSize: '1.1rem',
                                                padding: '0 10px',
                                                borderRadius: '20px',
                                                border: 'none',
                                                '& .MuiChip-icon': {
                                                    color: '#e8628d',
                                                }
                                            }}
                                        />
                                    )}
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                                    <Box className="concertDetail" sx={{ flex: 1, margin: '2rem'}}>
                                            <Typography variant="h5" sx={{fontWeight: 'bold' }}>
                                                {concertName}
                                            </Typography>
                                            <Box sx={{ my: 2 }}>
                                                <Typography variant="body1" sx={typographyStyle}>
                                                    <AccessTimeIcon sx={iconStyle} />
                                                    Time: {new Date(time).toLocaleString()}
                                                </Typography>
                                                <Typography variant="body1" sx={typographyStyle}>
                                                    <LocationOnIcon sx={iconStyle} />
                                                    Venue: {venue}
                                                </Typography>
                                                <Typography variant="body1" sx={typographyStyle}>
                                                    <ConfirmationNumberIcon sx={iconStyle} />
                                                    Class: {ticketClass}
                                                </Typography>    
                                            </Box>

                                    </Box>
                                    <Divider orientation="vertical" flexItem variant="middle" sx={{backgroundColor:'white'}} />
                                    <Box className="realNameRegistration" sx={{ flex: 2, margin: '2rem' }}>
                                        <Typography variant="h5" sx={{...typographyStyle, fontWeight:'bold'}} gutterBottom>
                                            Please complete the real name registration for each ticket
                                        </Typography>
                                        {guests.map((guest, index) => (
                                            <Box key={index} sx={{ my: 2 }}>
                                                <Typography variant="h6" sx={{fontWeight:'bold'}}>Ticket {index + 1}</Typography>
                                                <Box sx={{ display: 'flex', gap: 2 }}>
                                                    <TextField
                                                        label="ID Card Number"
                                                        variant="outlined"
                                                        fullWidth
                                                        value={guest.idCardNum}
                                                        onChange={(e) => handleidCardNumChange(index, e.target.value)}
                                                        sx={textFieldStyle}
                                                    />
                                                    <TextField
                                                        label="Guest Name"
                                                        variant="outlined"
                                                        fullWidth
                                                        value={guest.name}
                                                        onChange={(e) => handleNameChange(index, e.target.value)}
                                                        sx={textFieldStyle}
                                                    />
                                                </Box>
                                            </Box>
                                        ))}
                                        {!useHeartbeats && (
                                            <Box sx={{marginTop:'2rem'}}>
                                                <Typography variant="h5" sx={{...typographyStyle,fontWeight:'bold'}} gutterBottom>Total Cost: </Typography>
                                                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                                    <Typography variant="body1">Price per Ticket:</Typography>
                                                    <Typography variant="body1" sx={{...typographyStyle, fontWeight:'bold'}}>${pricePerTicket}</Typography>
                                                </Box>
                                                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                                    <Typography variant="body1">Number of Tickets:</Typography>
                                                    <Typography variant="body1" sx={{...typographyStyle, fontWeight:'bold'}}>{numberOfTickets}</Typography>
                                                </Box>                                                
                                                <Divider sx={{ my: 2, backgroundColor:'white'}}/>
                                                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                                    <Typography variant="body1"></Typography>
                                                    <Typography variant="body1" sx={{ ...typographyStyle,fontWeight:'bold'}}>${totalCost}</Typography>
                                                </Box>
                                                <FormControl fullWidth sx={{ my: 2 }}>
                                                    <Typography variant="h6">Select Payment Method</Typography>
                                                    <Select value={paymentMethod} onChange={handlePaymentMethodChange} sx={selectStyle}>
                                                        <MenuItem value="paypal">PayPal</MenuItem>
                                                        <MenuItem value="alipay">支付寶</MenuItem>
                                                        <MenuItem value="weixin">微信支付</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        )}
                                        <Button variant="contained" color="primary"
                                            onClick={useHeartbeats ? onPayByHeartbeats : onPayButtonClick}
                                            disabled={!(useHeartbeats && dataComplete) && (!dataComplete || isLoading)}
                                            sx={{ mt: 2, 
                                                backgroundImage: !(useHeartbeats && dataComplete) && (!dataComplete || isLoading)
                                                ? 'none'
                                                : 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
                                            }}
                                            startIcon={<PaymentIcon />}>
                                            Pay
                                        </Button>
                                        {currentPoint > 0 ?
                                            <FormControlLabel
                                                control={<Switch checked={useHeartbeats} onChange={handleUseHeartbeatsChange} />}
                                                label="Pay by Heartbeats"
                                                sx={{ ml: 2, mt: 2 }}
                                            /> : null
                                        }
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                )}
            </Box>
            <Modal
                open={showConfirmModal}
                onClose={() => setShowConfirmModal(false)}
                aria-labelledby="confirm-modal-title"
                aria-describedby="confirm-modal-description"
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
                    <Typography id="confirm-modal-title" variant="h6" component="h2">
                        Confirm Transaction
                    </Typography>
                    <Typography id="confirm-modal-description" sx={{ mt: 2 }}>
                        This transaction will consume {(totalCost / 10).toFixed(0)} heartbeats. Do you want to proceed?
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="contained" color="primary" onClick={handleConfirm} startIcon={<CheckCircleIcon />}>
                            Yes
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => setShowConfirmModal(false)} startIcon={<CancelIcon />}>
                            No
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Container>
    );
};

export default Payment;