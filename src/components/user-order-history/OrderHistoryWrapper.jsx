import React, {useEffect, useState} from 'react';
import {Box, Typography} from '@mui/material';
import OrderRecordsList from './OrderRecordsList';
import {getUserTransactionWithTickets} from "../../api/orderHistory";

const OrderHistoryWrapper = ({width}) => {
    const [transactionWithTickets, setTransactionWithTickets] = useState([])
    useEffect(() => {
        getUserTransactionWithTickets(1).then((response) => {
            setTransactionWithTickets(response.data);
        });
    }, []);
    return (
        <Box sx={{
            margin: '1% auto',
            maxWidth: {width},
            boxShadow: '0 0 10px white',
            backgroundColor: "#4e81ad",
            padding: 2,
            paddingTop: 5,
            borderRadius: 2,
            border: '1px solid #4e81ad',
        }}>
            <Typography variant="h4" sx={{fontWeight: 'bold', marginBottom: 3.5, marginLeft: "35px"}}>
                Order History
            </Typography>
            {transactionWithTickets && transactionWithTickets.length > 0 && (
                <OrderRecordsList orders={transactionWithTickets}/>
            )}
        </Box>
    );
};

export default OrderHistoryWrapper;