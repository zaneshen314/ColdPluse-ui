import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function ConcertMeta({ concertMeta }) {
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            <Box flex={1}>
                <img src="floorPlan.png" alt="Floor Plan" style={{ width: '100%', height: 'auto' }} />
            </Box>
            <Box flex={1}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>{concertMeta.name}</Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    <LocationOnIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Venue: {concertMeta.venue}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    <AccessTimeIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Start Time: {concertMeta.start_time}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    <EventIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Duration: {concertMeta.duration / 60} minutes
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    <AttachMoneyIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Price Range: ${concertMeta.minPrice} - ${concertMeta.maxPrice}
                </Typography>
            </Box>
        </Stack>
    );
}