import React from 'react';
import { Typography, Box } from '@mui/material';
import QRCode from 'qrcode.react';

const ETicket = ( { ticket, large } ) => {
  const { id, idCardNum, viewerName } = ticket;
  const typographyStyle = { mb: 1, fontWeight: 'bold' };

  return (
    <Box my={1} border={1} borderColor="grey.500" p={2} sx={{backgroundColor: 'rgba(29, 29, 29, 0.3)', borderRadius:'10px', margin:'1rem'}}>
      <Typography variant={"h6"} sx={typographyStyle}>Guest ID: {idCardNum}</Typography>
      <Typography variant={"h6"} sx={typographyStyle}>Guest Name: {viewerName}</Typography>
      <Box mt={2} />
      <QRCode value={id} size={large ? 192 : 128} />
    </Box>
  );
};

export default ETicket;