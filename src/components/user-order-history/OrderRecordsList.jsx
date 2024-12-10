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
            { id: 1, seat: 'A1' },
            { id: 2, seat: 'A2' },
            { id: 2, seat: 'A2' },
        ],
    },
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