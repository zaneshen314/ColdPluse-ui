import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EventSeatIcon from '@mui/icons-material/EventSeat';

export default function ScheduleMeta({ scheduleMeta, remainingCapacity }) {
    const typographyStyle = { mb: 1, display: 'flex', alignItems: 'center' };
    const iconStyle = { verticalAlign: 'middle', mr: 1 };
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ p: 3, borderRadius: 2 }}>
            <Box flex={1}>
                <img src="/floorPlan.png" alt="Floor Plan" style={{ width: '100%', height: 'auto', borderRadius: 2 }} />
            </Box>
            <Box flex={1} >
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>{scheduleMeta.name}</Typography>
                <Typography variant="body1" sx={typographyStyle}>
                    <LocationOnIcon sx={iconStyle} />
                    Venue: {scheduleMeta.venue}
                </Typography>
                <Typography variant="body1" sx={typographyStyle}>
                    <AccessTimeIcon sx={iconStyle} />
                    Concert Start Time: {new Date(scheduleMeta.start_time).toLocaleString()}
                </Typography>
                <Typography variant="body1" sx={typographyStyle}>
                    <EventIcon sx={iconStyle} />
                    Duration: {scheduleMeta.duration / 60} minutes
                </Typography>
                <Typography variant="body1" sx={typographyStyle}>
                    <AttachMoneyIcon sx={iconStyle} />
                    Price Range: ${scheduleMeta.minPrice} - ${scheduleMeta.maxPrice}
                </Typography>                
                <Divider sx={{ my: 2, backgroundColor: 'white'}} />
                <Typography variant="body1" sx={typographyStyle}>
                    <CalendarTodayIcon sx={iconStyle} />
                    Ticket Sale Start Time: {new Date(scheduleMeta.saleStartTime).toLocaleString()}
                </Typography>
                {scheduleMeta.nextPresellTime && 
                    <Typography variant="body1" sx={typographyStyle}>
                        <ScheduleIcon sx={iconStyle} />
                        Next Ticket Sale Time: {new Date(scheduleMeta.nextPresellTime).toLocaleString()}
                    </Typography>
                }
                <Typography variant="body1" sx={typographyStyle}>
                    <EventSeatIcon sx={iconStyle} />
                    Remaining Available Seats: {remainingCapacity}
                </Typography>
            </Box>
        </Stack>
    );
}