import React, { useState } from 'react';
import { Box } from '@mui/material';
import OrderRecord from './OrderRecord';

const mockOrders = [
    {
        id: 1,
        poster: '/ColdPlayHKConcertPosterjpg.jpg',
        title: 'Concert 1',
        venue: 'Venue 1',
        date: '2025-01-01',
        region: 'Region 1',
        purchaseDate: '2024-12-01',
        status: 'Transaction Successful',
        tickets: [
            { ticketId:1, guestId:2, guestName: "hh" },
            { ticketId:1, guestId:2, guestName: "hh" },
            { ticketId:1, guestId:2, guestName: "hh" },
        ],
    },
    {
        id: 2,
        poster: '/ColdPlayHKConcertPosterjpg.jpg',
        title: 'Concert 1',
        venue: 'Venue 1',
        date: '2025-01-01',
        region: 'Region 1',
        purchaseDate: '2024-12-01',
        status: 'Transaction Successful',
        tickets: [
            { ticketId:1, guestId:2, guestName: "hh" },
            { ticketId:1, guestId:2, guestName: "hh" },
            { ticketId:1, guestId:2, guestName: "hh" },
        ],
    }
    // Add more mock orders as needed
];

const OrderRecordsList = () => {
    const [expandedOrderId, setExpandedOrderId] = useState(null);

    const handleToggle = (orderId) => {
        setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
    };

    return (
        <Box>
            {mockOrders.map((order) => (
                <OrderRecord
                    key={order.id}
                    order={order}
                    expanded={expandedOrderId === order.id}
                    onToggle={() => handleToggle(order.id)}
                />
            ))}
        </Box>
    );
};

export default OrderRecordsList;