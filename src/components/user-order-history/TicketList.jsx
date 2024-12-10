import React from 'react';
import {Box, Divider, Grid} from '@mui/material';
import ETicket from "../ETicket";

const TicketList = ({ tickets }) => {
    return (
        <Box>
            <Divider
                sx={{
                    marginBottom: 1,
                    marginTop: 2,
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                }}
            >
                Ticket Folder
            </Divider>

            <Grid container spacing={2}>
                {tickets.map((ticket, index) => {
                    const eticket = {
                        ticketId: ticket.id,
                        guestId: ticket.idCardNum,
                        guestName: ticket.viewerName
                    };
                    return (
                        <Grid item xs={12 / tickets.length} key={index} sx={{ textAlign: 'center' }}>
                            <ETicket ticket={eticket}/>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default TicketList;