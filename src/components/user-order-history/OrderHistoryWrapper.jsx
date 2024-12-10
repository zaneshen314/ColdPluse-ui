import React from 'react';
import { Box, Typography } from '@mui/material';
import OrderRecordsList from './OrderRecordsList';

const OrderHistoryWrapper = ( {width} ) => {
    return (
        <Box sx={{ margin: '1% 20%',
            maxWidth: {width},
            boxShadow: 3,
            padding: 2,
            borderRadius: 2, }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2, marginLeft: "20px" }}>
                Order History
            </Typography>
            <OrderRecordsList />
        </Box>
    );
};

export default OrderHistoryWrapper;