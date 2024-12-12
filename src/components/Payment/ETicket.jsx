import React from 'react';
import { Typography, Box } from '@mui/material';
import QRCode from 'qrcode.react';

const ETicket = ( { ticket, size } ) => {
  const { id, idCardNum, viewerName } = ticket;

  return (
    <Box my={1} border={1} borderColor="grey.500" p={2}>
      <Typography variant="h6">Guest ID: {idCardNum}</Typography>
      <Typography variant="h6">Guest Name: {viewerName}</Typography>
      <QRCode value={id} size={size ?? 128} />
    </Box>
  );
};

export default ETicket;