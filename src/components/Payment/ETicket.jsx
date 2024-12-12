import React from 'react';
import { Typography, Box } from '@mui/material';
import QRCode from 'qrcode.react';

const ETicket = ( { ticket, large } ) => {
  const { id, idCardNum, viewerName } = ticket;

  return (
    <Box my={1} border={1} borderColor="grey.500" p={2}>
      <Typography variant={large ? "h5" : "h6"}>Guest ID: {idCardNum}</Typography>
      <Typography variant={large ? "h5" : "h6"}>Guest Name: {viewerName}</Typography>
      <Box mt={2} />
      <QRCode value={id} size={large ? 192 : 128} />
    </Box>
  );
};

export default ETicket;