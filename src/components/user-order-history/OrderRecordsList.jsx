import React, {useState} from 'react';
import {Box} from '@mui/material';
import OrderRecord from './OrderRecord';

const OrderRecordsList = ({orders}) => {
    const [expandedOrderId, setExpandedOrderId] = useState(null);

    const handleToggle = (orderId) => {
        setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
    };

    return (
        <Box>
            {orders.map((order) => (
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